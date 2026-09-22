"use client";

import {
  getOrGenerateRecipe,
  removeRecipeFromCollection,
  saveRecipeToCollection,
} from "@/actions/recipe.actions";
import RecipePDF from "@/components/RecipePDF";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  AlertCircle,
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  ChefHat,
  Clock,
  Download,
  Flame,
  Lightbulb,
  Loader2,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";
import { toast } from "sonner";

function RecipeContent() {
  const searchParams = useSearchParams();
  const recipeName = searchParams.get("cook");

  const router = useRouter();

  const [recipe, setRecipe] = useState(null);
  const [recipeId, setRecipeId] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isFallback, setIsFallback] = useState(false);

  // Get or generate recipe
  const {
    loading: loadingRecipe,
    data: recipeData,
    fn: fetchRecipe,
  } = useFetch(getOrGenerateRecipe);

  // Save to collection
  const {
    loading: saving,
    data: saveData,
    fn: saveToCollection,
  } = useFetch(saveRecipeToCollection);

  // Remove from Collection
  const {
    loading: removing,
    data: removeData,
    fn: removeToCollection,
  } = useFetch(removeRecipeFromCollection);

  const saveDisabled = saving || removing || !recipeId || isFallback;

  // Handle save success
  useEffect(() => {
    if (saveData?.success) {
      if (saveData.alreadySaved) {
        toast.info("Recipe is already in your collection");
      } else {
        setIsSaved(true);
        toast.success("Recipe saved to your collection");
      }
    }
  }, [saveData]);

  // Handle remove success
  useEffect(() => {
    if (removeData?.success) {
      setIsSaved(false);
      toast.success("Recipe removed from collection");
    }
  }, [removeData]);

  const handleToggleSave = async () => {
    if (!recipe || !recipeId || isFallback) return;

    const formData = new FormData();
    formData.append("recipeId", recipeId);

    if (isSaved) {
      await removeToCollection(formData);
    } else {
      await saveToCollection(formData);
    }
  };

  // Fetch recipe on mount
  useEffect(() => {
    if (recipeName && !recipe) {
      const formData = new FormData();
      formData.append("recipeName", recipeName);
      fetchRecipe(formData);
    }
  }, [recipeName]);

  // Update recipe when data arrives
  useEffect(() => {
    if (recipeData?.success) {
      setRecipe(recipeData.recipe);
      setRecipeId(recipeData.recipeId);
      setIsSaved(recipeData.isSaved);
      setIsFallback(!!recipeData.isFallback);

      if (recipeData.message) {
        toast.info(recipeData.message);
      } else if (recipeData.fromDatabase) {
        toast.success("Recipe loaded from database");
      } else {
        toast.success("New recipe generate and saved!");
      }
    }
  }, [recipeData]);

  // No recipe name in url
  if (!recipeName) {
    return (
      <div className="min-h-screen bg-[#09090b] pt-24 pb-16 text-white">
        <div className="container mx-auto max-w-4xl text-center py-20">
          <div className="bg-purple-950/50 w-20 h-20 border-2 border-purple-800/80 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <AlertCircle className="w-10 h-10 text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            No recipe specified
          </h2>
          <p className="text-zinc-400 mb-6 font-light">
            Please select a recipe from the dashboard
          </p>
          <Link href="/dashboard">
            <Button variant="primary">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (loadingRecipe === null || loadingRecipe) {
    return (
      <div className="min-h-screen bg-[#09090b] pt-24 pb-16 text-white">
        <div className="container mx-auto max-w-4xl text-center py-20">
          <ClockLoader className="mx-auto mb-6" color="#c084fc" />
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Preparing your recipe
          </h2>
          <p className="text-zinc-400 font-light">
            Our AI chef is crafting detailed instructions for{" "}
            <span className="font-bold text-purple-400">{recipeName}</span>
            ...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (loadingRecipe === false && !recipe) {
    return (
      <div className="min-h-screen bg-[#09090b] pt-24 pb-16 text-white">
        <div className="container mx-auto max-w-4xl text-center py-20">
          <div className="bg-red-950/50 w-20 h-20 border-2 border-red-800/80 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Failed to load recipe
          </h2>
          <p className="text-zinc-400 mb-6 font-light">
            Something went wrong while loading the recipe. Please try again.
          </p>

          <div className="flex gap-3 justify-center">
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="border-2 border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
            <Button
              onClick={() => window.location.reload()}
              variant="primary"
            >
              Retry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] pt-24 pb-16 text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] transition-all mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          <div className="bg-zinc-900/90 p-8 md:p-10 border-2 border-zinc-800 mb-6 hover:border-purple-500/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all">
            {recipe.imageUrl && (
              <div className="relative w-full h-72 overflow-hidden mb-7 rounded-lg">
                <Image
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                  unoptimized
                />
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant="outline"
                className="text-purple-300 border-2 border-purple-800/80 bg-purple-950/60 capitalize"
              >
                {recipe.cuisine}
              </Badge>
              <Badge
                variant="outline"
                className="text-blue-300 border-2 border-blue-800/80 bg-blue-950/60 capitalize"
              >
                {recipe.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {recipe.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-zinc-400 mb-6 font-light">
              {recipe.description}
            </p>

            <div className="flex flex-wrap gap-6 text-zinc-400 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="font-medium text-zinc-300">
                  {parseInt(recipe.prepTime) + parseInt(recipe.cookTime)} mins
                  total
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="font-medium text-zinc-300">{recipe.servings} servings</span>
              </div>

              {recipe.nutrition?.calories && (
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-pink-500" />
                  <span className="font-medium text-zinc-300">
                    {recipe.nutrition.calories} cal/serving
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleToggleSave}
                disabled={saveDisabled}
                className={`${isSaved ? "bg-linear-to-r from-blue-700 to-purple-700 border-2 border-purple-700" : "bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 border-none shadow-md shadow-purple-500/20 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"} text-white gap-2 transition-all`}
              >
                {saving || removing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {saving ? "Saving..." : "Removing..."}
                  </>
                ) : isSaved ? (
                  <>
                    <BookmarkCheck className="w-4 h-4" />
                    Saved to Collection
                  </>
                ) : saveDisabled ? (
                  <>
                    <Bookmark className="w-4 h-4" />
                    Save Unavailable
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    Save to Collection
                  </>
                )}
              </Button>

              {/* PDF Download Button */}
              <PDFDownloadLink
                document={<RecipePDF recipe={recipe} />}
                fileName={`${(recipe?.title || "recipe").replace(/\s+/g, "-").toLowerCase()}.pdf`}
              >
                {({ loading }) => (
                  <Button
                    variant="outline"
                    disabled={loading}
                    className="border-2 border-purple-800/80 bg-zinc-900 text-purple-300 hover:bg-zinc-800 hover:text-white gap-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                  >
                    <Download />
                    {loading ? "Preparing PDF..." : "Download PDF"}
                  </Button>
                )}
              </PDFDownloadLink>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Ingredients & Nutrition */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900/90 p-6 border-2 border-zinc-800 rounded-xl lg:sticky lg:top-24 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all">
              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <ChefHat className="w-6 h-6 text-purple-400" />
                Ingredients
              </h2>

              {/* Ingredients */}
              {Object.entries(
                (recipe?.ingredients ?? []).reduce((acc, ing) => {
                  const cat = ing?.category || "Other";

                  if (!acc[cat]) acc[cat] = [];
                  acc[cat].push(ing);

                  return acc;
                }, {}),
              ).map(([category, items]) => (
                <div key={category} className="mb-6 last:mb-0">
                  {/* Category */}
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                    {category}
                  </h3>

                  {/* Ingredient List */}
                  <ul className="space-y-2">
                    {items.map((ingredient, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center text-zinc-300 text-sm py-2 border-b border-zinc-800/80 last:border-0"
                      >
                        <span className="flex-1">
                          {ingredient?.item || "Unknown ingredient"}
                        </span>

                        <span className="font-bold text-purple-400 text-sm whitespace-nowrap">
                          {ingredient?.amount || ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Nutrition */}
              {recipe?.nutrition && (
                <div className="mt-6 pt-6 border-t-2 border-zinc-800">
                  <h3 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">
                    Nutrition (per serving)
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        label: "Calories",
                        value: recipe?.nutrition?.calories,
                        color: "text-pink-400",
                      },
                      { label: "Protein", value: recipe?.nutrition?.protein },
                      { label: "Carbs", value: recipe?.nutrition?.carbs },
                      { label: "Fat", value: recipe?.nutrition?.fat },
                    ].map((nutrient) => (
                      <div
                        key={nutrient.label}
                        className="bg-zinc-800/60 p-3 border border-zinc-700/60 rounded-md text-center hover:border-purple-500/50 transition-colors"
                      >
                        <div
                          className={`text-lg font-bold ${
                            nutrient.color || "text-white"
                          }`}
                        >
                          {nutrient.value
                            ? String(nutrient.value).replace(
                                "Approximately ",
                                "",
                              )
                            : "N/A"}
                        </div>

                        <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wide">
                          {nutrient.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Instructions & Tips */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-zinc-900/90 p-8 border-2 border-zinc-800 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Step-by Step Instructions
              </h2>

              <div>
                {(recipe.instructions || []).map((step, index) => (
                  <div
                    key={step.step}
                    className={`relative pl-12 pb-8 ${index !== recipe.instructions.length - 1 ? "border-l-2 border-purple-800/60 ml-5" : "ml-5"}`}
                  >
                    {/* Step Number */}
                    <div className="absolute -left-5 top-0 w-10 h-10 bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 text-white flex items-center justify-center font-bold border-2 border-purple-500 shadow-md shadow-purple-500/30">
                      {step.step}
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-zinc-300 font-light mb-3">
                        {step.instruction}
                      </p>

                      {step.tip && (
                        <div className="bg-linear-to-r from-purple-950/60 to-pink-950/40 border-l-4 border-pink-500 p-4 rounded-r-lg">
                          <p className="text-sm text-purple-200 flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 mt-0.5 shrink-0 fill-pink-500 text-pink-400" />
                            <span>
                              <strong className="font-bold text-pink-300">Pro Tip:</strong>{" "}
                              {step.tip}
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-linear-to-br from-blue-950/40 via-purple-950/40 to-pink-950/40 border-2 border-purple-800/60 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      You&apos;re all done!
                    </h3>
                    <p className="text-sm text-zinc-300 font-light">
                      Plate your masterpiece and enjoy your delicious{" "}
                      {recipe.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* General Tips */}
              {recipe.tips && recipe.tips.length > 0 && (
                <div className="bg-linear-to-br from-blue-950/30 via-purple-950/30 to-pink-950/30 p-8 border-2 border-purple-800/50 mt-6 rounded-xl">
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-pink-400 fill-pink-500" />
                    Chef&apos;s Tips & Tricks
                    {recipeData?.isPro && (
                      <span className="text-xs bg-pink-950/80 border border-pink-700/80 text-pink-300 px-2 py-0.5 rounded-full font-semibold">
                        PRO
                      </span>
                    )}
                  </h2>

                  <ul className="space-y-3">
                    {recipe.tips.map((tip, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-zinc-300"
                      >
                        <span
                          className={`flex items-start gap-4 ${recipeData?.isPro ? "" : "blur-sm select-none"}`}
                        >
                          <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-1" />
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecipePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#09090b] pt-24 pb-16 px-4 text-white">
          <div className="container mx-auto max-w-4xl text-center py-20">
            <Loader2 className="w-16 h-16 text-purple-400 animate-spin mx-auto mb-6" />
            <p className="text-zinc-400">Loading recipe...</p>
          </div>
        </div>
      }
    >
      <RecipeContent />
    </Suspense>
  );
}
