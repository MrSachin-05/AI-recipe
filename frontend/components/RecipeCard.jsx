import Link from "next/link";
import Image from "next/image";
import { Clock, ChefHat, Users, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecipeCard = ({ recipe, variant = "default" }) => {
  const getRecipeData = () => {
    if (recipe.strMeal) {
      return {
        title: recipe.strMeal,
        image: recipe.strMealThumb,
        href: `/recipe?cook=${encodeURIComponent(recipe.strMeal)}`,
        showImage: true,
      };
    }

    // For AI-generated pantry recipes
    if (recipe.matchPercentage) {
      return {
        title: recipe.title,
        description: recipe.description,
        category: recipe.category,
        cuisine: recipe.cuisine,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        servings: recipe.servings,
        matchPercentage: recipe.matchPercentage,
        missingIngredients: recipe.missingIngredients || [],
        image: recipe.imageUrl, // Add image support
        href: `/recipe?cook=${encodeURIComponent(recipe.title)}`,
        showImage: !!recipe.imageUrl, // Show if image exists
      };
    }

    // For Strapi recipes (saved recipes, search results)
    if (recipe) {
      return {
        title: recipe.title,
        description: recipe.description,
        category: recipe.category,
        cuisine: recipe.cuisine,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        servings: recipe.servings,
        image: recipe.imageUrl,
        href: `/recipe?cook=${encodeURIComponent(recipe.title)}`,
        showImage: !!recipe.imageUrl,
      };
    }

    // more conditions
    return {};
  };
  const data = getRecipeData();
  if (variant === "grid") {
    return (
      <Link href={data.href || "#"} className="">
        <Card className="rounded-none overflow-hidden bg-zinc-900/90 border-zinc-800 hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group pt-0">
          {data.showImage ? (
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                unoptimized
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">
                    Click to view recipe
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <CardHeader>
            <CardTitle className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
              {data.title}
            </CardTitle>
          </CardHeader>
        </Card>
      </Link>
    );
  }

  if (variant === "pantry") {
    return (
      <Card className="bg-zinc-900/90 border-zinc-800 hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:-translate-y-1.5 transition-all duration-300">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {data.cuisine && (
                  <Badge
                    variant="outline"
                    className="text-purple-300 border-purple-800/80 bg-purple-950/60 capitalize"
                  >
                    {data.cuisine}
                  </Badge>
                )}
                {data.category && (
                  <Badge
                    variant="outline"
                    className="text-blue-300 border-blue-800/80 bg-blue-950/60 capitalize"
                  >
                    {data.category}
                  </Badge>
                )}
              </div>
            </div>
            {/* Match Percentage Badge */}
            {data.matchPercentage && (
              <div className="flex flex-col items-end gap-1">
                <Badge
                  className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 text-white text-lg px-3 py-1 font-bold border-none shadow-md shadow-purple-500/30"
                >
                  {data.matchPercentage}%
                </Badge>
                <span className="text-xs text-zinc-400">Match</span>
              </div>
            )}
          </div>
          <CardTitle className="text-2xl font-serif font-bold text-white">
            {data.title}
          </CardTitle>
          {data.description && (
            <CardDescription className="line-clamp-2 text-zinc-400">
              {data.description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Times & Servings */}
          {(data.prepTime || data.cookTime || data.servings) && (
            <div className="flex gap-4 text-sm text-zinc-400">
              {(data.prepTime || data.cookTime) && (
                <div className="flex items-center gap-1 text-blue-400">
                  <Clock className="w-4 h-4" />
                  <span>
                    {parseInt(data.prepTime || 0) +
                      parseInt(data.cookTime || 0)}{" "}
                    mins
                  </span>
                </div>
              )}
              {data.servings && (
                <div className="flex items-center gap-1 text-purple-400">
                  <User className="w-4 h-4" />
                  <span>{data.servings} servings</span>
                </div>
              )}
            </div>
          )}

          {data.missingIngredients && data.missingIngredients.length > 0 && (
            <div className="p-4 bg-pink-950/30 border border-pink-900/50 rounded-xl">
              <h4 className="text-sm font-semibold text-pink-300 mb-2">
                You&apos;ll need:
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.missingIngredients.map((ingredient, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="text-pink-300 border-pink-800/80 bg-zinc-900"
                  >
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Link href={data.href} className="w-full">
            <Button className="w-full bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] text-white gap-2 shadow-sm transition-all">
              <ChefHat className="w-4 h-4" />
              View Full Recipe
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }

  if (variant === "list") {
    return (
      <Link href={`/recipe?cook=${encodeURIComponent(data.title)}`}>
        <Card className="rounded-none bg-zinc-900/90 border-zinc-800 hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group overflow-hidden py-0">
          <div className="flex flex-col md:flex-row">
            {/* Image (if available) */}
            {data.showImage ? (
              <div className="relative w-full md:w-48 aspect-video md:aspect-square shrink-0 overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 192px"
                  unoptimized
                />
              </div>
            ) : (
              // Fallback gradient when no image
              <div className="relative w-full md:w-48 aspect-video md:aspect-square shrink-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center">
                <ChefHat className="w-12 h-12 text-white/30" />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 py-5">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {data.cuisine && (
                    <Badge
                      variant="outline"
                      className="text-purple-300 border-purple-800/80 bg-purple-950/60 capitalize"
                    >
                      {data.cuisine}
                    </Badge>
                  )}
                  {data.category && (
                    <Badge
                      variant="outline"
                      className="text-blue-300 border-blue-800/80 bg-blue-950/60 capitalize"
                    >
                      {data.category}
                    </Badge>
                  )}
                </div>

                <CardTitle className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {data.title}
                </CardTitle>

                {data.description && (
                  <CardDescription className="line-clamp-2 text-zinc-400">
                    {data.description}
                  </CardDescription>
                )}
              </CardHeader>

              {(data.prepTime || data.cookTime || data.servings) && (
                <CardContent>
                  <div className="flex gap-4 text-sm text-zinc-400 pt-4">
                    {(data.prepTime || data.cookTime) && (
                      <div className="flex items-center gap-1 text-blue-400">
                        <Clock className="w-4 h-4" />
                        <span>
                          {parseInt(data.prepTime || 0) +
                            parseInt(data.cookTime || 0)}{" "}
                          mins
                        </span>
                      </div>
                    )}
                    {data.servings && (
                      <div className="flex items-center gap-1 text-purple-400">
                        <Users className="w-4 h-4" />
                        <span>{data.servings} servings</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <>
      {/* <Link href={data.href}>
        <Card className="rounded-none border-stone-200 hover:shadow-lg transition-all cursor-pointer overflow-hidden py-0">
          {data.showImage && (
            <div className="relative aspect-video">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-lg">{data.title}</CardTitle>
            {data.description && (
              <CardDescription className="line-clamp-2">
                {data.description}
              </CardDescription>
            )}
          </CardHeader>
        </Card>
      </Link> */}
    </>
  );
};

export default RecipeCard;
