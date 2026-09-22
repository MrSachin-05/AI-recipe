// frontend/data/dishes/spanish.js
export const SPANISH_DISHES = [
  {
    id: "spn_1",
    documentId: "spn_1",
    title: "Traditional Valencian Seafood Paella",
    description:
      "Golden saffron-tinted Bomba rice slow simmered in rich seafood broth with mussels, tender calamari, colossal tiger prawns, and a coveted caramelized socarrat crust.",
    cuisine: "spanish",
    country: "Spanish",
    category: "dinner",
    foodType: "seafood",
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800",
    ingredients: [
      { item: "Spanish Bomba rice", amount: "300g", category: "Grain" },
      { item: "Tiger prawns & mussels", amount: "400g total", category: "Protein" },
      { item: "Spanish saffron threads", amount: "1 generous pinch", category: "Spice" },
      { item: "Rich seafood stock", amount: "4 cups hot", category: "Other" },
      { item: "Smoked paprika & sofrito", amount: "1 tbsp paprika + 1/2 cup tomato-garlic base", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Sear Seafood & Sofrito",
        instruction: "Sear prawns in wide paella pan; remove. Saute sofrito paste and smoked paprika until sweet and fragrant.",
      },
      {
        step: 2,
        title: "Toast Rice & Add Broth",
        instruction: "Add Bomba rice, coating grains in oil. Pour boiling saffron broth and spread rice evenly.",
      },
      {
        step: 3,
        title: "Simmer & Build Socarrat",
        instruction: "Simmer 15 mins undisturbed. Nestle prawns and mussels on top. Crank heat for final 2 mins to form crunchy bottom socarrat crust.",
      },
    ],
    nutrition: { calories: 510, protein: 32, carbs: 64, fat: 14 },
    tips: ["Never stir paella once broth is poured to ensure the iconic crispy socarrat develops on the bottom."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "spn_2",
    documentId: "spn_2",
    title: "Crispy Patatas Bravas with Spicy Brava Sauce",
    description:
      "Crispy cubed fried potatoes smothered in a fiery smoked pimenton tomato sauce and topped with garlic aioli.",
    cuisine: "spanish",
    country: "Spanish",
    category: "snack",
    foodType: "vegetarian",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800",
    ingredients: [
      { item: "Yukon gold or russet potatoes", amount: "4 cut into 1-inch cubes", category: "Vegetable" },
      { item: "Hot smoked Spanish paprika", amount: "1 tbsp", category: "Spice" },
      { item: "Tomato paste & chicken/veg stock", amount: "2 tbsp paste + 1 cup stock", category: "Other" },
      { item: "Garlic aioli mayonnaise", amount: "1/4 cup", category: "Dairy" },
      { item: "Olive oil for frying", amount: "2 cups", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Parboil Potatoes",
        instruction: "Parboil potato cubes in salted water for 5 minutes; drain and let steam dry completely.",
      },
      {
        step: 2,
        title: "Make Brava Sauce",
        instruction: "Cook garlic, flour, and smoked paprika in olive oil, whisk in stock until a glossy, thick reddish sauce forms.",
      },
      {
        step: 3,
        title: "Fry & Serve",
        instruction: "Deep fry potatoes until crispy and dark golden. Plate hot, spoon brava sauce, and dollop creamy aioli.",
      },
    ],
    nutrition: { calories: 290, protein: 4, carbs: 36, fat: 15 },
    tips: ["Letting the parboiled potatoes steam dry completely ensures a glass-like crisp crust when fried."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "spn_3",
    documentId: "spn_3",
    title: "Classic Spanish Tortilla Espanola",
    description:
      "The quintessential Spanish omelet prepared simply with slow-poached thin-sliced potatoes, caramelized onions, and tender eggs.",
    cuisine: "spanish",
    country: "Spanish",
    category: "breakfast",
    foodType: "vegetarian",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?w=800",
    ingredients: [
      { item: "Eggs", amount: "6 large beaten", category: "Protein" },
      { item: "Potatoes thinly sliced", amount: "3 medium", category: "Vegetable" },
      { item: "Yellow onion thinly sliced", amount: "1 large", category: "Vegetable" },
      { item: "Spanish extra virgin olive oil", amount: "1 cup for poaching", category: "Other" },
      { item: "Flaky sea salt", amount: "1 tsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Slow Poach Potatoes",
        instruction: "Gently simmer potatoes and onions in warm olive oil on medium-low until tender and creamy, not browned. Drain oil.",
      },
      {
        step: 2,
        title: "Mix with Eggs",
        instruction: "Fold warm potatoes and onions into beaten eggs with salt; let rest 10 minutes so eggs absorb flavors.",
      },
      {
        step: 3,
        title: "Cook & Flip",
        instruction: "Cook in an oiled skillet 4 minutes. Invert onto a plate, slide back into skillet, and cook 2 minutes leaving the center slightly custardy.",
      },
    ],
    nutrition: { calories: 310, protein: 12, carbs: 22, fat: 19 },
    tips: ["Poaching potatoes in plenty of oil makes them melt-in-your-mouth tender."],
    substitutions: [],
    isPublic: true,
  },
];
