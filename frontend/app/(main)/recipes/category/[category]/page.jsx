"use client";

import { getMealsByCategory } from "@/actions/mealdb.actions";
import RecipeGrid from "@/components/RecipeGrid";
import { useParams } from "next/navigation";

export default function CategoryDetailPage() {
  const params = useParams();
  const rawCategory = params?.category || "";
  const formattedCategory = rawCategory
    ? rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1)
    : "";

  return (
    <RecipeGrid
      type="category"
      value={formattedCategory}
      fetchAction={getMealsByCategory}
      backLink="/dashboard"
    />
  );
}
