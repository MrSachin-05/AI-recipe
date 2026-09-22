// frontend/data/dishes/british.js
export const BRITISH_DISHES = [
  {
    id: "uk_1",
    documentId: "uk_1",
    title: "Beer-Battered Fish and Chips with Tartar Sauce",
    description:
      "Crisp, airy ale-battered Atlantic cod fillets served with hand-cut double-cooked chips, tangy tartar sauce, and crushed minted garden peas.",
    cuisine: "british",
    country: "British",
    category: "dinner",
    foodType: "seafood",
    prepTime: 20,
    cookTime: 20,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1526230427044-d092040d48dc?w=800",
    ingredients: [
      { item: "Atlantic cod fillets", amount: "2 thick fillets (350g)", category: "Protein" },
      { item: "Cold British pale ale", amount: "1 cup", category: "Other" },
      { item: "Flour & baking powder", amount: "1 cup flour + 1 tsp powder", category: "Grain" },
      { item: "Russet potatoes cut into chips", amount: "3 large", category: "Vegetable" },
      { item: "Homemade tartar sauce & malt vinegar", amount: "1/4 cup", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Double Cook Chips",
        instruction: "Par-fry potato chips at 320°F (160°C) for 6 mins. Drain and cool. Flash-fry at 375°F (190°C) until golden crisp.",
      },
      {
        step: 2,
        title: "Whisk Beer Batter",
        instruction: "Whisk cold ale, flour, and pinch of salt right before frying so bubbles stay active.",
      },
      {
        step: 3,
        title: "Dip & Fry Fish",
        instruction: "Dust fish in flour, dip in beer batter, fry in hot oil 6-8 minutes until golden and crunching. Serve with malt vinegar.",
      },
    ],
    nutrition: { calories: 680, protein: 38, carbs: 65, fat: 30 },
    tips: ["Use ice-cold carbonated beer to create an ultra-light, crunchy batter."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "uk_2",
    documentId: "uk_2",
    title: "Traditional British Shepherd's Pie",
    description:
      "Savory minced lamb cooked with rosemary, carrots, peas, and rich Worcestershire gravy, topped with piped mashed potatoes broiled to golden crests.",
    cuisine: "british",
    country: "British",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 25,
    cookTime: 40,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?w=800",
    ingredients: [
      { item: "Ground lamb (mince)", amount: "500g", category: "Protein" },
      { item: "Mashed potatoes with butter & milk", amount: "4 cups creamy", category: "Vegetable" },
      { item: "Carrots, onions & peas", amount: "1.5 cups diced", category: "Vegetable" },
      { item: "Worcestershire sauce & beef broth", amount: "2 tbsp sauce + 1.5 cups broth", category: "Other" },
      { item: "Fresh rosemary & thyme", amount: "1 tbsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Brown Mince & Veggies",
        instruction: "Brown minced lamb; add diced carrots, onions, and garlic. Stir in tomato paste, herbs, and Worcestershire.",
      },
      {
        step: 2,
        title: "Simmer Gravy",
        instruction: "Pour in broth and simmer 15 minutes until rich and thick. Stir in peas.",
      },
      {
        step: 3,
        title: "Top with Mash & Bake",
        instruction: "Transfer meat to baking dish. Pipe or rake mashed potato over top with a fork. Bake at 400°F (200°C) for 25 mins until peaks are browned.",
      },
    ],
    nutrition: { calories: 510, protein: 31, carbs: 42, fat: 24 },
    tips: ["Raking lines with a fork on the mashed potato top creates more ridges for crispy browning."],
    substitutions: [],
    isPublic: true,
  },
];
