// frontend/data/dishes/american.js
export const AMERICAN_DISHES = [
  {
    id: "usa_1",
    documentId: "usa_1",
    title: "Classic All-American Smash Cheeseburger",
    description:
      "Crispy-edged, juicy beef patty smashed paper-thin on a screaming hot griddle, blanketed in melted American cheese, pickles, and secret burger sauce inside a toasted brioche bun.",
    cuisine: "american",
    country: "American",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    ingredients: [
      { item: "80/20 ground chuck beef", amount: "350g divided into 4 balls", category: "Protein" },
      { item: "American cheese slices", amount: "4 slices", category: "Dairy" },
      { item: "Brioche burger buns", amount: "2 buttered", category: "Grain" },
      { item: "Dill pickle chips & sliced onion", amount: "1/4 cup", category: "Vegetable" },
      { item: "Special burger sauce", amount: "2 tbsp", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Smash on Cast Iron",
        instruction: "Place chilled beef balls on smoking hot skillet and smash flat with a sturdy spatula.",
      },
      {
        step: 2,
        title: "Flip & Melt",
        instruction: "Cook 2 minutes until deeply crusted; flip, season with salt, and immediately drape with American cheese.",
      },
      {
        step: 3,
        title: "Stack & Serve",
        instruction: "Stack double patties onto toasted brioche bun with pickles, onions, and special sauce.",
      },
    ],
    nutrition: { calories: 640, protein: 38, carbs: 32, fat: 40 },
    tips: ["Do not press after flipping, or you will lose the accumulated juices."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "usa_2",
    documentId: "usa_2",
    title: "Creamy Baked Macaroni & Cheese",
    description:
      "Elbow pasta tossed in a luxurious velvety sauce of sharp Cheddar and Gruyere, baked with a buttery golden panko breadcrumb crust.",
    cuisine: "american",
    country: "American",
    category: "lunch",
    foodType: "pasta",
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800",
    ingredients: [
      { item: "Elbow macaroni", amount: "300g", category: "Grain" },
      { item: "Sharp Cheddar & Gruyere cheese", amount: "300g shredded", category: "Dairy" },
      { item: "Whole milk", amount: "2.5 cups", category: "Dairy" },
      { item: "Butter & flour", amount: "3 tbsp each", category: "Dairy" },
      { item: "Panko breadcrumbs", amount: "1/2 cup", category: "Grain" },
    ],
    instructions: [
      {
        step: 1,
        title: "Make Roux & Mornay",
        instruction: "Whisk butter and flour; gradually stir in warm milk until smooth. Melt in shredded cheeses.",
      },
      {
        step: 2,
        title: "Mix Pasta",
        instruction: "Fold al dente pasta into cheese sauce; transfer into baking dish.",
      },
      {
        step: 3,
        title: "Bake Crust",
        instruction: "Top with buttered panko breadcrumbs and bake at 375°F (190°C) for 20 minutes until bubbly and golden.",
      },
    ],
    nutrition: { calories: 560, protein: 22, carbs: 58, fat: 27 },
    tips: ["Grate cheese from blocks; pre-shredded bagged cheese contains anti-caking agents that hinder smooth melting."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "usa_3",
    documentId: "usa_3",
    title: "Warm Spiced American Apple Pie",
    description:
      "Flaky, all-butter double crust pie brimming with tender cinnamon-spiced Honeycrisp and Granny Smith apples, finished with sparkling turbinado sugar.",
    cuisine: "american",
    country: "American",
    category: "dessert",
    foodType: "vegetarian",
    prepTime: 30,
    cookTime: 50,
    servings: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=800",
    ingredients: [
      { item: "Pie crust dough", amount: "2 rolled rounds", category: "Grain" },
      { item: "Tart & sweet apples (peeled & sliced)", amount: "6 large", category: "Vegetable" },
      { item: "Brown & white sugar", amount: "3/4 cup", category: "Other" },
      { item: "Cinnamon & nutmeg", amount: "1.5 tsp", category: "Spice" },
      { item: "Butter cubed", amount: "2 tbsp", category: "Dairy" },
    ],
    instructions: [
      {
        step: 1,
        title: "Toss Filling",
        instruction: "Toss apple slices with sugars, cinnamon, nutmeg, flour, and a squeeze of lemon.",
      },
      {
        step: 2,
        title: "Fill & Lattice",
        instruction: "Fill bottom pastry crust with apples, dot with butter, and drape top crust with steam vents or lattice.",
      },
      {
        step: 3,
        title: "Bake",
        instruction: "Bake at 400°F (200°C) for 20 mins, reduce to 375°F (190°C) and bake 35 mins until golden brown and bubbling.",
      },
    ],
    nutrition: { calories: 340, protein: 3, carbs: 52, fat: 14 },
    tips: ["Mixing Granny Smith (tart) and Honeycrisp (sweet/firm) creates the optimal balance of flavor and texture."],
    substitutions: [],
    isPublic: true,
  },
];
