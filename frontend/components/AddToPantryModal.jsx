"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Camera, Check, Loader2, Plus, X } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import {
  addPantryItemManually,
  saveToPantry,
  scanPantryImage,
} from "@/actions/pantry.actions";
import { Button } from "./ui/button";
import { toast } from "sonner";
import ImageUploader from "./ImageUploader";
import { Badge } from "./ui/badge";

const AddToPantryModal = ({ isOpen, onClose, onSuccess }) => {
  const [activeTab, setActiveTab] = useState("scan");
  const [selectedImage, setSelectedImage] = useState(null);
  const [scannedIngredients, setScannedIngredients] = useState([]);
  const [manualItem, setManualItem] = useState({ name: "", quantity: "" });

  // Scan image
  const {
    loading: scanning,
    data: scanData,
    fn: scanImage,
  } = useFetch(scanPantryImage);

  // Update scanned ingredients when scan completes

  useEffect(() => {
    if (scanData?.success && scanData?.ingredients) {
      setScannedIngredients(scanData.ingredients);
      toast.success(`Found ${scanData.ingredients.length} ingredients!`);
    }
  }, [scanData]);

  // Save scanned items
  const {
    loading: saving,
    data: saveData,
    fn: saveScannedItems,
  } = useFetch(saveToPantry);

  // Add manual item
  const {
    loading: adding,
    data: addData,
    fn: addManualItem,
  } = useFetch(addPantryItemManually);

  // Handle mannual add success
  useEffect(() => {
    if (addData?.success) {
      toast.success("Item added to pantry!");
      setManualItem({ name: "", quantity: "" });
      handleClose();
      if (onSuccess) onSuccess();
    }
  }, [addData]);

  const handleClose = () => {
    setActiveTab("scan");
    setSelectedImage(null);
    setScannedIngredients([]);
    setManualItem({ name: "", quantity: "" });
    onClose();
  };

  // Handle image selection
  const handleImageSelect = (file) => {
    setSelectedImage(file);
    setScannedIngredients([]); // Reset when new image selected
  };

  const handleAddManual = async (e) => {
    e.preventDefault();
    if (!manualItem.name.trim() || !manualItem.quantity.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    const formData = new FormData();
    formData.append("name", manualItem.name);
    formData.append("quantity", manualItem.quantity);
    await addManualItem(formData);
  };

  // Scan Image
  const handleScan = async () => {
    if (!selectedImage) return;
    const formData = new FormData();
    formData.append("image", selectedImage);
    await scanImage(formData);
  };

  const handleSaveScanned = async () => {
    if (scannedIngredients.length === 0) {
      toast.error("No ingredients to save");
      return;
    }
    const formData = new FormData();
    formData.append("ingredients", JSON.stringify(scannedIngredients));
    await saveScannedItems(formData);
  };

  useEffect(() => {
    if (saveData?.success) {
      toast.success(saveData.message);
      handleClose();
      if (onSuccess) onSuccess();
    }
  }, [saveData]);

  const removeIngredient = (index) => {
    setScannedIngredients(scannedIngredients.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl max-h-[93vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-zinc-800 text-white shadow-[0_0_50px_rgba(0,0,0,0.9)]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight text-white">
            Add to Pantry
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Scan your pantry with AI or add items manually
          </DialogDescription>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="grid w-full grid-cols-2 bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
            <TabsTrigger value="scan" className="gap-2 text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-sm">
              <Camera className="w-4 h-4" />
              AI scan
            </TabsTrigger>
            <TabsTrigger value="manual" className="gap-2 text-zinc-400 data-[state=active]:bg-zinc-800 data-[state=active]:text-white data-[state=active]:shadow-sm">
              <Plus className="w-4 h-4" />
              Add Manually
            </TabsTrigger>
          </TabsList>
          <TabsContent value="scan" className="space-y-6 mt-6">
            {scannedIngredients.length === 0 ? (
              <div className="space-y-4">
                {/* Image Uploader */}
                <ImageUploader
                  onImageSelect={handleImageSelect}
                  loading={scanning}
                />

                {selectedImage && !scanning && (
                  <Button
                    variant="primary"
                    onClick={handleScan}
                    className="w-full h-12 text-lg shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                    disabled={scanning}
                  >
                    {scanning ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Camera className="w-5 h-5 mr-2" />
                        Scan Image
                      </>
                    )}
                  </Button>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Review Detected Items
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Found {scannedIngredients.length} Ingredients
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setScannedIngredients([]);
                      setSelectedImage(null);
                    }}
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white gap-2"
                  >
                    <Camera className="w-4 h-4" />
                    Scan Again
                  </Button>
                </div>
                <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                  {scannedIngredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-zinc-900/90 rounded-xl border border-zinc-800 hover:border-purple-500/50 transition-all"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-white">
                          {ingredient.name}
                        </div>
                        <div className="text-sm text-zinc-400">
                          {ingredient.quantity}
                        </div>
                      </div>
                      {ingredient.confidence && (
                        <Badge
                          variant="outline"
                          className="text-xs text-purple-300 border-purple-800/60 bg-purple-950/60"
                        >
                          {Math.round(ingredient.confidence * 100)}%
                        </Badge>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeIngredient(index)}
                        className="text-zinc-400 hover:text-rose-400 hover:bg-rose-950/30"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Save Button */}
                <Button
                  onClick={handleSaveScanned}
                  disabled={saving || scannedIngredients.length === 0}
                  className="flex-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-400 h-12 w-full shadow-lg shadow-purple-500/30 font-semibold"
                >
                  {saving ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Save {scannedIngredients.length} Items to Pantry
                    </>
                  )}
                </Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="manual" className="mt-6">
            <form onSubmit={handleAddManual} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Ingredient Name
                </label>
                <input
                  type="text"
                  value={manualItem.name}
                  onChange={(e) =>
                    setManualItem({ ...manualItem, name: e.target.value })
                  }
                  placeholder="e.g., Chicken breast"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-all"
                  disabled={adding}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Quantity
                </label>
                <input
                  type="text"
                  value={manualItem.quantity}
                  onChange={(e) =>
                    setManualItem({ ...manualItem, quantity: e.target.value })
                  }
                  placeholder="e.g., 500g, 2 cups, 3 pieces"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-all"
                  disabled={adding}
                />
              </div>

              <Button
                type="submit"
                disabled={adding}
                variant="primary"
                className="flex-1 h-12 w-full shadow-[0_0_25px_rgba(168,85,247,0.35)]"
              >
                {adding ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Adding...
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5 mr-2" />
                    Add Item
                  </>
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AddToPantryModal;
