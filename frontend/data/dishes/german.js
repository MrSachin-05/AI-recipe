// frontend/data/dishes/german.js
export const GERMAN_DISHES = [
  {
    id: "ger_1",
    documentId: "ger_1",
    title: "Crispy Bavarian Pork Schnitzel",
    description:
      "Tender, thin-pounded pork loin cutlet in a crispy, golden-rippled breadcrumb crust, served with lemon wedges, lingonberry jam, and warm potato salad.",
    cuisine: "german",
    country: "German",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    ingredients: [
      { item: "Boneless pork chops pounded thin", amount: "2 (200g each)", category: "Protein" },
      { item: "Fine breadcrumbs", amount: "1.5 cups", category: "Grain" },
      { item: "Eggs beaten", amount: "2 large", category: "Protein" },
      { item: "Clarified butter or oil for shallow frying", amount: "1 cup", category: "Dairy" },
      { item: "Fresh lemon wedges & parsley", amount: "for serving", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Pound Cutlets",
        instruction: "Pound pork between plastic wrap with a meat mallet until 1/4-inch thin throughout.",
      },
      {
        step: 2,
        title: "Standard Breading",
        instruction: "Dredge in seasoned flour, dip in beaten eggs, and gently coat in fine breadcrumbs without pressing down.",
      },
      {
        step: 3,
        title: "Swirl Fry in Butter",
        instruction: "Shallow fry in hot clarified butter, constantly swirling the pan so hot fat washes over the top creating the signature wavy crust.",
      },
    ],
    nutrition: { calories: 560, protein: 38, carbs: 36, fat: 28 },
    tips: ["Gently coating without pressing breadcrumbs allows the crust to puff up away from the meat (soufflé effect)."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "ger_2",
    documentId: "ger_2",
    title: "Black Forest Gateau (Schwarzwälder Kirschtorte)",
    description:
      "Decadent layers of airy chocolate sponge cake soaked in tart cherry Kirsch liqueur, filled with sour morello cherries and fluffy whipped cream.",
    cuisine: "german",
    country: "German",
    category: "dessert",
    foodType: "vegetarian",
    prepTime: 30,
    cookTime: 30,
    servings: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    ingredients: [
      { item: "Chocolate sponge cake layers", amount: "3 rounds", category: "Grain" },
      { item: "Morello sour cherries in syrup", amount: "2 cups", category: "Vegetable" },
      { item: "Heavy whipping cream", amount: "3 cups whipped stiff", category: "Dairy" },
      { item: "Kirschwasser cherry spirit", amount: "3 tbsp", category: "Other" },
      { item: "Dark chocolate shavings", amount: "1/2 cup", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Infuse Cake Layers",
        instruction: "Brush chocolate sponge cake layers generously with tart cherry syrup and Kirsch spirit.",
      },
      {
        step: 2,
        title: "Layer Cherries & Cream",
        instruction: "Pipe rings of whipped cream and fill centers with thickened sour morello cherries.",
      },
      {
        step: 3,
        title: "Frost & Shave Chocolate",
        instruction: "Frost top and sides with fluffy whipped cream, press bittersweet chocolate shavings onto the perimeter, and top with whole cherries.",
      },
    ],
    nutrition: { calories: 420, protein: 6, carbs: 48, fat: 23 },
    tips: ["Use tart morello cherries to perfectly cut through the richness of the sweet cream and dark chocolate."],
    substitutions: [],
    isPublic: true,
  },
];
