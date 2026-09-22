import useFetch from "@/hooks/use-fetch";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import RecipeCard from "./RecipeCard";
import CountryLogo from "@/components/CountryLogo";
import { getCategoryEmoji } from "@/lib/data";

const RecipeGrid = ({
  type, // "category" or "cuisine"
  value, // actual category/cuisine name
  fetchAction, // server action to fetch meals
  backLink = "/dashboard",
}) => {
  const { data, loading, fn: fetchMeals } = useFetch(fetchAction);

  useEffect(() => {
    if (value) {
      // Capitalize first letter for API call
      const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
      fetchMeals(formattedValue);
    }
  }, [value]);

  const meals = data?.meals || [];
  const displayName = value?.replace(/-/g, " "); // Convert "saudi-arabian" to "saudi arabian"

  return (
    <div className="min-h-screen bg-[#09090b] text-white pt-14 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] transition-all mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-4 flex-wrap mb-2">
            {type === "cuisine" ? (
              <CountryLogo country={displayName} size="lg" showCuisineBadge={true} />
            ) : (
              <span className="text-4xl">{getCategoryEmoji(displayName)}</span>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white capitalize tracking-tight leading-tight">
              {displayName}{" "}
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                {type === "cuisine" ? "Cuisine" : "Recipes"}
              </span>
            </h1>
          </div>

          {!loading && meals.length > 0 && (
            <p className="text-zinc-400 mt-2">
              {meals.length} delicious {displayName}{" "}
              {type === "cuisine" ? "dishes" : "recipes"} to try
            </p>
          )}
        </div>

        {/* {Loading State} */}

        {loading && (
          <div className="flex flex-col justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-purple-600 animate-spin mb-4" />
            <p className="text-zinc-400"> Loading recipes...</p>
          </div>
        )}

        {!loading && meals.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <RecipeCard key={meal.idMeal} recipe={meal} variant="grid" />
            ))}
          </div>
        )}

        {!loading && meals.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-white mv-6">
              No recipe found
            </h3>
            <p className="text-zinc-400 mb-6">
              We could&apos;t find any {displayName}{" "}
              {type === "cuisine" ? "dishes" : "recipes"}.
            </p>
            <Link href={backLink}>
              <span className="inline-flex item-center gap-2 text-purple-400 hover:text-purple-300 font-semibold">
                <ArrowLeft className="w-4 h-4" />
                Go back to explore more
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeGrid;
