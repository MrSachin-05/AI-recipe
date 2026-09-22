// frontend/data/dishes/australian.js
export const AUSTRALIAN_DISHES = [
  {
    id: "aus_1",
    documentId: "aus_1",
    title: "Classic Australian Meat Pie",
    description:
      "Iconic hand-held meat pie featuring a sturdy shortcrust pastry base and flaky puff pastry lid, encasing a rich, savory minced beef filling in dark onion gravy with Worcestershire sauce.",
    cuisine: "australian",
    country: "Australian",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?w=800",
    ingredients: [
      { item: "Ground lean beef (mince)", amount: "500g", category: "Protein" },
      { item: "Shortcrust pastry sheets (for base)", amount: "2 sheets", category: "Grain" },
      { item: "Puff pastry sheets (for top)", amount: "2 sheets", category: "Grain" },
      { item: "Beef stock & Worcestershire sauce", amount: "1.5 cups stock + 2 tbsp sauce", category: "Other" },
      { item: "Tomato paste & onion", amount: "1 tbsp paste + 1 finely diced onion", category: "Vegetable" },
      { item: "Egg wash & tomato sauce (ketchup)", amount: "for baking & serving", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Cook Meat Filling",
        instruction: "Brown onions and minced beef; stir in tomato paste, Worcestershire, beef stock, and cornstarch slurry. Simmer until thick and glossy. Cool completely.",
      },
      {
        step: 2,
        title: "Line Pie Tins",
        instruction: "Line individual pie tins with shortcrust pastry. Spoon in the cooled thick beef filling.",
      },
      {
        step: 3,
        title: "Top & Bake",
        instruction: "Crimp puff pastry lids onto each pie, brush with egg wash, and bake at 400°F (200°C) for 25 minutes until puffed and dark golden. Serve with tomato sauce.",
      },
    ],
    nutrition: { calories: 480, protein: 28, carbs: 42, fat: 24 },
    tips: ["Always cool the meat filling before spooning onto pastry to avoid a soggy bottom crust."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "aus_2",
    documentId: "aus_2",
    title: "Crisp Summer Aussie Pavlova",
    description:
      "Classic Australian dessert of crisp, delicate French meringue with a marshmallowy soft interior, mounded with chantilly cream, passionfruit pulp, and ripe berries.",
    cuisine: "australian",
    country: "Australian",
    category: "dessert",
    foodType: "vegetarian",
    prepTime: 20,
    cookTime: 75,
    servings: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    ingredients: [
      { item: "Egg whites at room temperature", amount: "4 large", category: "Protein" },
      { item: "Superfine caster sugar", amount: "1 cup", category: "Other" },
      { item: "Cornstarch & white vinegar", amount: "1 tsp each", category: "Other" },
      { item: "Heavy whipping cream", amount: "1.5 cups whipped soft", category: "Dairy" },
      { item: "Fresh passionfruit pulp, kiwi & berries", amount: "1 cup assorted", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Whip Meringue",
        instruction: "Whip egg whites to soft peaks; gradually shower in caster sugar 1 tbsp at a time until glossy and stiff. Fold in vinegar and cornstarch.",
      },
      {
        step: 2,
        title: "Shape & Slow Bake",
        instruction: "Mound into an 8-inch circle on parchment paper, shaping slight craters in the center. Bake at 250°F (120°C) for 75 minutes. Turn off oven and let cool inside completely.",
      },
      {
        step: 3,
        title: "Crown with Cream & Fruit",
        instruction: "Top the crisp shell with billows of whipped cream, spoon tart fresh passionfruit pulp, and scatter sliced strawberries and kiwi.",
      },
    ],
    nutrition: { calories: 260, protein: 3, carbs: 36, fat: 12 },
    tips: ["Cornstarch and vinegar are the secret to keeping the meringue's center soft and marshmallow-like."],
    substitutions: [],
    isPublic: true,
  },
];
