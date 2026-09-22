// frontend/data/dishes/french.js
export const FRENCH_DISHES = [
  {
    id: "fra_1",
    documentId: "fra_1",
    title: "Classic Ratatouille Provencale",
    description:
      "Traditional South of France vegetable medley of thinly sliced zucchini, eggplant, bell peppers, and Roma tomatoes arranged over a rich herb-infused piperade puree.",
    cuisine: "french",
    country: "French",
    category: "dinner",
    foodType: "vegan",
    prepTime: 30,
    cookTime: 45,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=800",
    ingredients: [
      { item: "Eggplant", amount: "1 medium", category: "Vegetable" },
      { item: "Zucchini & yellow squash", amount: "2 each", category: "Vegetable" },
      { item: "Roma tomatoes", amount: "4", category: "Vegetable" },
      { item: "Roasted red pepper puree (piperade)", amount: "1.5 cups", category: "Vegetable" },
      { item: "Fresh thyme, rosemary, garlic", amount: "2 tbsp", category: "Spice" },
      { item: "Extra virgin olive oil", amount: "3 tbsp", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Spread Base",
        instruction: "Spread seasoned bell pepper puree evenly on the bottom of a wide baking dish.",
      },
      {
        step: 2,
        title: "Layer Slices",
        instruction: "Arrange alternating slices of zucchini, eggplant, and tomato in spiral patterns.",
      },
      {
        step: 3,
        title: "Slow Bake",
        instruction: "Drizzle with olive oil, sprinkle fresh thyme and sea salt, cover with parchment, and bake at 350°F (175°C) for 40 minutes.",
      },
    ],
    nutrition: { calories: 190, protein: 4, carbs: 24, fat: 10 },
    tips: ["Slice vegetables to identical thickness using a mandoline slicer."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "fra_2",
    documentId: "fra_2",
    title: "Classic Parisian Croque Monsieur",
    description:
      "Crispy toasted sourdough sandwich layered with French ham, creamy Dijon-infused bechamel, and bubbled nutty Gruyere cheese.",
    cuisine: "french",
    country: "French",
    category: "breakfast",
    foodType: "non-veg",
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
    ingredients: [
      { item: "Sourdough or brioche bread", amount: "4 thick slices", category: "Grain" },
      { item: "French ham slices", amount: "4 slices", category: "Protein" },
      { item: "Gruyere cheese shredded", amount: "1.5 cups", category: "Dairy" },
      { item: "Bechamel sauce", amount: "1 cup", category: "Dairy" },
      { item: "Dijon mustard & nutmeg", amount: "1 tsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Build Sandwich",
        instruction: "Spread Dijon and bechamel on bread; layer ham and shredded Gruyere.",
      },
      {
        step: 2,
        title: "Top with Bechamel",
        instruction: "Close sandwich, spoon generous bechamel over the top slice, and shower with remaining Gruyere.",
      },
      {
        step: 3,
        title: "Broil Until Bubbly",
        instruction: "Broil on high for 4-5 minutes until the cheese is browned, bubbly, and melted.",
      },
    ],
    nutrition: { calories: 480, protein: 26, carbs: 34, fat: 28 },
    tips: ["Top with a fried sunny-side-up egg to instantly turn it into a Croque Madame."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "fra_3",
    documentId: "fra_3",
    title: "Bourguignon Slow Braised Beef",
    description:
      "Succulent beef chuck braised low and slow in a full-bodied red Burgundy wine broth with pearl onions, cremini mushrooms, bacon lardons, and fresh herbs.",
    cuisine: "french",
    country: "French",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 25,
    cookTime: 90,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
    ingredients: [
      { item: "Beef chuck roast cubed", amount: "800g", category: "Protein" },
      { item: "Thick cut bacon diced", amount: "150g", category: "Protein" },
      { item: "French red wine (Pinot Noir)", amount: "2 cups", category: "Other" },
      { item: "Pearl onions & baby carrots", amount: "1 cup each", category: "Vegetable" },
      { item: "Cremini mushrooms halved", amount: "200g", category: "Vegetable" },
      { item: "Beef stock & tomato paste", amount: "2 cups", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Brown Meat",
        instruction: "Crisp bacon lardons; sear seasoned beef cubes in bacon fat until deeply browned on all sides.",
      },
      {
        step: 2,
        title: "Deglaze with Wine",
        instruction: "Pour in red wine, scraping up browned bits. Add beef stock, tomato paste, garlic, and herb bouquet.",
      },
      {
        step: 3,
        title: "Slow Braise",
        instruction: "Simmer on low for 1.5 hours. Fold in sauteed pearl onions and browned mushrooms during final 20 minutes.",
      },
    ],
    nutrition: { calories: 540, protein: 44, carbs: 14, fat: 28 },
    tips: ["A dry red wine like Pinot Noir or Cabernet Sauvignon produces the most authentic richness."],
    substitutions: [],
    isPublic: true,
  },
];
