// frontend/data/dishes/thai.js
export const THAI_DISHES = [
  {
    id: "tha_1",
    documentId: "tha_1",
    title: "Authentic Pad Thai with Succulent Shrimp",
    description:
      "Stir-fried flat rice noodles with juicy tiger prawns, scrambled eggs, tofu, crunchy bean sprouts, roasted crushed peanuts, and a sweet, sour, savory tamarind glaze.",
    cuisine: "thai",
    country: "Thai",
    category: "dinner",
    foodType: "seafood",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
    ingredients: [
      { item: "Flat rice noodles", amount: "200g soaked", category: "Grain" },
      { item: "Tiger prawns peeled", amount: "200g", category: "Protein" },
      { item: "Firm tofu cubed", amount: "100g", category: "Protein" },
      { item: "Tamarind paste & fish sauce", amount: "2 tbsp each", category: "Other" },
      { item: "Palm sugar", amount: "1.5 tbsp", category: "Other" },
      { item: "Bean sprouts & crushed peanuts", amount: "1/2 cup", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Soak Noodles",
        instruction: "Soak dry rice noodles in warm water for 30 minutes until pliable but al dente.",
      },
      {
        step: 2,
        title: "Wok Fry Proteins",
        instruction: "Sear prawns and tofu in peanut oil; scramble eggs into the wok.",
      },
      {
        step: 3,
        title: "Toss with Tamarind",
        instruction: "Add drained noodles and tamarind sauce. Toss vigorously on high heat for 2 minutes. Fold in bean sprouts and crushed peanuts.",
      },
    ],
    nutrition: { calories: 490, protein: 29, carbs: 62, fat: 15 },
    tips: ["Tamarind paste provides the essential authentic tartness that cannot be duplicated by lime juice."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "tha_2",
    documentId: "tha_2",
    title: "Aromatic Thai Green Curry with Chicken",
    description:
      "Tender chicken breast simmered in fragrant coconut milk with authentic green curry paste, Thai eggplants, bamboo shoots, and fresh Thai sweet basil.",
    cuisine: "thai",
    country: "Thai",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
    ingredients: [
      { item: "Chicken breast thinly sliced", amount: "500g", category: "Protein" },
      { item: "Thai green curry paste", amount: "3 tbsp", category: "Spice" },
      { item: "Full-fat coconut milk", amount: "400ml", category: "Dairy" },
      { item: "Thai eggplants or zucchini", amount: "1 cup cubed", category: "Vegetable" },
      { item: "Kaffir lime leaves & Thai basil", amount: "6 leaves each", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Fry Curry Paste",
        instruction: "Fry green curry paste in thick coconut cream until fragrant and green oil splits to the surface.",
      },
      {
        step: 2,
        title: "Simmer Chicken & Veggies",
        instruction: "Add chicken slices, stir until sealed. Pour in remaining coconut milk, torn lime leaves, and eggplant.",
      },
      {
        step: 3,
        title: "Finish with Thai Basil",
        instruction: "Simmer 10 minutes until chicken is tender. Turn off heat, stir in fresh Thai basil leaves, and serve with jasmine rice.",
      },
    ],
    nutrition: { calories: 460, protein: 32, carbs: 12, fat: 32 },
    tips: ["Frying the paste until the oil breaks out is essential for vibrant color and authentic aroma."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "tha_3",
    documentId: "tha_3",
    title: "Sweet Mango Sticky Rice (Khao Niew Mamuang)",
    description:
      "Sweet glutinous rice steamed and soaked in warm salted coconut cream, paired with fresh, sweet slices of ripe honey mango.",
    cuisine: "thai",
    country: "Thai",
    category: "dessert",
    foodType: "vegan",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800",
    ingredients: [
      { item: "Thai sweet sticky rice", amount: "1.5 cups", category: "Grain" },
      { item: "Ripe honey or champagne mangoes", amount: "2 sliced", category: "Vegetable" },
      { item: "Coconut milk", amount: "1 can (400ml)", category: "Dairy" },
      { item: "Sugar & sea salt", amount: "1/3 cup sugar + 1/2 tsp salt", category: "Other" },
      { item: "Toasted mung beans or sesame", amount: "1 tbsp for garnish", category: "Grain" },
    ],
    instructions: [
      {
        step: 1,
        title: "Steam Sticky Rice",
        instruction: "Steam soaked glutinous rice for 20 minutes until translucent and tender.",
      },
      {
        step: 2,
        title: "Infuse Sweet Coconut Sauce",
        instruction: "Warm coconut milk with sugar and salt until dissolved. Pour 3/4 over hot steamed rice and let sit covered for 20 minutes to absorb.",
      },
      {
        step: 3,
        title: "Assemble & Garnish",
        instruction: "Plate sweet sticky rice alongside fresh mango slices. Drizzle remaining coconut sauce and sprinkle crispy mung beans.",
      },
    ],
    nutrition: { calories: 340, protein: 4, carbs: 64, fat: 9 },
    tips: ["A pinch of salt in the coconut drizzle creates the irresistible sweet-salty Thai flavor profile."],
    substitutions: [],
    isPublic: true,
  },
];
