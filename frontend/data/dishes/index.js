// frontend/data/dishes/index.js
import { INDIAN_DISHES } from "./indian";
import { ITALIAN_DISHES } from "./italian";
import { MEXICAN_DISHES } from "./mexican";
import { CHINESE_DISHES } from "./chinese";
import { JAPANESE_DISHES } from "./japanese";
import { AMERICAN_DISHES } from "./american";
import { MEDITERRANEAN_DISHES } from "./mediterranean";
import { FRENCH_DISHES } from "./french";
import { THAI_DISHES } from "./thai";
import { SPANISH_DISHES } from "./spanish";
import { BRITISH_DISHES } from "./british";
import { MIDDLE_EASTERN_DISHES } from "./middleEastern";
import { KOREAN_DISHES } from "./korean";
import { VIETNAMESE_DISHES } from "./vietnamese";
import { TURKISH_DISHES } from "./turkish";
import { MOROCCAN_DISHES } from "./moroccan";
import { GERMAN_DISHES } from "./german";
import { CANADIAN_DISHES } from "./canadian";
import { JAMAICAN_DISHES } from "./jamaican";
import { FILIPINO_DISHES } from "./filipino";
import { IRISH_DISHES } from "./irish";
import { PORTUGUESE_DISHES } from "./portuguese";
import { BRAZILIAN_DISHES } from "./brazilian";
import { AUSTRALIAN_DISHES } from "./australian";

// All dishes merged into single unified catalog
export const ALL_DISHES = [
  ...INDIAN_DISHES,
  ...ITALIAN_DISHES,
  ...MEXICAN_DISHES,
  ...CHINESE_DISHES,
  ...JAPANESE_DISHES,
  ...AMERICAN_DISHES,
  ...MEDITERRANEAN_DISHES,
  ...FRENCH_DISHES,
  ...THAI_DISHES,
  ...SPANISH_DISHES,
  ...BRITISH_DISHES,
  ...MIDDLE_EASTERN_DISHES,
  ...KOREAN_DISHES,
  ...VIETNAMESE_DISHES,
  ...TURKISH_DISHES,
  ...MOROCCAN_DISHES,
  ...GERMAN_DISHES,
  ...CANADIAN_DISHES,
  ...JAMAICAN_DISHES,
  ...FILIPINO_DISHES,
  ...IRISH_DISHES,
  ...PORTUGUESE_DISHES,
  ...BRAZILIAN_DISHES,
  ...AUSTRALIAN_DISHES,
];

// Grouped by Country / Cuisine
export const DISHES_BY_COUNTRY = {
  indian: INDIAN_DISHES,
  italian: ITALIAN_DISHES,
  mexican: MEXICAN_DISHES,
  chinese: CHINESE_DISHES,
  japanese: JAPANESE_DISHES,
  american: AMERICAN_DISHES,
  mediterranean: MEDITERRANEAN_DISHES,
  greek: MEDITERRANEAN_DISHES,
  french: FRENCH_DISHES,
  thai: THAI_DISHES,
  spanish: SPANISH_DISHES,
  british: BRITISH_DISHES,
  "middle - eastern": MIDDLE_EASTERN_DISHES,
  "middle-eastern": MIDDLE_EASTERN_DISHES,
  middleeastern: MIDDLE_EASTERN_DISHES,
  korean: KOREAN_DISHES,
  vietnamese: VIETNAMESE_DISHES,
  turkish: TURKISH_DISHES,
  moroccan: MOROCCAN_DISHES,
  german: GERMAN_DISHES,
  canadian: CANADIAN_DISHES,
  jamaican: JAMAICAN_DISHES,
  filipino: FILIPINO_DISHES,
  irish: IRISH_DISHES,
  portuguese: PORTUGUESE_DISHES,
  brazilian: BRAZILIAN_DISHES,
  australian: AUSTRALIAN_DISHES,
};

// Grouped by Meal Category (breakfast, lunch, dinner, snack, dessert)
export const DISHES_BY_CATEGORY = ALL_DISHES.reduce((acc, dish) => {
  const cat = (dish.category || "dinner").toLowerCase();
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(dish);
  return acc;
}, {});

// Grouped by Food Type (vegetarian, non-veg, vegan, seafood, pasta, etc.)
export const DISHES_BY_FOOD_TYPE = ALL_DISHES.reduce((acc, dish) => {
  const type = (dish.foodType || "general").toLowerCase();
  if (!acc[type]) acc[type] = [];
  acc[type].push(dish);
  return acc;
}, {});

// Helper: Get dishes by country / cuisine
export function getDishesByCountry(country) {
  if (!country || country === "all") return ALL_DISHES;
  const target = country.toLowerCase().trim().replace(/\s+/g, "-");
  const directMatch = DISHES_BY_COUNTRY[target] || DISHES_BY_COUNTRY[country.toLowerCase().trim()];
  if (directMatch) return directMatch;

  return ALL_DISHES.filter(
    (d) =>
      d.country?.toLowerCase() === target ||
      d.cuisine?.toLowerCase() === target ||
      d.cuisine?.toLowerCase().replace(/\s+/g, "-") === target
  );
}

// Helper: Get dishes by category (breakfast, lunch, dinner, snack, dessert)
export function getDishesByCategory(category) {
  if (!category || category === "all") return ALL_DISHES;
  const target = category.toLowerCase().trim();
  return ALL_DISHES.filter(
    (d) =>
      d.category?.toLowerCase() === target ||
      d.foodType?.toLowerCase() === target
  );
}

// Helper: Get dishes by food type
export function getDishesByFoodType(foodType) {
  if (!foodType || foodType === "all") return ALL_DISHES;
  const target = foodType.toLowerCase().trim();
  return ALL_DISHES.filter((d) => d.foodType?.toLowerCase() === target);
}

// Helper: Search dishes by title, cuisine, description, or ingredients
export function searchDishes(query) {
  if (!query) return ALL_DISHES;
  const q = query.toLowerCase().trim();
  return ALL_DISHES.filter(
    (d) =>
      d.title.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.cuisine.toLowerCase().includes(q) ||
      d.ingredients.some((ing) => ing.item?.toLowerCase().includes(q))
  );
}

// Helper: Get single dish by ID or DocumentID
export function getDishById(id) {
  return ALL_DISHES.find((d) => d.id === id || d.documentId === id);
}

// Helper: Featured dishes for home and hero sections
export function getFeaturedDishes() {
  return ALL_DISHES.slice(0, 6);
}
