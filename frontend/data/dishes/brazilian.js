// frontend/data/dishes/brazilian.js
export const BRAZILIAN_DISHES = [
  {
    id: "bra_1",
    documentId: "bra_1",
    title: "Traditional Brazilian Feijoada",
    description:
      "Brazil's national treasure: a deeply flavorful slow-simmered black bean stew with smoked pork sausage (calabresa), tender ribs, salted beef, and bacon, served with orange slices and farofa.",
    cuisine: "brazilian",
    country: "Brazilian",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 25,
    cookTime: 90,
    servings: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
    ingredients: [
      { item: "Black beans soaked overnight", amount: "500g", category: "Grain" },
      { item: "Smoked pork sausage (calabresa or kielbasa)", amount: "300g sliced", category: "Protein" },
      { item: "Pork spare ribs & bacon", amount: "400g ribs + 150g bacon", category: "Protein" },
      { item: "Garlic minced & bay leaves", amount: "6 cloves + 3 leaves", category: "Spice" },
      { item: "Orange slices & toasted farofa (cassava flour)", amount: "for serving", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Brown Meats",
        instruction: "Render diced bacon in a large heavy pot. Brown the pork ribs and sliced smoked sausage.",
      },
      {
        step: 2,
        title: "Simmer Black Beans",
        instruction: "Add soaked black beans, water to cover by 2 inches, garlic, and bay leaves. Bring to a boil, then simmer on low for 1.5 hours until beans and meat are tender.",
      },
      {
        step: 3,
        title: "Mash Beans & Thicken",
        instruction: "Ladle out 1 cup of cooked beans, mash with a fork, and return to the pot to naturally thicken the rich black gravy. Serve with white rice, sauteed collard greens, and fresh orange slices.",
      },
    ],
    nutrition: { calories: 590, protein: 42, carbs: 48, fat: 26 },
    tips: ["Fresh orange slices served alongside Feijoada aid digestion and balance the rich smoked meats."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "bra_2",
    documentId: "bra_2",
    title: "Pão de Queijo (Brazilian Cheese Bread)",
    description:
      "Naturally gluten-free golden puffy cheese rolls made with tapioca flour, milk, butter, and sharp aged cheese, featuring a crisp crust and chewy, elastic cheesy interior.",
    cuisine: "brazilian",
    country: "Brazilian",
    category: "snack",
    foodType: "vegetarian",
    prepTime: 15,
    cookTime: 20,
    servings: 16,
    imageUrl:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: [
      { item: "Sour or sweet tapioca starch (polvilho)", amount: "2 cups", category: "Grain" },
      { item: "Milk & vegetable oil", amount: "1/2 cup each", category: "Dairy" },
      { item: "Eggs", amount: "2 large", category: "Protein" },
      { item: "Grated Parmesan or Minas cheese", amount: "1.5 cups finely grated", category: "Dairy" },
      { item: "Fine salt", amount: "1 tsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Scald Tapioca",
        instruction: "Bring milk, oil, and salt to a boil. Pour immediately over tapioca starch, stirring with a wooden spoon until gelatinized.",
      },
      {
        step: 2,
        title: "Knead in Cheese & Eggs",
        instruction: "Once cooled slightly, knead in eggs one at a time, then fold in grated cheese until a tacky dough forms.",
      },
      {
        step: 3,
        title: "Shape & Bake",
        instruction: "Roll into 1-inch balls with oiled hands. Bake at 375°F (190°C) for 18-20 minutes until puffed and light golden.",
      },
    ],
    nutrition: { calories: 120, protein: 4, carbs: 14, fat: 5 },
    tips: ["Scalding the tapioca starch with boiling liquid gelatinizes the starches, creating the signature stretchy interior."],
    substitutions: [],
    isPublic: true,
  },
];
