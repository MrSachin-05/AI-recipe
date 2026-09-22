// frontend/data/dishes/portuguese.js
export const PORTUGUESE_DISHES = [
  {
    id: "por_1",
    documentId: "por_1",
    title: "Pastéis de Nata (Portuguese Custard Tarts)",
    description:
      "Iconic Lisbon pastries with an ultra-flaky, laminated puff pastry crust filled with luscious vanilla and cinnamon-scented egg custard blistered with caramelized spots.",
    cuisine: "portuguese",
    country: "Portuguese",
    category: "dessert",
    foodType: "vegetarian",
    prepTime: 25,
    cookTime: 15,
    servings: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    ingredients: [
      { item: "Puff pastry roll", amount: "1 sheet rolled tightly", category: "Grain" },
      { item: "Egg yolks", amount: "6 large", category: "Dairy" },
      { item: "Whole milk & heavy cream", amount: "1.5 cups + 1/2 cup", category: "Dairy" },
      { item: "Sugar syrup with lemon peel & cinnamon stick", amount: "1 cup sugar + 1/2 cup water", category: "Other" },
      { item: "Cornstarch & flour", amount: "2 tbsp each", category: "Grain" },
    ],
    instructions: [
      {
        step: 1,
        title: "Cook Custard Base",
        instruction: "Whisk flour and starch into warm milk; boil sugar syrup with lemon peel and cinnamon, then whisk together with egg yolks until smooth.",
      },
      {
        step: 2,
        title: "Press Pastry into Tins",
        instruction: "Cut puff pastry roll into 1-inch discs. Press into muffin tins with wet thumbs, working pastry up the sides.",
      },
      {
        step: 3,
        title: "Bake at Maximum Heat",
        instruction: "Fill 3/4 with custard. Bake at 500°F (260°C) for 12-14 minutes until crust is browned and custard top has blackened blister spots. Dust with cinnamon.",
      },
    ],
    nutrition: { calories: 220, protein: 4, carbs: 28, fat: 11 },
    tips: ["A blazing hot oven is essential to caramelize the custard top without overcooking the delicate filling."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "por_2",
    documentId: "por_2",
    title: "Piri-Piri Charcoal Grilled Chicken (Frango Assado)",
    description:
      "Spatchcocked chicken charred crisp over coals and continuously basted in a tangy, fiery Portuguese piri-piri pepper sauce with garlic, lemon, and bay leaf.",
    cuisine: "portuguese",
    country: "Portuguese",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    ingredients: [
      { item: "Whole chicken spatchcocked (flattened)", amount: "1.2kg", category: "Protein" },
      { item: "Piri-Piri or bird's eye red chilies", amount: "6 minced", category: "Spice" },
      { item: "Garlic, lemon juice & olive oil", amount: "4 cloves + 1/4 cup each", category: "Other" },
      { item: "Smoked paprika & bay leaf", amount: "1 tbsp paprika + 2 crushed leaves", category: "Spice" },
      { item: "Whiskey or white wine", amount: "2 tbsp", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Blend Piri-Piri Sauce",
        instruction: "Blend chilies, garlic, lemon juice, olive oil, paprika, and whiskey into a fiery emulsion.",
      },
      {
        step: 2,
        title: "Marinate Chicken",
        instruction: "Coat spatchcocked chicken in marinade and refrigerate at least 4 hours.",
      },
      {
        step: 3,
        title: "Charcoal Grill & Baste",
        instruction: "Grill over medium coals for 35 minutes, turning frequently and brushing with fresh piri-piri sauce until skin is blistered and charred.",
      },
    ],
    nutrition: { calories: 460, protein: 44, carbs: 4, fat: 29 },
    tips: ["Spatchcocking (removing the backbone and flattening) ensures the entire chicken cooks evenly over direct heat."],
    substitutions: [],
    isPublic: true,
  },
];
