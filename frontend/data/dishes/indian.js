// frontend/data/dishes/indian.js
export const INDIAN_DISHES = [
  {
    id: "ind_1",
    documentId: "ind_1",
    title: "Butter Chicken (Murgh Makhani)",
    description:
      "Tender tandoori-marinated chicken simmered in a velvety aromatic sauce made with ripe tomatoes, rich butter, fresh cream, and fragrant spices.",
    cuisine: "indian",
    country: "Indian",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    ingredients: [
      { item: "Chicken breast", amount: "600g", category: "Protein" },
      { item: "Greek yogurt", amount: "1/2 cup", category: "Dairy" },
      { item: "Heavy cream", amount: "1/2 cup", category: "Dairy" },
      { item: "Butter", amount: "4 tbsp", category: "Dairy" },
      { item: "Tomato puree", amount: "400g", category: "Vegetable" },
      { item: "Ginger-garlic paste", amount: "2 tbsp", category: "Spice" },
      { item: "Garam masala", amount: "2 tsp", category: "Spice" },
      { item: "Kasuri methi (fenugreek)", amount: "1 tbsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate Chicken",
        instruction:
          "Marinate chicken cubes with yogurt, ginger-garlic paste, and chili powder for 30 minutes.",
        tip: "Overnight marination makes the chicken exceptionally tender.",
      },
      {
        step: 2,
        title: "Sear Chicken",
        instruction:
          "Sear chicken in 1 tbsp butter on high heat until golden brown edges appear. Set aside.",
        tip: "Avoid crowding the pan for optimal caramelization.",
      },
      {
        step: 3,
        title: "Simmer Gravy",
        instruction:
          "Saute onions and tomato puree with garam masala. Stir in heavy cream and remaining butter.",
        tip: "Cook until oil separates on the perimeter.",
      },
      {
        step: 4,
        title: "Combine & Garnish",
        instruction:
          "Add chicken back into the gravy, sprinkle crushed kasuri methi, and simmer for 6 minutes. Serve with hot garlic naan.",
        tip: "Crushing fenugreek between your palms unlocks its herbal aroma.",
      },
    ],
    nutrition: { calories: 480, protein: 36, carbs: 14, fat: 31 },
    tips: ["Use Kashmiri chili for vivid red color without excessive heat."],
    substitutions: [
      { original: "Chicken breast", alternatives: ["Paneer", "Tofu", "Chicken thighs"] },
      { original: "Heavy cream", alternatives: ["Coconut cream", "Cashew paste"] },
    ],
    isPublic: true,
  },
  {
    id: "ind_2",
    documentId: "ind_2",
    title: "Paneer Tikka Masala",
    description:
      "Char-grilled cubes of soft cottage cheese and bell peppers served in a bold, spiced onion-tomato masala gravy.",
    cuisine: "indian",
    country: "Indian",
    category: "dinner",
    foodType: "vegetarian",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    ingredients: [
      { item: "Paneer (cottage cheese)", amount: "400g", category: "Protein" },
      { item: "Bell peppers & onions", amount: "2 cups diced", category: "Vegetable" },
      { item: "Yogurt", amount: "1/2 cup", category: "Dairy" },
      { item: "Garam masala & cumin", amount: "2 tsp", category: "Spice" },
      { item: "Tomato-onion gravy", amount: "2 cups", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate Paneer",
        instruction:
          "Coat paneer cubes and bell peppers in spiced yogurt and roast on a pan until charred.",
      },
      {
        step: 2,
        title: "Cook Gravy",
        instruction:
          "Prepare tomato-onion masala with ginger, garlic, coriander, and cumin.",
      },
      {
        step: 3,
        title: "Finish Dish",
        instruction: "Fold paneer tikka into the gravy and simmer gently for 5 minutes.",
      },
    ],
    nutrition: { calories: 410, protein: 22, carbs: 18, fat: 28 },
    tips: ["Soak paneer in warm water for 10 minutes beforehand for maximum softness."],
    substitutions: [
      { original: "Paneer", alternatives: ["Extra-firm Tofu", "Halloumi"] },
    ],
    isPublic: true,
  },
  {
    id: "ind_3",
    documentId: "ind_3",
    title: "Masala Dosa with Coconut Chutney",
    description:
      "Crispy fermented rice and lentil crepe stuffed with a spiced turmeric potato filling, served alongside fresh coconut chutney and tangy sambar.",
    cuisine: "indian",
    country: "Indian",
    category: "breakfast",
    foodType: "vegetarian",
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
    ingredients: [
      { item: "Dosa batter", amount: "3 cups", category: "Grain" },
      { item: "Boiled potatoes", amount: "3 medium", category: "Vegetable" },
      { item: "Mustard seeds & curry leaves", amount: "1 tsp", category: "Spice" },
      { item: "Turmeric & green chilies", amount: "1 tsp", category: "Spice" },
      { item: "Ghee", amount: "2 tbsp", category: "Dairy" },
    ],
    instructions: [
      {
        step: 1,
        title: "Make Potato Masala",
        instruction:
          "Temper mustard seeds, curry leaves, and green chilies in oil; add mashed boiled potatoes and turmeric.",
      },
      {
        step: 2,
        title: "Spread Dosa",
        instruction:
          "Pour a ladle of batter onto a hot tawa and spread outwards in circular motions. Drizzle ghee.",
      },
      {
        step: 3,
        title: "Assemble & Fold",
        instruction:
          "Place potato filling inside the golden crisp crepe, fold into a roll, and serve with chutney.",
      },
    ],
    nutrition: { calories: 340, protein: 9, carbs: 54, fat: 11 },
    tips: ["Wipe the pan with a wet cloth before pouring each dosa to control surface temperature."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "ind_4",
    documentId: "ind_4",
    title: "Hyderabadi Chicken Dum Biryani",
    description:
      "Fragrant layers of long-grain basmati rice and saffron infused bone-in chicken slow cooked under sealed steam with caramelized onions and fresh mint.",
    cuisine: "indian",
    country: "Indian",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 30,
    cookTime: 45,
    servings: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
    ingredients: [
      { item: "Basmati rice", amount: "500g parboiled 70%", category: "Grain" },
      { item: "Chicken thighs bone-in", amount: "800g", category: "Protein" },
      { item: "Biryani masala & saffron milk", amount: "2 tbsp", category: "Spice" },
      { item: "Fried onions (birista)", amount: "1 cup", category: "Vegetable" },
      { item: "Mint & coriander leaves", amount: "1 cup chopped", category: "Vegetable" },
      { item: "Ghee", amount: "3 tbsp", category: "Dairy" },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate Chicken",
        instruction: "Marinate chicken with yogurt, ginger garlic, biryani spices, mint, and half the fried onions for 1 hour.",
      },
      {
        step: 2,
        title: "Layer Rice & Chicken",
        instruction: "In a heavy pot, lay marinated chicken at base. Cover with parboiled 70% cooked basmati rice.",
      },
      {
        step: 3,
        title: "Dum Steam Cooking",
        instruction: "Drizzle saffron milk and ghee. Seal lid tightly with dough or foil, cook on high for 5 mins, then low for 35 mins.",
      },
    ],
    nutrition: { calories: 550, protein: 35, carbs: 65, fat: 18 },
    tips: ["Use aged basmati rice for long, separate, non-sticky grains."],
    substitutions: [{ original: "Chicken", alternatives: ["Mutton", "Vegetables & Paneer"] }],
    isPublic: true,
  },
  {
    id: "ind_5",
    documentId: "ind_5",
    title: "Warm Gulab Jamun",
    description:
      "Classic Indian golden milk-solid dumplings soaked in warm rosewater and cardamom-scented sugar syrup.",
    cuisine: "indian",
    country: "Indian",
    category: "dessert",
    foodType: "vegetarian",
    prepTime: 20,
    cookTime: 25,
    servings: 6,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCExvpYroMHCFdiPgLZ5ZexnDVIR0iG6_SrcxIAifOM_VBwa__HJOeUIa&s=10",
    ingredients: [
      { item: "Khoya / Milk powder", amount: "1 cup", category: "Dairy" },
      { item: "All-purpose flour", amount: "3 tbsp", category: "Grain" },
      { item: "Sugar", amount: "1.5 cups", category: "Other" },
      { item: "Cardamom & rose water", amount: "1 tsp", category: "Spice" },
      { item: "Ghee for frying", amount: "2 cups", category: "Dairy" },
    ],
    instructions: [
      {
        step: 1,
        title: "Prepare Syrup",
        instruction: "Boil sugar and water with crushed cardamom pods until sticky consistency.",
      },
      {
        step: 2,
        title: "Shape & Fry",
        instruction: "Knead dough into smooth crack-free balls and deep fry on low heat until deep golden brown.",
      },
      {
        step: 3,
        title: "Soak",
        instruction: "Drop hot fried jamuns directly into warm sugar syrup for at least 2 hours.",
      },
    ],
    nutrition: { calories: 280, protein: 5, carbs: 48, fat: 9 },
    tips: ["Fry on low heat throughout to ensure the dumplings cook all the way to the center."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "ind_6",
    documentId: "ind_6",
    title: "Crispy Punjabi Samosa with Mint Chutney",
    description:
      "Golden crispy pastry pockets filled with spiced potatoes, green peas, cumin, coriander seeds, and pomegranate powder.",
    cuisine: "indian",
    country: "Indian",
    category: "snack",
    foodType: "vegetarian",
    prepTime: 30,
    cookTime: 20,
    servings: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    ingredients: [
      { item: "All-purpose flour dough", amount: "2 cups", category: "Grain" },
      { item: "Potatoes boiled & cubed", amount: "4 medium", category: "Vegetable" },
      { item: "Green peas", amount: "1/2 cup", category: "Vegetable" },
      { item: "Ajwain (carom seeds)", amount: "1 tsp", category: "Spice" },
      { item: "Coriander & cumin seeds toasted", amount: "1 tbsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Cook Potato Filling",
        instruction: "Temper spices in oil, add potatoes and peas, mix gently leaving potato chunks intact.",
      },
      {
        step: 2,
        title: "Shape Cones",
        instruction: "Roll oval dough wrappers, cut in half, form a cone, fill with potato mixture, and seal wet edges.",
      },
      {
        step: 3,
        title: "Slow Fry",
        instruction: "Deep fry in medium-low oil for 15 minutes until crust is blistered, crisp, and golden.",
      },
    ],
    nutrition: { calories: 260, protein: 5, carbs: 32, fat: 13 },
    tips: ["Frying in warm (not smoking) oil is the secret to a crisp, bubble-free crust."],
    substitutions: [],
    isPublic: true,
  },
];
