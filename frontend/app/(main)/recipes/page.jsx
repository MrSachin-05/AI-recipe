"use client";

import { getSavedRecipes } from "@/actions/recipe.actions";
import RecipeCard from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { Bookmark, ChefHat, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const SavedRecipesPage = () => {
  const {
    loading,
    data: recipesData,
    fn: fetchSavedRecipes,
  } = useFetch(getSavedRecipes);

  useEffect(() => {
    fetchSavedRecipes();
  }, []);

  const recipes = recipesData?.recipes || [];
  // console.log("recipes>>>", recipesData);
  

  return (
    <div className="min-h-screen bg-[#09090b] text-white pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-8">
          <Bookmark className="w-16 h-16 text-purple-400 shrink-0 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]" />
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              My Saved Recipes
            </h1>
            <p className="text-zinc-400 mt-1">
              Your personal collection of favorite recipes
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-purple-400 animate-spin mb-6" />
            <p className="text-zinc-400">Loading your saved recipes...</p>
          </div>
        )}

        {/* Recipes Grid */}
        {!loading && recipes.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.documentId}
                recipe={recipe}
                variant="list"
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && recipes.length === 0 && (
          <div className="bg-zinc-900/80 backdrop-blur-md rounded-3xl p-12 text-center border-2 border-dashed border-zinc-800">
            <div className="bg-purple-950/60 border border-purple-800/40 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <Bookmark className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No Saved Recipes Yet
            </h3>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Start exploring recipes and save your favorites to build your
              personal cookbook!
            </p>
            <Link href="/dashboard">
              <Button variant="primary" className="gap-2">
                <ChefHat className="w-4 h-4" />
                Explore Recipes
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedRecipesPage;
