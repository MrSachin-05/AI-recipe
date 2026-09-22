// frontend/data/dishes/filipino.js
export const FILIPINO_DISHES = [
  {
    id: "phl_1",
    documentId: "phl_1",
    title: "Classic Chicken Adobo",
    description:
      "Tender bone-in chicken thighs braised in a savory, tangy sauce of cane vinegar, soy sauce, whole garlic cloves, black peppercorns, and bay leaves.",
    cuisine: "filipino",
    country: "Filipino",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    ingredients: [
      { item: "Chicken thighs bone-in", amount: "800g", category: "Protein" },
      { item: "Filipino cane vinegar (or rice vinegar)", amount: "1/2 cup", category: "Other" },
      { item: "Soy sauce", amount: "1/2 cup", category: "Other" },
      { item: "Garlic cloves smashed", amount: "8 cloves", category: "Vegetable" },
      { item: "Whole black peppercorns & bay leaves", amount: "1 tbsp pepper + 4 leaves", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate",
        instruction: "Combine chicken with vinegar, soy sauce, garlic, peppercorns, and bay leaves for 30 minutes.",
      },
      {
        step: 2,
        title: "Simmer Low",
        instruction: "Transfer everything to a heavy pot, bring to a simmer, cover and cook 25 minutes until chicken is tender.",
      },
      {
        step: 3,
        title: "Reduce & Glaze",
        instruction: "Remove lid, crank heat to reduce sauce into a rich savory glaze. Sear chicken lightly in the sauce and serve over hot rice.",
      },
    ],
    nutrition: { calories: 430, protein: 38, carbs: 6, fat: 26 },
    tips: ["Do not stir vinegar while it first comes to a boil to allow its harsh acidity to mellow."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "phl_2",
    documentId: "phl_2",
    title: "Sinigang na Baboy (Tamarind Pork Soup)",
    description:
      "Comforting sour and savory broth packed with tender pork ribs, water spinach (kangkong), radish, long green beans, and sour sampaloc tamarind.",
    cuisine: "filipino",
    country: "Filipino",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 45,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800",
    ingredients: [
      { item: "Pork spare ribs cut into pieces", amount: "700g", category: "Protein" },
      { item: "Tamarind soup base (sampaloc)", amount: "1 packet or 3 tbsp fresh", category: "Other" },
      { item: "Daikon radish & string beans", amount: "1 cup sliced", category: "Vegetable" },
      { item: "Water spinach (kangkong) or bok choy", amount: "2 cups", category: "Vegetable" },
      { item: "Roma tomatoes & onion", amount: "2 each quartered", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Tenderize Pork",
        instruction: "Boil pork ribs with onions and tomatoes for 35 minutes until fork tender, skimming any foam.",
      },
      {
        step: 2,
        title: "Sour Broth",
        instruction: "Stir in tamarind soup base and fish sauce (patis). Adjust sourness to taste.",
      },
      {
        step: 3,
        title: "Add Vegetables",
        instruction: "Add radish and green beans; cook 5 minutes. Fold in tender kangkong leaves, turn off heat, and serve with white rice.",
      },
    ],
    nutrition: { calories: 380, protein: 32, carbs: 12, fat: 22 },
    tips: ["Adding tomatoes early gives the sour broth natural sweetness and body."],
    substitutions: [],
    isPublic: true,
  },
];
