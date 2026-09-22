import {
  getAreas,
  getCategories,
  getRecipeOfTheDay,
} from "@/actions/mealdb.actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCategoryEmoji, getCountryFlag } from "@/lib/data";
import CountryLogo from "@/components/CountryLogo";
import { ArrowRight, Flame, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardPage = async () => {
  const recipeData = await getRecipeOfTheDay();
  const categoriesData = await getCategories();
  const areasData = await getAreas();

  const recipeOfTheDay = recipeData?.recipe;
  const categories = categoriesData?.categories || [];
  const areas = areasData?.areas || [];

  // Remove duplicate areas
  const uniqueAreas = Array.from(
    new Map(areas.map((area) => [area.strArea, area])).values()
  );

  return (
    <div className="min-h-screen bg-[#09090b] py-16 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-5">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
            Fresh Recipes, Served Daily♨️✨
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl">
            Discover thousands of recipes from around the world. Cook, create,
            and savor.
          </p>
        </div>
        {/* Recipe of the day - Hero section */}
        {recipeOfTheDay && (
          <section className="mb-20 relative">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="w-6 h-6 text-pink-500" />
              <h2 className="text-3xl font-serif font-bold text-white">
                Recipe of the Day
              </h2>
            </div>
            <Link
              href={`/recipe?cook=${encodeURIComponent(recipeOfTheDay.strMeal)}`}
            >
              <div className="relative bg-zinc-900/90 border-2 border-zinc-800 overflow-hidden hover:border-purple-500/80 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-4/3 md:aspect-auto border-b-2 md:border-b-0 md:border-r-2 border-zinc-800 overflow-hidden">
                    <Image
                      src={recipeOfTheDay.strMealThumb}
                      alt={recipeOfTheDay.strMeal}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge
                        variant="outline"
                        className="border-2 border-purple-500/80 text-purple-300 bg-purple-950/60 font-bold"
                      >
                        {recipeOfTheDay.strCategory}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-2 border-blue-500/80 text-blue-300 bg-blue-950/60 font-bold"
                      >
                        <Globe className="w-3 h-3 mr-1" />
                        {recipeOfTheDay.strArea}
                      </Badge>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                      {recipeOfTheDay.strMeal}
                    </h3>
                    <p className="text-zinc-400 mb-6 line-clamp-3 font-light text-lg">
                      {recipeOfTheDay.strInstructions?.substring(0, 200)}...
                    </p>

                    <Button variant="primary" size="lg">
                      Start Cooking <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Browse by categories */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Browse by Category
            </h2>
            <p className="text-zinc-400 text-lg font-light">
              Find recipes that match your mood
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <Link
                key={category.strCategory}
                href={`/recipes/category/${category.strCategory.toLowerCase()}`}
              >
                <div className="bg-zinc-900/80 p-6 border-2 border-zinc-800 hover:border-purple-500 hover:bg-zinc-800/90 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 text-center group cursor-pointer">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {getCategoryEmoji(category.strCategory)}
                  </div>
                  <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors text-sm">
                    {category.strCategory}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by cuisine */}

        <section className="pb-12">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Explore World Cuisines
            </h2>
            <p className="text-zinc-400 text-lg font-light">
              Travel the globe through food
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {uniqueAreas.map((area) => (
              <Link
                key={area.strArea}
                href={`/recipes/cuisine/${area.strArea
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <div className="bg-zinc-900/80 p-4 border-2 border-zinc-800 hover:border-pink-500 hover:bg-zinc-800/90 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 group cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <CountryLogo country={area.strArea} size="sm" showCuisineBadge={true} />
                    <span className="font-bold text-white group-hover:text-pink-400 transition-colors text-sm truncate">
                      {area.strArea}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
