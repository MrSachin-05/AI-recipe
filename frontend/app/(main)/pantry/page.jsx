"use client";

import {
  deletePantryItem,
  getPantryItems,
  updatePantryItem,
} from "@/actions/pantry.actions";
import AddToPantryModal from "@/components/AddToPantryModal";
import PricingModal from "@/components/PricingModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import {
  Check,
  ChefHat,
  Edit2,
  Loader2,
  Package,
  Plus,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const PantryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ name: "", quantity: "" });

  // Fetching pantry items
  const {
    loading: loadingItems,
    data: itemsData,
    fn: fetchItems,
  } = useFetch(getPantryItems);

  // Delete items
  const {
    loading: deleting,
    data: deleteData,
    fn: deleteItem,
  } = useFetch(deletePantryItem);

  // Update item
  const {
    loading: updating,
    data: updateData,
    fn: updateItem,
  } = useFetch(updatePantryItem);

  // Load items on mount
  useEffect(() => {
    fetchItems();
  }, []);

  // Update items when data arrives
  useEffect(() => {
    if (itemsData?.success) {
      setItems(itemsData.items);
    }
  }, [itemsData]);

  // console.log(items);

  // Refresh after delete
  useEffect(() => {
    if (deleteData?.success && !deleting) {
      toast.success("Item removed from pantry");
      fetchItems();
    }
  }, [deleteData]);

  // Refresh after update
  useEffect(() => {
    if (updateData?.success) {
      toast.success("Item updated successfully");
      setEditingId(null);
      fetchItems();
    }
  }, [updateData]);

  // handle Delete
  const handleDelete = async (itemId) => {
    const formData = new FormData();
    formData.append("itemId", itemId);
    await deleteItem(formData);
  };

  // Start Editing
  const startEdit = (item) => {
    setEditingId(item.documentId);
    setEditValues({
      name: item.name,
      quantity: item.quantity,
    });
  };

  // Save edit
  const saveEdit = async () => {
    const formData = new FormData();
    formData.append("itemId", editingId);
    formData.append("name", editValues.name);
    formData.append("quantity", editValues.quantity);
    await updateItem(formData);
  };

  // cancel edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditValues({ name: "", quantity: "" });
  };

  const handleModalSuccess = () => {
    fetchItems();
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Package className="w-14 h-14 text-purple-400 shrink-0 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]" />
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  My Pantry
                </h1>
                <p className="text-zinc-400 font-light mt-1">
                  Manage your ingredients and discover what you can cook
                </p>
              </div>
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex"
              size="lg"
              variant="primary"
            >
              <Plus className="w-5 h-5" />
              Add to Pantry
            </Button>
          </div>
          {itemsData?.scanLimit !== undefined && (
            <div className="bg-zinc-900/90 py-3 px-4 border border-zinc-800 inline-flex items-center gap-3 rounded-xl hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <div className="text-sm">
                {itemsData.scanLimit === "unlimited" ? (
                  <>
                    <span className="font-bold text-purple-400">ထ</span>
                    <span className="text-zinc-400">
                      {" "}
                      Unlimited AI scans (Pro Plan)
                    </span>
                  </>
                ) : (
                  <>
                    <PricingModal>
                      <span className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                        Upgrade to Pro for unlimited Pantry scans
                      </span>
                    </PricingModal>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Quick Action Card - Find Recipes */}
        {items.length > 0 && (
          <Link href={"/pantry/recipes"} className="block mb-8">
            <div className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 text-white p-6 rounded-2xl border border-white/20 shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl border border-white/30 group-hover:bg-white/30 transition-colors">
                  <ChefHat className="w-8 h-8" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1 capitalize">
                    What can I cook today
                  </h3>

                  <p className="text-purple-100 text-sm font-light">
                    Get AI-powered recipe suggestions from your {items.length}{" "}
                    ingredients
                  </p>
                </div>
                <div className="hidden sm:block">
                  <Badge className="bg-white/20 text-white border border-white/30 font-bold uppercase tracking-wide">
                    {items.length} items
                  </Badge>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Loading State */}
        {loadingItems && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-purple-400 animate-spin mb-4" />
            <p className="text-zinc-400">Loading your pantry...</p>
          </div>
        )}

        {/* Pantry Items Grid */}
        {!loadingItems && items.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Your Ingredients
              </h2>
              <Badge
                variant="outline"
                className="text-zinc-300 border-zinc-700 bg-zinc-900/60 font-bold uppercase tracking-wide px-3 py-1"
              >
                {items.length} {items.length === 1 ? "item" : "items"}
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item) => (
                <div
                  key={item.documentId}
                  className="bg-zinc-900/90 rounded-2xl p-5 border border-zinc-800 hover:border-purple-500/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:-translate-y-1 transition-all group"
                >
                  {editingId === item.documentId ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editValues.name}
                        onChange={(e) =>
                          setEditValues({ ...editValues, name: e.target.value })
                        }
                        className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm"
                        placeholder="Ingredient name"
                      />

                      <input
                        type="text"
                        value={editValues.quantity}
                        onChange={(e) =>
                          setEditValues({
                            ...editValues,
                            quantity: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 bg-zinc-950 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-purple-500 text-sm"
                        placeholder="Quantity"
                      />

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={saveEdit}
                          disabled={updating}
                          className="flex-1 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                        >
                          {updating ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Check className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={cancelEdit}
                          disabled={updating}
                          className="flex-1 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-white mb-1 group-hover:text-purple-300 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-zinc-400 text-sm font-light">
                            {item.quantity}
                          </p>
                        </div>

                        <div className="flex gap-1">
                          <Button
                            onClick={() => startEdit(item)}
                            variant="ghost"
                            className="text-zinc-400 hover:text-white hover:bg-zinc-800"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Button>

                          <Button
                            onClick={() => handleDelete(item.documentId)}
                            variant="ghost"
                            className="text-zinc-400 hover:text-rose-400 hover:bg-rose-950/40"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-xs text-zinc-500">
                        Added {new Date(item.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loadingItems && items.length === 0 && (
          <div className="bg-zinc-900/80 backdrop-blur-md rounded-3xl p-12 text-center border-2 border-dashed border-zinc-800">
            <div className="bg-purple-950/60 border border-purple-800/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <Package className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Your Pantry is Empty
            </h3>
            <p className="text-zinc-400 mb-6 max-w-md mx-auto">
              Scan your pantry or add ingredients manually to get tailored recipe recommendations!
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="primary"
              className="gap-2"
            >
              <Plus className="w-4 h-4" />
              Add First Ingredient
            </Button>
          </div>
        )}
      </div>

      {/* Add to pantry modal */}
      <AddToPantryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
};

export default PantryPage;
