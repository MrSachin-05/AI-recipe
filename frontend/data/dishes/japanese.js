// frontend/data/dishes/japanese.js
export const JAPANESE_DISHES = [
  {
    id: "jpn_1",
    documentId: "jpn_1",
    title: "Rich Tonkotsu / Shoyu Ramen",
    description:
      "Springy ramen noodles swimming in a deeply flavorful umami-rich broth, crowned with tender chashu pork belly, ajitsuke tamago egg, nori, and scallions.",
    cuisine: "japanese",
    country: "Japanese",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 30,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    ingredients: [
      { item: "Fresh ramen noodles", amount: "2 portions", category: "Grain" },
      { item: "Rich dashi & chicken/pork broth", amount: "4 cups", category: "Other" },
      { item: "Chashu pork belly slices", amount: "4 slices", category: "Protein" },
      { item: "Marinated soft-boiled eggs (Ajitsuke Tamago)", amount: "2", category: "Protein" },
      { item: "Soy sauce & Mirin tare", amount: "3 tbsp", category: "Spice" },
      { item: "Nori sheets & bamboo shoots", amount: "2 sheets", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Simmer Broth & Tare",
        instruction: "Combine tare seasoning with boiling rich broth in deep serving bowls.",
      },
      {
        step: 2,
        title: "Boil Noodles",
        instruction: "Boil fresh ramen noodles for 90 seconds until firm. Shake off water thoroughly.",
      },
      {
        step: 3,
        title: "Assemble Bowl",
        instruction: "Fold noodles into hot broth, drape chashu slices, halved egg, bamboo shoots, and nori sheet.",
      },
    ],
    nutrition: { calories: 580, protein: 32, carbs: 64, fat: 22 },
    tips: ["Preheat your ramen bowls with hot water so the soup stays steaming hot."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "jpn_2",
    documentId: "jpn_2",
    title: "Fluffy Japanese Souffle Pancakes",
    description:
      "Cloud-like, jiggly Japanese pancakes made with whipped meringue, served with whipped butter, fresh berries, and pure maple syrup.",
    cuisine: "japanese",
    country: "Japanese",
    category: "breakfast",
    foodType: "vegetarian",
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    ingredients: [
      { item: "Egg whites & yolks separated", amount: "3 eggs", category: "Protein" },
      { item: "Milk", amount: "2 tbsp", category: "Dairy" },
      { item: "All-purpose flour", amount: "1/4 cup", category: "Grain" },
      { item: "Sugar", amount: "2.5 tbsp", category: "Other" },
      { item: "Butter & maple syrup", amount: "2 tbsp", category: "Dairy" },
    ],
    instructions: [
      {
        step: 1,
        title: "Whip Meringue",
        instruction: "Whisk egg whites with sugar to stiff, glossy peaks.",
      },
      {
        step: 2,
        title: "Fold Gently",
        instruction: "Mix yolks, milk, and flour. Carefully fold meringue into yolk batter in 3 additions.",
      },
      {
        step: 3,
        title: "Steam on Pan",
        instruction: "Mound tall scoops on a low-heat pan, add a drop of water, cover with lid, and steam 4-5 mins each side.",
      },
    ],
    nutrition: { calories: 290, protein: 11, carbs: 36, fat: 12 },
    tips: ["Cooking on the lowest heat setting with a covered lid creates the signature cloud lift."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "jpn_3",
    documentId: "jpn_3",
    title: "Crispy Chicken Katsu Curry",
    description:
      "Golden panko-crusted chicken cutlet sliced over steaming Japanese short-grain rice, blanketed in a rich, mildly sweet and savory curry sauce.",
    cuisine: "japanese",
    country: "Japanese",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 25,
    servings: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800",
    ingredients: [
      { item: "Chicken cutlets", amount: "3 boneless", category: "Protein" },
      { item: "Panko breadcrumbs", amount: "1.5 cups", category: "Grain" },
      { item: "Japanese curry roux block", amount: "100g", category: "Spice" },
      { item: "Carrots and potatoes", amount: "1 cup diced", category: "Vegetable" },
      { item: "Cooked sushi rice", amount: "3 cups", category: "Grain" },
    ],
    instructions: [
      {
        step: 1,
        title: "Simmer Curry",
        instruction: "Saute onions, carrots, and potatoes with water, dissolve curry roux block, simmer until thick and glossy.",
      },
      {
        step: 2,
        title: "Bread & Fry Cutlets",
        instruction: "Dredge chicken in flour, egg, and panko. Deep fry at 340°F (170°C) until deep golden brown and crunchy.",
      },
      {
        step: 3,
        title: "Slice & Plate",
        instruction: "Slice katsu into thick strips, arrange over hot rice, ladle hot curry sauce adjacent to retain katsu crunchiness.",
      },
    ],
    nutrition: { calories: 650, protein: 36, carbs: 74, fat: 22 },
    tips: ["Never pour sauce completely over the katsu so the panko crust stays shatteringly crisp."],
    substitutions: [],
    isPublic: true,
  },
];
