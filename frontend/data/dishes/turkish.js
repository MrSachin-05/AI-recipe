// frontend/data/dishes/turkish.js
export const TURKISH_DISHES = [
  {
    id: "tur_1",
    documentId: "tur_1",
    title: "Turkish Doner Kebab Wrap (Durum)",
    description:
      "Thinly shaved spiced roasted lamb and beef rolled inside warm lavash flatbread with sumac red onions, ripe tomatoes, and garlic yogurt sauce.",
    cuisine: "turkish",
    country: "Turkish",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800",
    ingredients: [
      { item: "Thinly shaved seasoned lamb & beef", amount: "350g", category: "Protein" },
      { item: "Lavash or yufka flatbread", amount: "2 sheets", category: "Grain" },
      { item: "Sumac & sliced red onions", amount: "1/2 cup", category: "Vegetable" },
      { item: "Garlic yogurt sauce (cacik)", amount: "1/3 cup", category: "Dairy" },
      { item: "Turkish pickled peppers", amount: "4 small", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Sear Doner Meat",
        instruction: "Sear shaved meat in a hot skillet with a touch of butter until edges are crispy and browned.",
      },
      {
        step: 2,
        title: "Toss Onion Salad",
        instruction: "Rub sliced red onions with tart sumac powder and chopped flat-leaf parsley.",
      },
      {
        step: 3,
        title: "Wrap & Toast",
        instruction: "Layer meat, sumac onions, and yogurt onto lavash. Roll into a tight cylinder and lightly press on the hot pan.",
      },
    ],
    nutrition: { calories: 510, protein: 34, carbs: 46, fat: 21 },
    tips: ["Pressing the finished wrap on the meat pan crisps the exterior bread and infuses meat juices."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "tur_2",
    documentId: "tur_2",
    title: "Turkish Menemen (Spiced Tomato & Pepper Eggs)",
    description:
      "Silky soft-scrambled eggs gently folded into a luscious sauce of sweet sivri green peppers, ripe tomatoes, butter, and crushed Aleppo pepper.",
    cuisine: "turkish",
    country: "Turkish",
    category: "breakfast",
    foodType: "vegetarian",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
    ingredients: [
      { item: "Eggs", amount: "4 large beaten", category: "Protein" },
      { item: "Ripe grated tomatoes", amount: "3 medium", category: "Vegetable" },
      { item: "Turkish green peppers (sivri biber)", amount: "3 chopped", category: "Vegetable" },
      { item: "Butter & olive oil", amount: "2 tbsp each", category: "Dairy" },
      { item: "Aleppo pepper flakes (pul biber)", amount: "1 tsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Saute Peppers",
        instruction: "Saute chopped green peppers in butter and olive oil until soft and sweet.",
      },
      {
        step: 2,
        title: "Simmer Tomatoes",
        instruction: "Add grated tomatoes and pul biber; simmer gently until liquid reduces into a thick sauce.",
      },
      {
        step: 3,
        title: "Fold Eggs Gently",
        instruction: "Pour in beaten eggs, gently swirling with a wooden spoon so curds form softly while remaining creamy and custardy.",
      },
    ],
    nutrition: { calories: 310, protein: 16, carbs: 14, fat: 22 },
    tips: ["Never overcook Menemen; take off heat while still slightly glossy and wet."],
    substitutions: [],
    isPublic: true,
  },
];
