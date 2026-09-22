// frontend/data/dishes/middleEastern.js
export const MIDDLE_EASTERN_DISHES = [
  {
    id: "me_1",
    documentId: "me_1",
    title: "North African & Levantine Shakshuka",
    description:
      "Gently poached eggs in a simmering, smoky tomato and roasted red bell pepper sauce seasoned with cumin, smoked paprika, and topped with crumbled feta and cilantro.",
    cuisine: "middle - eastern",
    country: "Middle Eastern",
    category: "breakfast",
    foodType: "vegetarian",
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800",
    ingredients: [
      { item: "Eggs", amount: "4 large", category: "Protein" },
      { item: "Crushed tomatoes & tomato paste", amount: "1 can (400g) + 1 tbsp", category: "Vegetable" },
      { item: "Red bell pepper & onion", amount: "1 each diced", category: "Vegetable" },
      { item: "Ground cumin & smoked paprika", amount: "1 tsp each", category: "Spice" },
      { item: "Feta cheese & fresh parsley", amount: "1/4 cup crumbled", category: "Dairy" },
    ],
    instructions: [
      {
        step: 1,
        title: "Saute Aromatics",
        instruction: "Saute onions and bell peppers in olive oil until tender; add garlic, cumin, paprika, and chili flakes.",
      },
      {
        step: 2,
        title: "Simmer Tomato Sauce",
        instruction: "Pour in crushed tomatoes, season with salt, and simmer for 10 minutes until sauce thickens.",
      },
      {
        step: 3,
        title: "Poach Eggs in Wells",
        instruction: "Create 4 small indentations with a spoon, crack eggs directly into wells, cover pan, and cook 5-7 mins until whites set and yolks remain runny. Sprinkle feta.",
      },
    ],
    nutrition: { calories: 310, protein: 17, carbs: 16, fat: 20 },
    tips: ["Serve straight out of the skillet with thick crusty bread for dipping in the runny yolks."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "me_2",
    documentId: "me_2",
    title: "Spiced Chicken Shawarma Platter",
    description:
      "Thinly sliced chicken thighs marinated in warm Middle Eastern spices, garlic, and lemon juice, grilled charred and served with garlic toum sauce and warm pita.",
    cuisine: "middle - eastern",
    country: "Middle Eastern",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 18,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800",
    ingredients: [
      { item: "Boneless chicken thighs", amount: "600g", category: "Protein" },
      { item: "Shawarma spice blend (cumin, coriander, cardamom, turmeric)", amount: "2 tbsp", category: "Spice" },
      { item: "Lemon juice & olive oil", amount: "3 tbsp each", category: "Other" },
      { item: "Garlic toum or tahini sauce", amount: "1/2 cup", category: "Other" },
      { item: "Pita flatbreads & pickled turnips", amount: "4 breads", category: "Grain" },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate Chicken",
        instruction: "Toss chicken thighs in spices, minced garlic, lemon juice, and olive oil for at least 1 hour.",
      },
      {
        step: 2,
        title: "Pan Sear or Roast",
        instruction: "Sear in a screaming hot cast iron skillet or bake at 425°F (220°C) until caramelized and slightly charred.",
      },
      {
        step: 3,
        title: "Slice & Wrap",
        instruction: "Thinly slice chicken across grain. Serve on warm flatbread with pickles, tomatoes, and garlic toum.",
      },
    ],
    nutrition: { calories: 460, protein: 39, carbs: 28, fat: 21 },
    tips: ["Chicken thighs stay much juicier and more flavorful than chicken breast when grilled at high heat."],
    substitutions: [],
    isPublic: true,
  },
];
