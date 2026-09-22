"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ChefHat, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { toast } from "sonner";

const HowToCookModal = () => {
  const route = useRouter();
  const [recipeName, setRecipeName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) {
      setRecipeName(""); // Reset input when closing
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recipeName.trim()) {
      toast.error("Please enter a recipe name");
      return;
    }

    route.push(`/recipe?cook=${encodeURIComponent(recipeName.trim())}`);
    handleOpenChange(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger className="text-zinc-400 hover:text-white transition-all text-sm font-medium flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
        <ChefHat className="w-4 h-4 text-purple-400" />
        How to cook?
      </DialogTrigger>
      <DialogContent className="max-w-lg bg-zinc-950 border border-zinc-800 text-white shadow-[0_0_50px_rgba(0,0,0,0.9)]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2 text-white">
            <ChefHat className="w-6 h-6 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            How to cook?
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Enter any recipe name and our AI chef will guide you through the
            cooking process
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              What would you like to cook?
            </label>
            <div className="relative">
              <input
                type="text"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                placeholder="e.g., Chicken Biryani, Chocolate Cake, Pasta Carbonara"
                className="w-full px-4 py-3 pr-12 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 text-white placeholder:text-zinc-500 transition-all"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            </div>
          </div>
          <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800">
            <h4 className="text-sm font-semibold text-purple-300 mb-2">
              💡 Try These:
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Butter Chicken", "Chocolate Brownies", "Caesar Salad"].map(
                (example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => setRecipeName(example)}
                    className="px-3 py-1 bg-zinc-800 text-purple-300 border border-zinc-700 rounded-full text-sm hover:bg-purple-950/60 hover:border-purple-500/60 hover:text-white transition-all shadow-sm"
                  >
                    {example}
                  </button>
                ),
              )}
            </div>
          </div>
          <Button
            variant="primary"
            type="submit"
            disabled={!recipeName.trim()}
            className="flex-1 w-full h-12 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            <ChefHat className="w-5 h-5 mr-2" />
            Get Recipe
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HowToCookModal;
