// frontend/data/dishes/vietnamese.js
export const VIETNAMESE_DISHES = [
  {
    id: "vnm_1",
    documentId: "vnm_1",
    title: "Pho Bo (Traditional Vietnamese Beef Noodle Soup)",
    description:
      "Aromatic bone broth infused with star anise, charred ginger, and cinnamon, poured over soft flat rice noodles, rare beef eye of round, fresh basil, and crunchy bean sprouts.",
    cuisine: "vietnamese",
    country: "Vietnamese",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800",
    ingredients: [
      { item: "Pho rice noodles (banh pho)", amount: "400g", category: "Grain" },
      { item: "Beef flank & sirloin thinly sliced", amount: "400g", category: "Protein" },
      { item: "Rich beef bone broth", amount: "6 cups", category: "Other" },
      { item: "Star anise, cinnamon stick, cloves", amount: "1 spice bundle", category: "Spice" },
      { item: "Fresh Thai basil, cilantro & bean sprouts", amount: "2 cups", category: "Vegetable" },
      { item: "Lime wedges, hoisin & sriracha", amount: "for serving", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Infuse Broth",
        instruction: "Char ginger and onions over open flame. Simmer with beef broth, star anise, cinnamon, and fish sauce for 30 minutes.",
      },
      {
        step: 2,
        title: "Prep Bowls",
        instruction: "Cook rice noodles and place in deep heated serving bowls. Lay paper-thin raw beef slices across noodles.",
      },
      {
        step: 3,
        title: "Ladle Boiling Broth",
        instruction: "Ladle boiling hot broth directly over raw beef to gently cook it to a tender pink. Serve with herbs, bean sprouts, and lime.",
      },
    ],
    nutrition: { calories: 430, protein: 34, carbs: 54, fat: 9 },
    tips: ["Pouring actively boiling broth cooks the thinly sliced raw beef instantly while keeping it tender."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "vnm_2",
    documentId: "vnm_2",
    title: "Classic Pork Banh Mi Sandwich",
    description:
      "Crisp, airy Vietnamese baguette smeared with rich liver pate and mayo, packed with savory roasted pork, pickled daikon and carrot, fresh cucumber, cilantro, and fiery bird's eye chilies.",
    cuisine: "vietnamese",
    country: "Vietnamese",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800",
    ingredients: [
      { item: "Vietnamese French baguettes", amount: "2 crispy", category: "Grain" },
      { item: "Seasoned roast pork (char siu) sliced", amount: "200g", category: "Protein" },
      { item: "French liver pate & mayo", amount: "2 tbsp each", category: "Dairy" },
      { item: "Do Chua (pickled carrot & daikon)", amount: "1/2 cup", category: "Vegetable" },
      { item: "Cucumber ribbons & fresh cilantro", amount: "1/2 cup", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Crisp Baguette",
        instruction: "Warm baguettes in oven until crust is crackling and interior is fluffy. Slice lengthwise.",
      },
      {
        step: 2,
        title: "Spread Condiments",
        instruction: "Spread creamy mayo on one side and rich liver pate on the other.",
      },
      {
        step: 3,
        title: "Layer & Garnish",
        instruction: "Layer roasted pork slices, cucumber spears, sweet-tangy pickled daikon, fresh cilantro stems, and jalapeno slices.",
      },
    ],
    nutrition: { calories: 490, protein: 26, carbs: 56, fat: 18 },
    tips: ["A splash of Maggi seasoning sauce inside the bread adds authentic umami depth."],
    substitutions: [],
    isPublic: true,
  },
];
