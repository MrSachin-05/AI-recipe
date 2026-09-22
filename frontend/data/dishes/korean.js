// frontend/data/dishes/korean.js
export const KOREAN_DISHES = [
  {
    id: "kor_1",
    documentId: "kor_1",
    title: "Dolsot Bibimbap with Crispy Rice",
    description:
      "Steaming hot stone pot rice bowl topped with seasoned sauteed vegetables (namul), tender marinated beef bulgogi, a golden egg yolk, and sweet-spicy gochujang sauce.",
    cuisine: "korean",
    country: "Korean",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800",
    ingredients: [
      { item: "Short grain white rice", amount: "2 cups cooked", category: "Grain" },
      { item: "Beef bulgogi thinly sliced", amount: "200g", category: "Protein" },
      { item: "Spinach, bean sprouts, carrots", amount: "1/2 cup each seasoned", category: "Vegetable" },
      { item: "Egg yolks", amount: "2 fresh", category: "Dairy" },
      { item: "Korean Gochujang chili paste", amount: "2 tbsp", category: "Spice" },
      { item: "Toasted sesame oil", amount: "1.5 tbsp", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Season Vegetables",
        instruction: "Blanch spinach and bean sprouts, toss separately with sesame oil, minced garlic, and salt.",
      },
      {
        step: 2,
        title: "Crisp Rice",
        instruction: "Coat stone pot or cast iron with sesame oil, press cooked rice into base, cook over medium flame until a golden crackling crust forms.",
      },
      {
        step: 3,
        title: "Arrange & Serve",
        instruction: "Arrange vegetables and seared beef in colorful radial sections over rice. Place egg yolk in center with a dollop of gochujang. Mix vigorously before eating.",
      },
    ],
    nutrition: { calories: 520, protein: 26, carbs: 68, fat: 16 },
    tips: ["Listen for the gentle sizzling sound to know when the crunchy bottom crust (nurungji) has formed."],
    substitutions: [{ original: "Beef", alternatives: ["Tofu", "Shiitake mushrooms"] }],
    isPublic: true,
  },
  {
    id: "kor_2",
    documentId: "kor_2",
    title: "Kimchi Jjigae (Spicy Kimchi Stew)",
    description:
      "Deeply savory, bubbling stew made with aged fermented kimchi, pork belly slices, soft silken tofu, and spicy gochugaru broth.",
    cuisine: "korean",
    country: "Korean",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 10,
    cookTime: 25,
    servings: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1583032015879-bf65c197ef42?w=800",
    ingredients: [
      { item: "Well-fermented sour kimchi", amount: "2 cups with juice", category: "Vegetable" },
      { item: "Pork belly sliced", amount: "200g", category: "Protein" },
      { item: "Soft silken tofu", amount: "1 block sliced", category: "Protein" },
      { item: "Korean chili flakes (gochugaru)", amount: "1 tbsp", category: "Spice" },
      { item: "Anchovy or kelp broth", amount: "3 cups", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Sear Pork & Kimchi",
        instruction: "Saute sliced pork belly and sour kimchi in sesame oil until pork rendered and kimchi softened.",
      },
      {
        step: 2,
        title: "Simmer Broth",
        instruction: "Pour in anchovy broth and kimchi brine, stir in gochugaru and garlic. Simmer on medium-low for 15 minutes.",
      },
      {
        step: 3,
        title: "Add Tofu & Scallions",
        instruction: "Gently slide sliced tofu into the bubbling stew and simmer 5 more minutes. Garnish with scallions and serve boiling hot.",
      },
    ],
    nutrition: { calories: 340, protein: 22, carbs: 14, fat: 22 },
    tips: ["Older, more sour kimchi makes the most deeply flavorful stew broth."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "kor_3",
    documentId: "kor_3",
    title: "Crispy Korean Fried Chicken (Yangnyeom)",
    description:
      "Double-fried shatteringly crisp chicken wings coated in a sticky, sweet, spicy, and garlicky gochujang glaze topped with toasted sesame seeds.",
    cuisine: "korean",
    country: "Korean",
    category: "snack",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=800",
    ingredients: [
      { item: "Chicken wings & drumettes", amount: "800g", category: "Protein" },
      { item: "Potato starch", amount: "1 cup", category: "Grain" },
      { item: "Gochujang & honey", amount: "3 tbsp each", category: "Spice" },
      { item: "Garlic minced & soy sauce", amount: "2 tbsp each", category: "Spice" },
      { item: "Toasted sesame seeds", amount: "1 tbsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Coat in Potato Starch",
        instruction: "Season chicken wings with salt, pepper, and ginger; toss thoroughly in potato starch until evenly coated.",
      },
      {
        step: 2,
        title: "Double Fry",
        instruction: "Fry at 340°F (170°C) for 8 mins; remove and rest 5 mins. Fry second time at 375°F (190°C) for 3 mins until ultra-crisp.",
      },
      {
        step: 3,
        title: "Glaze & Toss",
        instruction: "Simmer gochujang, honey, garlic, and soy sauce until bubbly. Toss hot wings in sauce and sprinkle sesame seeds.",
      },
    ],
    nutrition: { calories: 480, protein: 32, carbs: 28, fat: 26 },
    tips: ["Double frying evaporates all interior moisture, keeping the crust crisp even after glazing."],
    substitutions: [],
    isPublic: true,
  },
];
