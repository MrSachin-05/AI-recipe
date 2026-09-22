// frontend/data/dishes/canadian.js
export const CANADIAN_DISHES = [
  {
    id: "can_1",
    documentId: "can_1",
    title: "Classic Montreal Poutine",
    description:
      "Crispy thick-cut russet fries piled high with fresh squeaky white cheddar cheese curds, smothered in a piping-hot velvety brown pepper gravy.",
    cuisine: "canadian",
    country: "Canadian",
    category: "lunch",
    foodType: "vegetarian",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1586805608485-add336722759?w=800",
    ingredients: [
      { item: "Fresh Quebec-style cheese curds", amount: "250g room temp", category: "Dairy" },
      { item: "Thick-cut russet fries", amount: "500g freshly fried", category: "Vegetable" },
      { item: "Velvety beef or poultry brown gravy", amount: "1.5 cups steaming hot", category: "Other" },
      { item: "Black pepper", amount: "1/2 tsp freshly cracked", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Fry Potatoes Extra Crisp",
        instruction: "Double fry thick russet potato sticks until exterior is deeply crisp and interior is fluffy.",
      },
      {
        step: 2,
        title: "Layer Curds Immediately",
        instruction: "Tumble hot fries into a wide bowl and scatter room-temperature cheese curds throughout so they start softening.",
      },
      {
        step: 3,
        title: "Pour Boiling Gravy",
        instruction: "Ladle boiling hot seasoned brown gravy generously over the fries and curds so the cheese turns luscious and stretchy while retaining its squeak.",
      },
    ],
    nutrition: { calories: 610, protein: 22, carbs: 58, fat: 34 },
    tips: ["Never use shredded mozzarella; authentic poutine demands fresh, room-temperature cheese curds for the signature squeak."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "can_2",
    documentId: "can_2",
    title: "Canadian Maple Glazed Salmon",
    description:
      "Pan-seared wild salmon fillet basted in pure dark amber Canadian maple syrup, whole grain Dijon mustard, garlic, and cracked pepper.",
    cuisine: "canadian",
    country: "Canadian",
    category: "dinner",
    foodType: "seafood",
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
    ingredients: [
      { item: "Wild salmon fillets", amount: "2 (200g each)", category: "Protein" },
      { item: "Pure Canadian maple syrup (Grade A)", amount: "3 tbsp", category: "Other" },
      { item: "Dijon mustard & soy sauce", amount: "1 tbsp each", category: "Other" },
      { item: "Garlic minced", amount: "2 cloves", category: "Spice" },
      { item: "Fresh rosemary or thyme", amount: "1 sprig", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Whisk Glaze",
        instruction: "Whisk maple syrup, Dijon mustard, soy sauce, and minced garlic together.",
      },
      {
        step: 2,
        title: "Sear Salmon",
        instruction: "Sear salmon skin-side down in a hot skillet for 4 minutes until crispy. Flip carefully.",
      },
      {
        step: 3,
        title: "Caramelize Glaze",
        instruction: "Pour maple mixture into the skillet. Baste salmon with the bubbling glaze for 3 minutes until glossy and caramelized.",
      },
    ],
    nutrition: { calories: 420, protein: 38, carbs: 18, fat: 20 },
    tips: ["Use 100% pure maple syrup; artificial pancake syrup will burn quickly on the skillet."],
    substitutions: [],
    isPublic: true,
  },
];
