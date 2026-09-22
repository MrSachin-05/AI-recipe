// frontend/lib/dishes.js
// Re-export modular dishes dataset and helpers

export {
  ALL_DISHES,
  DISHES_BY_COUNTRY,
  DISHES_BY_CATEGORY,
  DISHES_BY_FOOD_TYPE,
  getDishesByCountry,
  getDishesByCategory,
  getDishesByFoodType,
  searchDishes,
  getDishById,
  getFeaturedDishes,
} from "@/data/dishes";
