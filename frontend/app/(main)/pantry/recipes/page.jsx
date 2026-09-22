"use client";

import { getRecipesByPantryIngredients } from "@/actions/recipe.actions";
import PricingModal from "@/components/PricingModal";
import RecipeCard from "@/components/RecipeCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import {
  AlertCircle,
  ArrowLeft,
  ChefHat,
  Loader2,
  Package,
  Sparkle,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

const PantryRecipesPage = () => {
  const {
    loading,
    data: recipesData,
    fn: fetchSuggestions,
  } = useFetch(getRecipesByPantryIngredients);
  

  // Load suggestions on mount
  useEffect(() => {
    fetchSuggestions();
  }, []);

  const recipes = recipesData?.recipes || [];
  const ingredientsUsed = recipesData?.ingredientsUsed || "";

  return (
    <div className="min-h-screen bg-[#09090b] text-white pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/pantry"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-4 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pantry
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <ChefHat className="w-14 h-14 text-purple-400 shrink-0 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]" />
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                What Can I Cook
              </h1>
              <p className="text-zinc-400 font-light mt-1">
                AI-powered recipe suggestions based on your pantry
              </p>
            </div>
          </div>

          {/* Ingredients Used */}
          {ingredientsUsed && (
            <div className="bg-zinc-900/90 rounded-2xl p-5 border border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] mb-4">
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-bold text-white mb-1">
                    Your Available Ingredients:
                  </h3>
                  <p className="text-zinc-300 text-sm font-light">
                    {ingredientsUsed}
                  </p>
                </div>
              </div>
            </div>
          )}

          {recipesData !== undefined && (
            <div className="bg-zinc-900/90 p-4 rounded-xl border border-zinc-800 inline-flex items-center gap-3">
              <Sparkle className="w-5 h-5 text-pink-400" />
              <div className="text-sm">
                {recipesData.recommendationsLimit === "unlimited" ? (
                  <>
                    <span className="font-bold text-purple-400">∞</span>
                    <span className="text-zinc-400 font-light">
                      {" "}
                      Unlimited AI recommendations (Pro Plan)
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-zinc-400 font-light">
                      Upgrade to Pro for unlimited AI recommendations
                    </span>
                  </>
                )}
              </div>
            </div>
          )}

          {!loading && recipesData?.isFallback && recipesData?.message && (
            <div className="mt-4 bg-zinc-900/90 rounded-xl p-4 border border-zinc-800">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-pink-400 mt-0.5 shrink-0" />
                <p className="text-zinc-300 text-sm font-light">
                  {recipesData.message}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Loading state  */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-purple-400 animate-spin mb-6" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Finding Perfect Recipes...
            </h2>
            <p className="text-zinc-400 font-light">
              Our AI chef is analyzing your ingredients
            </p>
          </div>
        )}

        {/* Recipes Grid - Using RecipeCard Component */}
        {!loading && recipes.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">
                  Recipe Suggestions
                </h2>
              </div>
              <Badge
                variant="outline"
                className="border-zinc-700 text-zinc-300 bg-zinc-900/60 font-bold uppercase tracking-wide px-3 py-1"
              >
                {recipes.length} {recipes.length === 1 ? "recipe" : "recipes"}
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} variant="pantry"/>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                onClick={() => fetchSuggestions(new FormData())}
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Get New Suggestions
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Empty pantry state */}
        {!loading && recipes.length === 0 && recipesData?.success === false && (
          <div className="bg-zinc-900/80 backdrop-blur-md rounded-3xl p-12 text-center border-2 border-dashed border-zinc-800">
            <div className="bg-purple-950/60 border border-purple-800/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <AlertCircle className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Your Pantry is Empty
            </h3>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto font-light">
              Add ingredients to your pantry first so we can suggest delicious
              recipes you can make!
            </p>
          </div>
        )}

        {!loading && recipesData === undefined && (
          <div className="bg-linear-to-br from-zinc-900 via-purple-950/40 to-pink-950/40 rounded-3xl p-12 text-center border border-purple-800/40 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <div className="bg-pink-950/60 border border-pink-800/50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
              <Sparkles className="w-10 h-10 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Monthly Limit Reached
            </h3>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto font-light">
              You&apos;ve used all your AI recipe recommendations this month.
              Upgrade to Pro for unlimited suggestions!
            </p>
            <PricingModal>
              <Button variant="primary" className="gap-2">
                <Sparkles className="w-4 h-4" />
                Upgrade to Pro
              </Button>
            </PricingModal>
          </div>
        )}
      </div>
    </div>
  );
};

export default PantryRecipesPage;
