"use client";

import { getMealsByCategory } from "@/actions/mealdb.actions";
import RecipeGrid from "@/components/RecipeGrid";
import { getCategoryEmoji } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ALL_CATEGORIES = [
  "Beef",
  "Chicken",
  "Dessert",
  "Lamb",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
  "Breakfast",
  "Goat",
  "Miscellaneous",
];

export default function CategoryRecipesPage() {
  const params = useParams();
  const category = params?.category;

  if (category) {
    const formattedCategory =
      category.charAt(0).toUpperCase() + category.slice(1);

    return (
      <RecipeGrid
        type="category"
        value={formattedCategory}
        fetchAction={getMealsByCategory}
        backLink="/dashboard"
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white pt-16 pb-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] transition-all mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-3">
            Browse by <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Category</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Explore curated recipes and dishes organized by course and food type.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {ALL_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/recipes/category/${cat.toLowerCase()}`}
              className="bg-zinc-900/80 p-6 border-2 border-zinc-800 hover:border-purple-500 hover:bg-zinc-800/90 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 text-center group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{getCategoryEmoji(cat)}</div>
              <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors text-sm">
                {cat}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
