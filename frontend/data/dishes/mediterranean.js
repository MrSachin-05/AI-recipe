// frontend/data/dishes/mediterranean.js
export const MEDITERRANEAN_DISHES = [
  {
    id: "grk_1",
    documentId: "grk_1",
    title: "Greek Chicken Souvlaki Platter",
    description:
      "Herb and lemon marinated grilled chicken skewers served with warm pita bread, cool cucumber tzatziki, crisp tomato salad, and kalamata olives.",
    cuisine: "mediterranean",
    country: "Greek",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    ingredients: [
      { item: "Chicken thighs cubed", amount: "600g", category: "Protein" },
      { item: "Greek yogurt & grated cucumber", amount: "1 cup for tzatziki", category: "Dairy" },
      { item: "Lemon juice, oregano, olive oil", amount: "3 tbsp", category: "Spice" },
      { item: "Pita flatbreads", amount: "4 warm", category: "Grain" },
      { item: "Feta cheese & olives", amount: "1/2 cup", category: "Dairy" },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate Skewers",
        instruction: "Toss chicken with olive oil, lemon juice, garlic, and dried oregano. Thread onto skewers.",
      },
      {
        step: 2,
        title: "Grill",
        instruction: "Grill chicken skewers over medium-high heat for 12-14 minutes until charred and cooked through.",
      },
      {
        step: 3,
        title: "Serve Platter",
        instruction: "Assemble on platters with warm pita, dollops of homemade garlic tzatziki, and feta cubes.",
      },
    ],
    nutrition: { calories: 470, protein: 38, carbs: 32, fat: 21 },
    tips: ["Squeeze grated cucumber dry with a paper towel before adding to tzatziki to prevent wateriness."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "grk_2",
    documentId: "grk_2",
    title: "Crispy Golden Falafel with Tahini",
    description:
      "Herb-packed deep-fried chickpea balls with fresh parsley, mint, coriander, and cumin, paired with creamy lemon tahini sauce.",
    cuisine: "mediterranean",
    country: "Greek",
    category: "lunch",
    foodType: "vegan",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=800",
    ingredients: [
      { item: "Dried chickpeas (soaked overnight)", amount: "2 cups", category: "Protein" },
      { item: "Fresh parsley & cilantro", amount: "1 cup packed", category: "Vegetable" },
      { item: "Garlic & onion", amount: "4 cloves + 1/2 onion", category: "Vegetable" },
      { item: "Cumin & coriander powder", amount: "1 tbsp each", category: "Spice" },
      { item: "Tahini paste with lemon", amount: "1/2 cup", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Pulse Ingredients",
        instruction: "Pulse soaked raw chickpeas, herbs, garlic, and spices in a food processor until coarse meal texture.",
      },
      {
        step: 2,
        title: "Form Patties",
        instruction: "Form into small balls or patties and chill 30 minutes in the fridge.",
      },
      {
        step: 3,
        title: "Fry Until Golden",
        instruction: "Deep fry in hot oil (375°F) for 4 minutes until dark golden brown and crispy outside.",
      },
    ],
    nutrition: { calories: 330, protein: 14, carbs: 42, fat: 13 },
    tips: ["Use soaked dried chickpeas, NEVER canned chickpeas, or the falafel will turn mushy and fall apart in hot oil."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "grk_3",
    documentId: "grk_3",
    title: "Authentic Greek Horiatiki Salad",
    description:
      "Chunky vine-ripened tomatoes, crisp Persian cucumbers, red onion rings, Kalamata olives, and a slab of creamy Greek barrel-aged feta drizzled with EVOO and dried oregano.",
    cuisine: "mediterranean",
    country: "Greek",
    category: "snack",
    foodType: "vegetarian",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
    ingredients: [
      { item: "Ripe vine tomatoes", amount: "3 cut in wedges", category: "Vegetable" },
      { item: "Cucumbers", amount: "2 thick sliced", category: "Vegetable" },
      { item: "Block of Greek feta", amount: "150g", category: "Dairy" },
      { item: "Kalamata olives", amount: "1/2 cup", category: "Vegetable" },
      { item: "Greek extra virgin olive oil & oregano", amount: "3 tbsp", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Cut Vegetables",
        instruction: "Cut tomatoes into bite-sized wedges and cucumbers into rounds; thinly slice red onion.",
      },
      {
        step: 2,
        title: "Arrange with Feta",
        instruction: "Toss vegetables with olives in a shallow bowl. Place the whole feta block directly on top.",
      },
      {
        step: 3,
        title: "Season & Drizzle",
        instruction: "Generously drizzle extra virgin olive oil, sprinkle dried oregano and pinch of sea salt.",
      },
    ],
    nutrition: { calories: 280, protein: 9, carbs: 12, fat: 22 },
    tips: ["Traditional Greek salad contains no lettuce; keeping the feta as a whole block preserves its creamy texture."],
    substitutions: [],
    isPublic: true,
  },
];
