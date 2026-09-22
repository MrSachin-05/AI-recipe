// frontend/data/dishes/jamaican.js
export const JAMAICAN_DISHES = [
  {
    id: "jam_1",
    documentId: "jam_1",
    title: "Authentic Jamaican Jerk Chicken",
    description:
      "Smoky, spicy grilled chicken marinated in a fiery Jamaican blend of Scotch bonnet peppers, allspice pimento berries, fresh thyme, scallions, and brown sugar.",
    cuisine: "jamaican",
    country: "Jamaican",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    ingredients: [
      { item: "Chicken quarters bone-in", amount: "1kg", category: "Protein" },
      { item: "Scotch bonnet peppers", amount: "2 stemmed", category: "Spice" },
      { item: "Allspice berries (pimento)", amount: "1.5 tbsp ground", category: "Spice" },
      { item: "Fresh thyme & scallions", amount: "1/2 cup chopped", category: "Vegetable" },
      { item: "Soy sauce & brown sugar", amount: "2 tbsp each", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Blend Jerk Marinade",
        instruction: "Puree Scotch bonnet peppers, scallions, garlic, ginger, thyme, allspice, soy sauce, and lime juice.",
      },
      {
        step: 2,
        title: "Marinate Chicken",
        instruction: "Score chicken skin, rub jerk paste thoroughly into cuts, and marinate overnight in the refrigerator.",
      },
      {
        step: 3,
        title: "Grill & Smoke",
        instruction: "Grill over medium indirect heat (ideally with pimento wood smoke) for 35 minutes until skin is deeply charred and meat reaches 165°F.",
      },
    ],
    nutrition: { calories: 470, protein: 42, carbs: 10, fat: 28 },
    tips: ["Wear gloves when handling Scotch bonnet peppers to prevent skin irritation."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "jam_2",
    documentId: "jam_2",
    title: "Caribbean Coconut Rice and Peas",
    description:
      "Fragrant basmati or long-grain rice simmered slowly in rich coconut milk with red kidney beans, whole Scotch bonnet pepper, allspice, and fresh garden thyme.",
    cuisine: "jamaican",
    country: "Jamaican",
    category: "lunch",
    foodType: "vegan",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    ingredients: [
      { item: "Long grain white rice", amount: "2 cups", category: "Grain" },
      { item: "Red kidney beans cooked", amount: "1 can (400g)", category: "Protein" },
      { item: "Full fat coconut milk", amount: "1 can (400ml)", category: "Dairy" },
      { item: "Whole Scotch bonnet pepper", amount: "1 (do not puncture)", category: "Spice" },
      { item: "Fresh thyme sprigs & scallion stalks", amount: "3 sprigs + 2 stalks bruised", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Infuse Coconut Liquid",
        instruction: "Bring coconut milk, kidney beans, scallions, thyme, and the whole unpunctured Scotch bonnet pepper to a gentle boil.",
      },
      {
        step: 2,
        title: "Add Rice",
        instruction: "Rinse rice until water runs clear, fold into hot coconut bean mixture, cover tightly with foil and lid.",
      },
      {
        step: 3,
        title: "Steam on Low",
        instruction: "Cook on lowest heat for 20 minutes without lifting lid. Remove pepper, fluff rice with fork, and serve hot.",
      },
    ],
    nutrition: { calories: 360, protein: 9, carbs: 58, fat: 12 },
    tips: ["Keep the Scotch bonnet whole and unpierced so it infuses incredible aroma without releasing explosive chili heat."],
    substitutions: [],
    isPublic: true,
  },
];
