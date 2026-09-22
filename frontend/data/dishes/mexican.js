// frontend/data/dishes/mexican.js
export const MEXICAN_DISHES = [
  {
    id: "mex_1",
    documentId: "mex_1",
    title: "Street Tacos al Pastor",
    description:
      "Marinated pork shoulder infused with achiote, chipotle, and pineapple, seared crispy and served on warm corn tortillas with cilantro and lime.",
    cuisine: "mexican",
    country: "Mexican",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
    ingredients: [
      { item: "Pork shoulder thinly sliced", amount: "600g", category: "Protein" },
      { item: "Achiote paste & chipotle", amount: "2 tbsp", category: "Spice" },
      { item: "Pineapple slices", amount: "1 cup diced", category: "Vegetable" },
      { item: "Corn tortillas", amount: "12 small", category: "Grain" },
      { item: "Finely diced white onion & cilantro", amount: "1/2 cup each", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate Pork",
        instruction: "Blend achiote, chipotle, vinegar, garlic, and citrus juice; marinate sliced pork for 2 hours.",
      },
      {
        step: 2,
        title: "Char Meat & Pineapple",
        instruction: "Cook marinated pork and pineapple chunks in a scorching hot cast iron skillet until caramelized and slightly charred.",
      },
      {
        step: 3,
        title: "Assemble Tacos",
        instruction: "Warm corn tortillas on a comal, pile with pork, grilled pineapple, chopped onions, and fresh cilantro. Serve with lime wedges.",
      },
    ],
    nutrition: { calories: 420, protein: 32, carbs: 35, fat: 18 },
    tips: ["Use corn tortillas and toast them lightly on a dry pan until pliable and fragrant."],
    substitutions: [
      { original: "Pork shoulder", alternatives: ["Chicken thighs", "Mushroom medley (vegetarian)"] },
    ],
    isPublic: true,
  },
  {
    id: "mex_2",
    documentId: "mex_2",
    title: "Chunky Guacamole & Crispy Tortilla Chips",
    description:
      "Creamy Hass avocados mashed with lime juice, diced jalapenos, red onions, tomatoes, and fresh cilantro.",
    cuisine: "mexican",
    country: "Mexican",
    category: "snack",
    foodType: "vegan",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?w=800",
    ingredients: [
      { item: "Ripe Hass avocados", amount: "3", category: "Vegetable" },
      { item: "Fresh lime juice", amount: "2 tbsp", category: "Vegetable" },
      { item: "Jalapeno pepper seeded", amount: "1 finely minced", category: "Vegetable" },
      { item: "Red onion", amount: "1/4 cup diced", category: "Vegetable" },
      { item: "Roma tomato", amount: "1 diced", category: "Vegetable" },
      { item: "Tortilla chips", amount: "1 bag", category: "Grain" },
    ],
    instructions: [
      {
        step: 1,
        title: "Mash Avocados",
        instruction: "Halve avocados, scoop flesh into a molcajete or bowl, and mash roughly with a fork.",
      },
      {
        step: 2,
        title: "Season & Mix",
        instruction: "Fold in lime juice, salt, onion, jalapeno, tomato, and fresh cilantro.",
      },
      {
        step: 3,
        title: "Serve",
        instruction: "Serve immediately with crunchy warm corn tortilla chips.",
      },
    ],
    nutrition: { calories: 230, protein: 4, carbs: 19, fat: 16 },
    tips: ["Leave one avocado pit in the bowl to naturally prevent browning before serving."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "mex_3",
    documentId: "mex_3",
    title: "Huevos Rancheros",
    description:
      "Sunnyside-up fried eggs perched on lightly crisped corn tortillas, smothered with warm salsa ranchera, refried beans, and cotija cheese.",
    cuisine: "mexican",
    country: "Mexican",
    category: "breakfast",
    foodType: "vegetarian",
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
    ingredients: [
      { item: "Corn tortillas", amount: "4", category: "Grain" },
      { item: "Eggs", amount: "4 large", category: "Protein" },
      { item: "Warm refried beans", amount: "1 cup", category: "Vegetable" },
      { item: "Ranchero tomato salsa", amount: "1 cup", category: "Vegetable" },
      { item: "Cotija cheese & avocado", amount: "1/4 cup crumbled", category: "Dairy" },
    ],
    instructions: [
      {
        step: 1,
        title: "Warm Tortillas",
        instruction: "Quickly pan-fry tortillas in a splash of oil until warm and pliable.",
      },
      {
        step: 2,
        title: "Fry Eggs",
        instruction: "Fry eggs sunny-side up until whites are set and yolks remain runny.",
      },
      {
        step: 3,
        title: "Assemble",
        instruction: "Spread refried beans onto tortillas, top with fried eggs, ladle warm salsa, and garnish with cotija and cilantro.",
      },
    ],
    nutrition: { calories: 380, protein: 18, carbs: 32, fat: 20 },
    tips: ["Warm salsa enhances flavor contrast with fresh avocado."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "mex_4",
    documentId: "mex_4",
    title: "Cinnamon Sugar Churros with Warm Chocolate",
    description:
      "Crispy ridged fried choux pastry batons rolled in fragrant cinnamon sugar, accompanied by a thick Mexican spiced dark chocolate dipping sauce.",
    cuisine: "mexican",
    country: "Mexican",
    category: "dessert",
    foodType: "vegetarian",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800",
    ingredients: [
      { item: "All-purpose flour", amount: "1 cup", category: "Grain" },
      { item: "Butter & water", amount: "2 tbsp butter + 1 cup water", category: "Dairy" },
      { item: "Cinnamon & granulated sugar", amount: "1/2 cup sugar + 1 tbsp cinnamon", category: "Spice" },
      { item: "Dark chocolate & Mexican cinnamon", amount: "100g melted with cream", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Make Choux Dough",
        instruction: "Boil water, butter, and pinch of salt. Stir in flour off heat vigorously until dough pulls from sides.",
      },
      {
        step: 2,
        title: "Pipe & Fry",
        instruction: "Pipe 4-inch strips through an open-star tip into hot oil (365°F / 185°C) and fry until golden brown.",
      },
      {
        step: 3,
        title: "Coat & Serve",
        instruction: "Drain on paper towels, roll in cinnamon sugar mixture, and serve immediately with warm chocolate ganache dip.",
      },
    ],
    nutrition: { calories: 310, protein: 4, carbs: 42, fat: 15 },
    tips: ["A star piping tip gives the ridges that maximize crispness."],
    substitutions: [],
    isPublic: true,
  },
];
