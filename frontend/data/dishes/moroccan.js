// frontend/data/dishes/moroccan.js
export const MOROCCAN_DISHES = [
  {
    id: "mor_1",
    documentId: "mor_1",
    title: "Chicken Tagine with Preserved Lemons & Green Olives",
    description:
      "Succulent bone-in chicken braised slowly in an authentic earthenware tagine with ginger, turmeric, saffron threads, cured preserved lemons, and cracked green olives.",
    cuisine: "moroccan",
    country: "Moroccan",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 45,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    ingredients: [
      { item: "Chicken thighs & drumsticks", amount: "800g", category: "Protein" },
      { item: "Preserved lemon rind slivered", amount: "1 lemon", category: "Vegetable" },
      { item: "Moroccan green olives pitted", amount: "1 cup", category: "Vegetable" },
      { item: "Ginger, turmeric, saffron & cinnamon", amount: "1.5 tbsp spice blend", category: "Spice" },
      { item: "Cilantro & parsley finely chopped", amount: "1/2 cup", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate Chicken (Chermoula)",
        instruction: "Coat chicken in grated onion, garlic, spices, olive oil, and fresh herbs.",
      },
      {
        step: 2,
        title: "Slow Tagine Braise",
        instruction: "Brown chicken in the tagine base. Add 1/2 cup water, cover with conical lid, and simmer on gentle heat for 35 minutes.",
      },
      {
        step: 3,
        title: "Add Olives & Preserved Lemon",
        instruction: "Scatter preserved lemon peel and olives into the sauce, simmer 10 minutes until sauce is reduced to a rich golden glaze.",
      },
    ],
    nutrition: { calories: 480, protein: 40, carbs: 12, fat: 28 },
    tips: ["Rinse preserved lemon rinds in cold water to tame excess saltiness before adding."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "mor_2",
    documentId: "mor_2",
    title: "Moroccan Steamed Seven-Vegetable Couscous",
    description:
      "Fluffy, triple-steamed semolina couscous crowned with tender caramelized carrots, zucchini, pumpkin, chickpeas, and turnips in a fragrant saffron-ginger broth.",
    cuisine: "moroccan",
    country: "Moroccan",
    category: "lunch",
    foodType: "vegetarian",
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    ingredients: [
      { item: "Medium grain semolina couscous", amount: "3 cups", category: "Grain" },
      { item: "Chickpeas cooked", amount: "1 cup", category: "Protein" },
      { item: "Pumpkin, carrots & zucchini", amount: "3 cups large chunks", category: "Vegetable" },
      { item: "Turnips & cabbage wedges", amount: "1.5 cups", category: "Vegetable" },
      { item: "Saffron, smen (aged butter) & ginger", amount: "1 tbsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Simmer Broth & Root Veggies",
        instruction: "Simmer onions, tomatoes, chickpeas, carrots, and turnips in spiced broth.",
      },
      {
        step: 2,
        title: "Steam Couscous",
        instruction: "Steam couscous over the bubbling broth in a couscoussier, rolling grains with water and smen butter twice.",
      },
      {
        step: 3,
        title: "Plate Platter",
        instruction: "Mound fluffy couscous in a wide bowl, arrange vegetables and chickpeas in pyramid fashion, ladle warm aromatic broth.",
      },
    ],
    nutrition: { calories: 380, protein: 12, carbs: 70, fat: 6 },
    tips: ["Rubbing the couscous grains between your palms with olive oil creates extraordinary fluffiness."],
    substitutions: [],
    isPublic: true,
  },
];
