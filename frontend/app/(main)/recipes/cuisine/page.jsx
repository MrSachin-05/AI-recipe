"use client";

import { getMealsByArea } from "@/actions/mealdb.actions";
import CountryLogo from "@/components/CountryLogo";
import RecipeGrid from "@/components/RecipeGrid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ALL_CUISINES = [
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Croatian",
  "Dutch",
  "Egyptian",
  "Filipino",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Jamaican",
  "Japanese",
  "Kenyan",
  "Korean",
  "Malaysian",
  "Mexican",
  "Moroccan",
  "Polish",
  "Portuguese",
  "Russian",
  "Spanish",
  "Thai",
  "Turkish",
  "Ukrainian",
  "Vietnamese",
  "Argentinian",
  "Australian",
  "Brazilian",
];

export default function CuisineRecipesPage() {
  const params = useParams();
  const cuisine = params?.cuisine;

  if (cuisine) {
    return (
      <RecipeGrid
        type="cuisine"
        value={cuisine}
        fetchAction={getMealsByArea}
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
            Explore <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">World Cuisines</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Travel the globe through iconic regional dishes, official flag logos, and culinary traditions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {ALL_CUISINES.map((area) => (
            <Link
              key={area}
              href={`/recipes/cuisine/${area.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-zinc-900/80 p-4 border-2 border-zinc-800 hover:border-pink-500 hover:bg-zinc-800/90 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 group cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-3 min-w-0">
                <CountryLogo country={area} size="md" showCuisineBadge={true} />
                <span className="font-bold text-white group-hover:text-pink-400 transition-colors text-sm truncate">
                  {area}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
