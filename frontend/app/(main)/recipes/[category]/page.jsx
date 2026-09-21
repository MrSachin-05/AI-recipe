"use client";

import { getMealsByCategory } from "@/actions/mealdb.actions";
import RecipeGrid from "@/components/RecipeGrid";
import { useParams } from "next/navigation";

export default function CategoryRecipesPage() {
  const params = useParams();
  const category = params.category;
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
