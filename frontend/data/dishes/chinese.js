// frontend/data/dishes/chinese.js
export const CHINESE_DISHES = [
  {
    id: "chn_1",
    documentId: "chn_1",
    title: "Szechuan Kung Pao Chicken",
    description:
      "Wok-tossed chicken breast chunks with crunchy roasted peanuts, green onions, and whole dried red chilies in a bold, savory, sweet-and-tangy glaze.",
    cuisine: "chinese",
    country: "Chinese",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 12,
    servings: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800",
    ingredients: [
      { item: "Chicken breast diced", amount: "500g", category: "Protein" },
      { item: "Roasted unsalted peanuts", amount: "1/2 cup", category: "Grain" },
      { item: "Dried red chilies", amount: "8-10", category: "Spice" },
      { item: "Soy sauce & Shaoxing wine", amount: "2 tbsp each", category: "Other" },
      { item: "Chinkiang black vinegar", amount: "1.5 tbsp", category: "Other" },
      { item: "Cornstarch & garlic-ginger", amount: "1 tbsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate & Prep Sauce",
        instruction: "Toss diced chicken with soy sauce and cornstarch. Whisk sauce ingredients together.",
      },
      {
        step: 2,
        title: "Wok Fry",
        instruction: "Sear chicken in a smoking hot wok with oil. Push aside, fry chilies and garlic until aromatic.",
      },
      {
        step: 3,
        title: "Toss with Sauce & Peanuts",
        instruction: "Pour sauce into wok; stir-fry vigorously until glossy and thickened. Toss in roasted peanuts and scallions.",
      },
    ],
    nutrition: { calories: 440, protein: 38, carbs: 16, fat: 26 },
    tips: ["Have all sauce components pre-measured; high-heat wok cooking takes under 5 minutes."],
    substitutions: [
      { original: "Chicken", alternatives: ["Tofu cubes", "Prawns"] },
    ],
    isPublic: true,
  },
  {
    id: "chn_2",
    documentId: "chn_2",
    title: "Steamed Pork & Chive Dumplings (Jiaozi)",
    description:
      "Delicate handmade wrapper parcels filled with minced seasoned pork, fresh garlic chives, ginger, and sesame oil, served with chili garlic soy dip.",
    cuisine: "chinese",
    country: "Chinese",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 30,
    cookTime: 10,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=800",
    ingredients: [
      { item: "Dumpling wrappers", amount: "24 wrappers", category: "Grain" },
      { item: "Ground pork", amount: "350g", category: "Protein" },
      { item: "Chinese garlic chives", amount: "1 cup finely chopped", category: "Vegetable" },
      { item: "Soy sauce & sesame oil", amount: "1.5 tbsp each", category: "Other" },
      { item: "Ginger finely grated", amount: "1 tbsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Mix Filling",
        instruction: "Vigorously stir ground pork with chives, soy sauce, sesame oil, and ginger in one direction until sticky.",
      },
      {
        step: 2,
        title: "Pleat Dumplings",
        instruction: "Place 1 tbsp filling in center of wrapper, moisten edge with water, and crimp into crescent pleats.",
      },
      {
        step: 3,
        title: "Steam",
        instruction: "Steam on parchment-lined bamboo steamer over boiling water for 8-10 minutes.",
      },
    ],
    nutrition: { calories: 360, protein: 22, carbs: 32, fat: 16 },
    tips: ["Always stir dumpling meat filling in a single clockwise direction to build protein springiness."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "chn_3",
    documentId: "chn_3",
    title: "Yangzhou Golden Egg Fried Rice",
    description:
      "Wok-tumbled fragrant jasmine rice coated in golden egg yolk, succulent barbecue pork (char siu), sweet baby peas, and sliced scallions.",
    cuisine: "chinese",
    country: "Chinese",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 10,
    cookTime: 10,
    servings: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: [
      { item: "Day-old cold jasmine rice", amount: "4 cups", category: "Grain" },
      { item: "Eggs", amount: "3 beaten", category: "Protein" },
      { item: "Diced Char Siu or chicken", amount: "150g", category: "Protein" },
      { item: "Green peas & carrots", amount: "1/2 cup diced", category: "Vegetable" },
      { item: "Light soy sauce & white pepper", amount: "1 tbsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Pre-mix Rice",
        instruction: "Mix 1 beaten egg into cold dry rice grains to ensure even golden coating.",
      },
      {
        step: 2,
        title: "Scramble Eggs & Proteins",
        instruction: "Scramble remaining eggs in hot wok, add char siu and veggies, stir-fry 2 minutes.",
      },
      {
        step: 3,
        title: "High Heat Wok Toss",
        instruction: "Tumble in rice on high flame, breaking up clumps. Season with soy sauce and white pepper until fragrant with wok-hei.",
      },
    ],
    nutrition: { calories: 420, protein: 18, carbs: 58, fat: 12 },
    tips: ["Use chilled overnight rice; freshly steamed rice has too much moisture for proper frying."],
    substitutions: [],
    isPublic: true,
  },
];
