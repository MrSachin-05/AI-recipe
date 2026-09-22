// frontend/data/dishes/irish.js
export const IRISH_DISHES = [
  {
    id: "ire_1",
    documentId: "ire_1",
    title: "Traditional Irish Beef & Guinness Stew",
    description:
      "Tender chunks of beef chuck slow-braised in a dark, rich Guinness extra stout gravy with sweet parsnips, carrots, baby potatoes, and fresh thyme.",
    cuisine: "irish",
    country: "Irish",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 75,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
    ingredients: [
      { item: "Beef chuck roast cubed", amount: "800g", category: "Protein" },
      { item: "Guinness stout beer", amount: "1 bottle (330ml)", category: "Other" },
      { item: "Beef stock", amount: "2 cups", category: "Other" },
      { item: "Carrots, parsnips & potatoes", amount: "3 cups chunky diced", category: "Vegetable" },
      { item: "Fresh thyme & tomato paste", amount: "2 sprigs + 2 tbsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Sear Beef",
        instruction: "Brown seasoned beef cubes in butter and oil in a Dutch oven until deeply caramelized.",
      },
      {
        step: 2,
        title: "Deglaze with Guinness",
        instruction: "Pour in Guinness stout, scraping up fond. Add beef stock, tomato paste, garlic, and fresh thyme.",
      },
      {
        step: 3,
        title: "Slow Simmer with Roots",
        instruction: "Simmer covered for 50 minutes. Add root vegetables and potatoes, simmer 25 more minutes until sauce is glossy and thick.",
      },
    ],
    nutrition: { calories: 530, protein: 42, carbs: 36, fat: 22 },
    tips: ["A spoonful of brown sugar balances the natural bitterness of the roasted barley in Guinness stout."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "ire_2",
    documentId: "ire_2",
    title: "Creamy Irish Colcannon Potatoes",
    description:
      "Fluffy mashed Yukon gold potatoes folded with buttery sauteed green cabbage, scallions, rich heavy cream, and a melting lake of golden Irish butter.",
    cuisine: "irish",
    country: "Irish",
    category: "lunch",
    foodType: "vegetarian",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?w=800",
    ingredients: [
      { item: "Yukon gold potatoes boiled", amount: "1kg", category: "Vegetable" },
      { item: "Savoy cabbage or kale shredded", amount: "2 cups", category: "Vegetable" },
      { item: "Irish butter (Kerrygold)", amount: "6 tbsp", category: "Dairy" },
      { item: "Warm milk or cream", amount: "1/2 cup", category: "Dairy" },
      { item: "Finely sliced green onions", amount: "1/2 cup", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Boil & Mash Potatoes",
        instruction: "Boil peeled potatoes in salted water until knife tender; rice or mash until smooth with warm milk.",
      },
      {
        step: 2,
        title: "Saute Cabbage",
        instruction: "Saute shredded cabbage in 3 tbsp melted butter until tender and sweet, about 6 minutes.",
      },
      {
        step: 3,
        title: "Fold & Crown with Butter",
        instruction: "Fold buttery cabbage and scallions into warm mash. Make a well in the center and fill with remaining melted golden butter.",
      },
    ],
    nutrition: { calories: 290, protein: 5, carbs: 38, fat: 14 },
    tips: ["Using high-fat European-style butter gives Colcannon its distinctive rich, velvety texture."],
    substitutions: [],
    isPublic: true,
  },
];
