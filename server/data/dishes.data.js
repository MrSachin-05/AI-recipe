// server/data/dishes.data.js
// Express backend dishes dataset categorized by Country/Cuisine and Type of Food/Category

const ALL_DISHES = [
  // ==================== INDIAN ====================
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
    substitutions: [{ original: "Paneer", alternatives: ["Extra-firm Tofu", "Halloumi"] }],
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
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
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

  // ==================== ITALIAN ====================
  {
    id: "ita_1",
    documentId: "ita_1",
    title: "Authentic Spaghetti Carbonara",
    description:
      "The Roman classic prepared purely with crispy guanciale, fresh egg yolks, sharp Pecorino Romano cheese, and freshly ground black pepper.",
    cuisine: "italian",
    country: "Italian",
    category: "dinner",
    foodType: "pasta",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
    ingredients: [
      { item: "Spaghetti pasta", amount: "250g", category: "Grain" },
      { item: "Guanciale (or pancetta)", amount: "120g", category: "Protein" },
      { item: "Egg yolks", amount: "3 large", category: "Dairy" },
      { item: "Pecorino Romano", amount: "50g finely grated", category: "Dairy" },
      { item: "Black pepper", amount: "1 tbsp freshly cracked", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Crisp the Meat",
        instruction: "Fry diced guanciale over medium heat until golden and crispy. Remove from heat.",
      },
      {
        step: 2,
        title: "Whisk Egg Mixture",
        instruction: "In a bowl, whisk egg yolks, grated Pecorino, and black pepper into a thick paste.",
      },
      {
        step: 3,
        title: "Boil Pasta",
        instruction: "Cook spaghetti in salted boiling water until al dente. Reserve 1/2 cup pasta water.",
      },
      {
        step: 4,
        title: "Emulsify",
        instruction: "Toss hot pasta with guanciale and fat. Off the heat, pour egg mixture and toss vigorously with a splash of pasta water until creamy.",
        tip: "Never add egg mixture while the pan is over active heat, or the eggs will scramble.",
      },
    ],
    nutrition: { calories: 590, protein: 28, carbs: 62, fat: 26 },
    tips: ["Do not use heavy cream; the authentic creaminess comes solely from emulsified starch water and egg yolk."],
    substitutions: [
      { original: "Guanciale", alternatives: ["Pancetta", "Thick-cut smoked bacon"] },
      { original: "Pecorino Romano", alternatives: ["Parmigiano Reggiano"] },
    ],
    isPublic: true,
  },
  {
    id: "ita_2",
    documentId: "ita_2",
    title: "Pizza Margherita Napoletana",
    description:
      "Neapolitan masterpiece featuring a blistered sourdough crust, San Marzano tomato sauce, fresh buffalo mozzarella, and sweet basil leaves.",
    cuisine: "italian",
    country: "Italian",
    category: "dinner",
    foodType: "vegetarian",
    prepTime: 25,
    cookTime: 10,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    ingredients: [
      { item: "Pizza dough ball", amount: "1 (250g)", category: "Grain" },
      { item: "San Marzano tomatoes", amount: "1/2 cup crushed", category: "Vegetable" },
      { item: "Fresh Mozzarella", amount: "120g torn", category: "Dairy" },
      { item: "Fresh Basil", amount: "6-8 leaves", category: "Vegetable" },
      { item: "Extra virgin olive oil", amount: "1 tbsp", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Stretch Dough",
        instruction: "Stretch dough by hand on a floured surface, pushing air to the crust edges.",
      },
      {
        step: 2,
        title: "Add Toppings",
        instruction: "Spoon crushed tomatoes evenly, scatter torn mozzarella, and drizzle olive oil.",
      },
      {
        step: 3,
        title: "Bake at Max Temp",
        instruction: "Bake on a preheated pizza stone at 500°F (260°C) for 7-9 minutes until crust blisters. Top with fresh basil.",
      },
    ],
    nutrition: { calories: 540, protein: 24, carbs: 68, fat: 20 },
    tips: ["Bake on the highest possible oven rack using a pizza stone or steel."],
    substitutions: [],
    isPublic: true,
  },
  {
    id: "ita_3",
    documentId: "ita_3",
    title: "Traditional Italian Tiramisu",
    description:
      "Decadent layered dessert of espresso-dipped Savoiardi ladyfingers, pillowy mascarpone cream, and Dutch processed cocoa powder.",
    cuisine: "italian",
    country: "Italian",
    category: "dessert",
    foodType: "vegetarian",
    prepTime: 25,
    cookTime: 0,
    servings: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
    ingredients: [
      { item: "Ladyfinger biscuits (Savoiardi)", amount: "24", category: "Grain" },
      { item: "Mascarpone cheese", amount: "450g", category: "Dairy" },
      { item: "Egg yolks & sugar", amount: "4 yolks + 1/2 cup sugar", category: "Dairy" },
      { item: "Strong brewed espresso", amount: "1.5 cups cooled", category: "Other" },
      { item: "Unsweetened cocoa powder", amount: "2 tbsp", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Make Cream",
        instruction: "Whisk egg yolks and sugar until pale; gently fold in creamy mascarpone until velvety.",
      },
      {
        step: 2,
        title: "Dip Ladyfingers",
        instruction: "Quickly dip ladyfingers into cooled espresso (1 second each side) and arrange in a dish.",
      },
      {
        step: 3,
        title: "Layer & Chill",
        instruction: "Spread half mascarpone cream, repeat with another layer of ladyfingers, top with cream, dust with cocoa, and refrigerate 6 hours.",
      },
    ],
    nutrition: { calories: 360, protein: 7, carbs: 38, fat: 21 },
    tips: ["A quick dunk prevents the ladyfingers from becoming mushy."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== MEXICAN ====================
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
    substitutions: [{ original: "Pork shoulder", alternatives: ["Chicken thighs", "Mushroom medley"] }],
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

  // ==================== CHINESE ====================
  {
    id: "chn_1",
    documentId: "chn_1",
    title: "Szechuan Kung Pao Chicken",
    description:
      "Wok-tossed chicken breast chunks with crunchy roasted peanuts, green onions, and whole dried red chilies in a bold, savory, sweet-and-tangy glaze.",
    cuisine: "chinese",
    country: "Chinese",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 12,
    servings: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800",
    ingredients: [
      { item: "Chicken breast diced", amount: "500g", category: "Protein" },
      { item: "Roasted unsalted peanuts", amount: "1/2 cup", category: "Grain" },
      { item: "Dried red chilies", amount: "8-10", category: "Spice" },
      { item: "Soy sauce & Shaoxing wine", amount: "2 tbsp each", category: "Other" },
      { item: "Chinkiang black vinegar", amount: "1.5 tbsp", category: "Other" },
      { item: "Cornstarch & garlic-ginger", amount: "1 tbsp", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Marinate & Prep Sauce",
        instruction: "Toss diced chicken with soy sauce and cornstarch. Whisk sauce ingredients together.",
      },
      {
        step: 2,
        title: "Wok Fry",
        instruction: "Sear chicken in a smoking hot wok with oil. Push aside, fry chilies and garlic until aromatic.",
      },
      {
        step: 3,
        title: "Toss with Sauce & Peanuts",
        instruction: "Pour sauce into wok; stir-fry vigorously until glossy and thickened. Toss in roasted peanuts and scallions.",
      },
    ],
    nutrition: { calories: 440, protein: 38, carbs: 16, fat: 26 },
    tips: ["Have all sauce components pre-measured; high-heat wok cooking takes under 5 minutes."],
    substitutions: [{ original: "Chicken", alternatives: ["Tofu cubes", "Prawns"] }],
    isPublic: true,
  },

  // ==================== JAPANESE ====================
  {
    id: "jpn_1",
    documentId: "jpn_1",
    title: "Rich Tonkotsu / Shoyu Ramen",
    description:
      "Springy ramen noodles swimming in a deeply flavorful umami-rich broth, crowned with tender chashu pork belly, ajitsuke tamago egg, nori, and scallions.",
    cuisine: "japanese",
    country: "Japanese",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 30,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    ingredients: [
      { item: "Fresh ramen noodles", amount: "2 portions", category: "Grain" },
      { item: "Rich dashi & chicken/pork broth", amount: "4 cups", category: "Other" },
      { item: "Chashu pork belly slices", amount: "4 slices", category: "Protein" },
      { item: "Marinated soft-boiled eggs (Ajitsuke Tamago)", amount: "2", category: "Protein" },
      { item: "Soy sauce & Mirin tare", amount: "3 tbsp", category: "Spice" },
      { item: "Nori sheets & bamboo shoots", amount: "2 sheets", category: "Vegetable" },
    ],
    instructions: [
      {
        step: 1,
        title: "Simmer Broth & Tare",
        instruction: "Combine tare seasoning with boiling rich broth in deep serving bowls.",
      },
      {
        step: 2,
        title: "Boil Noodles",
        instruction: "Boil fresh ramen noodles for 90 seconds until firm. Shake off water thoroughly.",
      },
      {
        step: 3,
        title: "Assemble Bowl",
        instruction: "Fold noodles into hot broth, drape chashu slices, halved egg, bamboo shoots, and nori sheet.",
      },
    ],
    nutrition: { calories: 580, protein: 32, carbs: 64, fat: 22 },
    tips: ["Preheat your ramen bowls with hot water so the soup stays steaming hot."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== AMERICAN ====================
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

  // ==================== MEDITERRANEAN & GREEK ====================
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

  // ==================== FRENCH ====================
  {
    id: "fra_1",
    documentId: "fra_1",
    title: "Classic Ratatouille Provencale",
    description:
      "Traditional South of France vegetable medley of thinly sliced zucchini, eggplant, bell peppers, and Roma tomatoes arranged over a rich herb-infused piperade puree.",
    cuisine: "french",
    country: "French",
    category: "dinner",
    foodType: "vegan",
    prepTime: 30,
    cookTime: 45,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?w=800",
    ingredients: [
      { item: "Eggplant", amount: "1 medium", category: "Vegetable" },
      { item: "Zucchini & yellow squash", amount: "2 each", category: "Vegetable" },
      { item: "Roma tomatoes", amount: "4", category: "Vegetable" },
      { item: "Roasted red pepper puree (piperade)", amount: "1.5 cups", category: "Vegetable" },
      { item: "Fresh thyme, rosemary, garlic", amount: "2 tbsp", category: "Spice" },
      { item: "Extra virgin olive oil", amount: "3 tbsp", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Spread Base",
        instruction: "Spread seasoned bell pepper puree evenly on the bottom of a wide baking dish.",
      },
      {
        step: 2,
        title: "Layer Slices",
        instruction: "Arrange alternating slices of zucchini, eggplant, and tomato in spiral patterns.",
      },
      {
        step: 3,
        title: "Slow Bake",
        instruction: "Drizzle with olive oil, sprinkle fresh thyme and sea salt, cover with parchment, and bake at 350°F (175°C) for 40 minutes.",
      },
    ],
    nutrition: { calories: 190, protein: 4, carbs: 24, fat: 10 },
    tips: ["Slice vegetables to identical thickness using a mandoline slicer."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== THAI ====================
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

  // ==================== SPANISH ====================
  {
    id: "spn_1",
    documentId: "spn_1",
    title: "Traditional Valencian Seafood Paella",
    description:
      "Golden saffron-tinted Bomba rice slow simmered in rich seafood broth with mussels, tender calamari, colossal tiger prawns, and a coveted caramelized socarrat crust.",
    cuisine: "spanish",
    country: "Spanish",
    category: "dinner",
    foodType: "seafood",
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800",
    ingredients: [
      { item: "Spanish Bomba rice", amount: "300g", category: "Grain" },
      { item: "Tiger prawns & mussels", amount: "400g total", category: "Protein" },
      { item: "Spanish saffron threads", amount: "1 generous pinch", category: "Spice" },
      { item: "Rich seafood stock", amount: "4 cups hot", category: "Other" },
      { item: "Smoked paprika & sofrito", amount: "1 tbsp paprika + 1/2 cup tomato-garlic base", category: "Spice" },
    ],
    instructions: [
      {
        step: 1,
        title: "Sear Seafood & Sofrito",
        instruction: "Sear prawns in wide paella pan; remove. Saute sofrito paste and smoked paprika until sweet and fragrant.",
      },
      {
        step: 2,
        title: "Toast Rice & Add Broth",
        instruction: "Add Bomba rice, coating grains in oil. Pour boiling saffron broth and spread rice evenly.",
      },
      {
        step: 3,
        title: "Simmer & Build Socarrat",
        instruction: "Simmer 15 mins undisturbed. Nestle prawns and mussels on top. Crank heat for final 2 mins to form crunchy bottom socarrat crust.",
      },
    ],
    nutrition: { calories: 510, protein: 32, carbs: 64, fat: 14 },
    tips: ["Never stir paella once broth is poured to ensure the iconic crispy socarrat develops on the bottom."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== BRITISH ====================
  {
    id: "uk_1",
    documentId: "uk_1",
    title: "Beer-Battered Fish and Chips with Tartar Sauce",
    description:
      "Crisp, airy ale-battered Atlantic cod fillets served with hand-cut double-cooked chips, tangy tartar sauce, and crushed minted garden peas.",
    cuisine: "british",
    country: "British",
    category: "dinner",
    foodType: "seafood",
    prepTime: 20,
    cookTime: 20,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1526230427044-d092040d48dc?w=800",
    ingredients: [
      { item: "Atlantic cod fillets", amount: "2 thick fillets (350g)", category: "Protein" },
      { item: "Cold British pale ale", amount: "1 cup", category: "Other" },
      { item: "Flour & baking powder", amount: "1 cup flour + 1 tsp powder", category: "Grain" },
      { item: "Russet potatoes cut into chips", amount: "3 large", category: "Vegetable" },
      { item: "Homemade tartar sauce & malt vinegar", amount: "1/4 cup", category: "Other" },
    ],
    instructions: [
      {
        step: 1,
        title: "Double Cook Chips",
        instruction: "Par-fry potato chips at 320°F (160°C) for 6 mins. Drain and cool. Flash-fry at 375°F (190°C) until golden crisp.",
      },
      {
        step: 2,
        title: "Whisk Beer Batter",
        instruction: "Whisk cold ale, flour, and pinch of salt right before frying so bubbles stay active.",
      },
      {
        step: 3,
        title: "Dip & Fry Fish",
        instruction: "Dust fish in flour, dip in beer batter, fry in hot oil 6-8 minutes until golden and crunching. Serve with malt vinegar.",
      },
    ],
    nutrition: { calories: 680, protein: 38, carbs: 65, fat: 30 },
    tips: ["Use ice-cold carbonated beer to create an ultra-light, crunchy batter."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== MIDDLE EASTERN ====================
  {
    id: "me_1",
    documentId: "me_1",
    title: "North African & Levantine Shakshuka",
    description:
      "Gently poached eggs in a simmering, smoky tomato and roasted red bell pepper sauce seasoned with cumin, smoked paprika, and topped with crumbled feta and cilantro.",
    cuisine: "middle - eastern",
    country: "Middle Eastern",
    category: "breakfast",
    foodType: "vegetarian",
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800",
    ingredients: [
      { item: "Eggs", amount: "4 large", category: "Protein" },
      { item: "Crushed tomatoes & tomato paste", amount: "1 can (400g) + 1 tbsp", category: "Vegetable" },
      { item: "Red bell pepper & onion", amount: "1 each diced", category: "Vegetable" },
      { item: "Ground cumin & smoked paprika", amount: "1 tsp each", category: "Spice" },
      { item: "Feta cheese & fresh parsley", amount: "1/4 cup crumbled", category: "Dairy" },
    ],
    instructions: [
      {
        step: 1,
        title: "Saute Aromatics",
        instruction: "Saute onions and bell peppers in olive oil until tender; add garlic, cumin, paprika, and chili flakes.",
      },
      {
        step: 2,
        title: "Simmer Tomato Sauce",
        instruction: "Pour in crushed tomatoes, season with salt, and simmer for 10 minutes until sauce thickens.",
      },
      {
        step: 3,
        title: "Poach Eggs in Wells",
        instruction: "Create 4 small indentations with a spoon, crack eggs directly into wells, cover pan, and cook 5-7 mins until whites set and yolks remain runny. Sprinkle feta.",
      },
    ],
    nutrition: { calories: 310, protein: 17, carbs: 16, fat: 20 },
    tips: ["Serve straight out of the skillet with thick crusty bread for dipping in the runny yolks."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== KOREAN ====================
  {
    id: "kor_1",
    documentId: "kor_1",
    title: "Dolsot Bibimbap with Crispy Rice",
    description:
      "Steaming hot stone pot rice bowl topped with seasoned sauteed vegetables (namul), tender marinated beef bulgogi, a golden egg yolk, and sweet-spicy gochujang sauce.",
    cuisine: "korean",
    country: "Korean",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    imageUrl: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=800",
    ingredients: [
      { item: "Short grain white rice", amount: "2 cups cooked", category: "Grain" },
      { item: "Beef bulgogi thinly sliced", amount: "200g", category: "Protein" },
      { item: "Spinach, bean sprouts, carrots", amount: "1/2 cup each seasoned", category: "Vegetable" },
      { item: "Egg yolks", amount: "2 fresh", category: "Dairy" },
      { item: "Korean Gochujang chili paste", amount: "2 tbsp", category: "Spice" },
      { item: "Toasted sesame oil", amount: "1.5 tbsp", category: "Other" },
    ],
    instructions: [
      { step: 1, title: "Season Vegetables", instruction: "Blanch spinach and bean sprouts, toss separately with sesame oil, minced garlic, and salt." },
      { step: 2, title: "Crisp Rice", instruction: "Coat stone pot with sesame oil, press cooked rice into base, cook over medium flame until a golden crackling crust forms." },
      { step: 3, title: "Arrange & Serve", instruction: "Arrange vegetables and beef in radial sections over rice. Place egg yolk in center with gochujang. Mix vigorously." },
    ],
    nutrition: { calories: 520, protein: 26, carbs: 68, fat: 16 },
    tips: ["Listen for the gentle sizzling sound to know when the crunchy bottom crust (nurungji) has formed."],
    substitutions: [{ original: "Beef", alternatives: ["Tofu", "Shiitake mushrooms"] }],
    isPublic: true,
  },
  {
    id: "kor_2",
    documentId: "kor_2",
    title: "Kimchi Jjigae (Spicy Kimchi Stew)",
    description:
      "Deeply savory, bubbling stew made with aged fermented kimchi, pork belly slices, soft silken tofu, and spicy gochugaru broth.",
    cuisine: "korean",
    country: "Korean",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 10,
    cookTime: 25,
    servings: 3,
    imageUrl: "https://images.unsplash.com/photo-1583032015879-bf65c197ef42?w=800",
    ingredients: [
      { item: "Well-fermented sour kimchi", amount: "2 cups with juice", category: "Vegetable" },
      { item: "Pork belly sliced", amount: "200g", category: "Protein" },
      { item: "Soft silken tofu", amount: "1 block sliced", category: "Protein" },
      { item: "Korean chili flakes (gochugaru)", amount: "1 tbsp", category: "Spice" },
      { item: "Anchovy or kelp broth", amount: "3 cups", category: "Other" },
    ],
    instructions: [
      { step: 1, title: "Sear Pork & Kimchi", instruction: "Saute sliced pork belly and sour kimchi in sesame oil until pork rendered." },
      { step: 2, title: "Simmer Broth", instruction: "Pour in broth and kimchi brine, stir in gochugaru and garlic. Simmer on low 15 minutes." },
      { step: 3, title: "Add Tofu", instruction: "Slide tofu into bubbling stew and simmer 5 more minutes. Serve boiling hot with scallions." },
    ],
    nutrition: { calories: 340, protein: 22, carbs: 14, fat: 22 },
    tips: ["Older, more sour kimchi makes the most deeply flavorful stew broth."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== VIETNAMESE ====================
  {
    id: "vnm_1",
    documentId: "vnm_1",
    title: "Pho Bo (Traditional Vietnamese Beef Noodle Soup)",
    description:
      "Aromatic bone broth infused with star anise, charred ginger, and cinnamon, poured over soft flat rice noodles, rare beef eye of round, fresh basil, and bean sprouts.",
    cuisine: "vietnamese",
    country: "Vietnamese",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 40,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800",
    ingredients: [
      { item: "Pho rice noodles (banh pho)", amount: "400g", category: "Grain" },
      { item: "Beef flank & sirloin thinly sliced", amount: "400g", category: "Protein" },
      { item: "Rich beef bone broth", amount: "6 cups", category: "Other" },
      { item: "Star anise, cinnamon stick, cloves", amount: "1 spice bundle", category: "Spice" },
      { item: "Fresh Thai basil, cilantro & bean sprouts", amount: "2 cups", category: "Vegetable" },
    ],
    instructions: [
      { step: 1, title: "Infuse Broth", instruction: "Char ginger and onions. Simmer with beef broth, star anise, cinnamon, and fish sauce 30 mins." },
      { step: 2, title: "Prep Bowls", instruction: "Place cooked rice noodles in deep bowls. Lay paper-thin raw beef slices across noodles." },
      { step: 3, title: "Ladle Boiling Broth", instruction: "Ladle boiling hot broth directly over raw beef to gently cook it pink. Serve with herbs." },
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
      "Crisp, airy Vietnamese baguette smeared with rich liver pate and mayo, packed with savory roasted pork, pickled daikon and carrot, fresh cucumber, cilantro, and fiery chilies.",
    cuisine: "vietnamese",
    country: "Vietnamese",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    imageUrl: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800",
    ingredients: [
      { item: "Vietnamese French baguettes", amount: "2 crispy", category: "Grain" },
      { item: "Seasoned roast pork (char siu) sliced", amount: "200g", category: "Protein" },
      { item: "French liver pate & mayo", amount: "2 tbsp each", category: "Dairy" },
      { item: "Do Chua (pickled carrot & daikon)", amount: "1/2 cup", category: "Vegetable" },
      { item: "Cucumber ribbons & fresh cilantro", amount: "1/2 cup", category: "Vegetable" },
    ],
    instructions: [
      { step: 1, title: "Crisp Baguette", instruction: "Warm baguettes in oven until crust is crackling and interior is fluffy. Slice lengthwise." },
      { step: 2, title: "Spread Condiments", instruction: "Spread creamy mayo on one side and rich liver pate on the other." },
      { step: 3, title: "Layer & Garnish", instruction: "Layer roasted pork slices, cucumber spears, pickled daikon, and fresh cilantro stems." },
    ],
    nutrition: { calories: 490, protein: 26, carbs: 56, fat: 18 },
    tips: ["A splash of Maggi seasoning sauce inside the bread adds authentic umami depth."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== TURKISH ====================
  {
    id: "tur_1",
    documentId: "tur_1",
    title: "Turkish Doner Kebab Wrap (Durum)",
    description:
      "Thinly shaved spiced roasted lamb and beef rolled inside warm lavash flatbread with sumac red onions, ripe tomatoes, and garlic yogurt sauce.",
    cuisine: "turkish",
    country: "Turkish",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    imageUrl: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800",
    ingredients: [
      { item: "Thinly shaved seasoned lamb & beef", amount: "350g", category: "Protein" },
      { item: "Lavash flatbread", amount: "2 sheets", category: "Grain" },
      { item: "Sumac & sliced red onions", amount: "1/2 cup", category: "Vegetable" },
      { item: "Garlic yogurt sauce (cacik)", amount: "1/3 cup", category: "Dairy" },
    ],
    instructions: [
      { step: 1, title: "Sear Doner Meat", instruction: "Sear shaved meat in hot skillet with butter until edges are crispy." },
      { step: 2, title: "Toss Onion Salad", instruction: "Rub sliced red onions with tart sumac powder and flat-leaf parsley." },
      { step: 3, title: "Wrap & Toast", instruction: "Layer meat, onions, and yogurt onto lavash. Roll into tight cylinder and lightly press on hot pan." },
    ],
    nutrition: { calories: 510, protein: 34, carbs: 46, fat: 21 },
    tips: ["Pressing the finished wrap on the meat pan crisps the exterior bread and infuses meat juices."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== MOROCCAN ====================
  {
    id: "mor_1",
    documentId: "mor_1",
    title: "Chicken Tagine with Preserved Lemons & Green Olives",
    description:
      "Succulent bone-in chicken braised slowly in an authentic earthenware tagine with ginger, turmeric, saffron threads, cured preserved lemons, and cracked green olives.",
    cuisine: "moroccan",
    country: "Moroccan",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 45,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800",
    ingredients: [
      { item: "Chicken thighs & drumsticks", amount: "800g", category: "Protein" },
      { item: "Preserved lemon rind slivered", amount: "1 lemon", category: "Vegetable" },
      { item: "Moroccan green olives pitted", amount: "1 cup", category: "Vegetable" },
      { item: "Ginger, turmeric, saffron & cinnamon", amount: "1.5 tbsp", category: "Spice" },
    ],
    instructions: [
      { step: 1, title: "Marinate Chicken", instruction: "Coat chicken in grated onion, garlic, spices, olive oil, and herbs." },
      { step: 2, title: "Tagine Braise", instruction: "Brown chicken in tagine base. Add 1/2 cup water, cover with conical lid, simmer 35 mins." },
      { step: 3, title: "Add Olives & Lemon", instruction: "Add preserved lemon peel and olives, simmer 10 mins until sauce is thick and golden." },
    ],
    nutrition: { calories: 480, protein: 40, carbs: 12, fat: 28 },
    tips: ["Rinse preserved lemon rinds in cold water to tame excess saltiness before adding."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== GERMAN ====================
  {
    id: "ger_1",
    documentId: "ger_1",
    title: "Crispy Bavarian Pork Schnitzel",
    description:
      "Tender, thin-pounded pork loin cutlet in a crispy, golden-rippled breadcrumb crust, served with lemon wedges and warm potato salad.",
    cuisine: "german",
    country: "German",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    ingredients: [
      { item: "Boneless pork chops pounded thin", amount: "2 (200g each)", category: "Protein" },
      { item: "Fine breadcrumbs", amount: "1.5 cups", category: "Grain" },
      { item: "Eggs beaten", amount: "2 large", category: "Protein" },
      { item: "Clarified butter for shallow frying", amount: "1 cup", category: "Dairy" },
    ],
    instructions: [
      { step: 1, title: "Pound Cutlets", instruction: "Pound pork between plastic wrap with a meat mallet until 1/4-inch thin throughout." },
      { step: 2, title: "Breading", instruction: "Dredge in flour, dip in beaten eggs, and gently coat in fine breadcrumbs without pressing down." },
      { step: 3, title: "Swirl Fry", instruction: "Shallow fry in hot clarified butter, swirling pan so fat washes over top creating a wavy crust." },
    ],
    nutrition: { calories: 560, protein: 38, carbs: 36, fat: 28 },
    tips: ["Gently coating without pressing breadcrumbs allows the crust to puff up away from the meat (soufflé effect)."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== CANADIAN ====================
  {
    id: "can_1",
    documentId: "can_1",
    title: "Classic Montreal Poutine",
    description:
      "Crispy thick-cut russet fries piled high with fresh squeaky white cheddar cheese curds, smothered in a piping-hot velvety brown pepper gravy.",
    cuisine: "canadian",
    country: "Canadian",
    category: "lunch",
    foodType: "vegetarian",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    imageUrl: "https://images.unsplash.com/photo-1586805608485-add336722759?w=800",
    ingredients: [
      { item: "Fresh Quebec-style cheese curds", amount: "250g room temp", category: "Dairy" },
      { item: "Thick-cut russet fries", amount: "500g freshly fried", category: "Vegetable" },
      { item: "Brown pepper gravy", amount: "1.5 cups steaming hot", category: "Other" },
    ],
    instructions: [
      { step: 1, title: "Fry Potatoes Extra Crisp", instruction: "Double fry thick russet potato sticks until exterior is deeply crisp." },
      { step: 2, title: "Layer Curds", instruction: "Tumble hot fries into bowl and scatter room-temperature cheese curds throughout." },
      { step: 3, title: "Pour Boiling Gravy", instruction: "Ladle boiling hot gravy over fries and curds so cheese turns luscious and stretchy." },
    ],
    nutrition: { calories: 610, protein: 22, carbs: 58, fat: 34 },
    tips: ["Never use shredded mozzarella; authentic poutine demands fresh, room-temperature cheese curds."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== JAMAICAN ====================
  {
    id: "jam_1",
    documentId: "jam_1",
    title: "Authentic Jamaican Jerk Chicken",
    description:
      "Smoky, spicy grilled chicken marinated in a fiery Jamaican blend of Scotch bonnet peppers, allspice pimento berries, fresh thyme, scallions, and brown sugar.",
    cuisine: "jamaican",
    country: "Jamaican",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    ingredients: [
      { item: "Chicken quarters bone-in", amount: "1kg", category: "Protein" },
      { item: "Scotch bonnet peppers", amount: "2 stemmed", category: "Spice" },
      { item: "Allspice berries (pimento)", amount: "1.5 tbsp ground", category: "Spice" },
      { item: "Fresh thyme & scallions", amount: "1/2 cup chopped", category: "Vegetable" },
    ],
    instructions: [
      { step: 1, title: "Blend Marinade", instruction: "Puree Scotch bonnet peppers, scallions, garlic, ginger, thyme, allspice, soy sauce, and lime juice." },
      { step: 2, title: "Marinate", instruction: "Score chicken skin, rub jerk paste into cuts, and marinate overnight in refrigerator." },
      { step: 3, title: "Grill & Smoke", instruction: "Grill over medium indirect heat for 35 minutes until skin is charred and meat reaches 165°F." },
    ],
    nutrition: { calories: 470, protein: 42, carbs: 10, fat: 28 },
    tips: ["Wear gloves when handling Scotch bonnet peppers to prevent skin irritation."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== FILIPINO ====================
  {
    id: "phl_1",
    documentId: "phl_1",
    title: "Classic Chicken Adobo",
    description:
      "Tender bone-in chicken thighs braised in a savory, tangy sauce of cane vinegar, soy sauce, whole garlic cloves, black peppercorns, and bay leaves.",
    cuisine: "filipino",
    country: "Filipino",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    ingredients: [
      { item: "Chicken thighs bone-in", amount: "800g", category: "Protein" },
      { item: "Cane vinegar & soy sauce", amount: "1/2 cup each", category: "Other" },
      { item: "Garlic cloves smashed", amount: "8 cloves", category: "Vegetable" },
      { item: "Peppercorns & bay leaves", amount: "1 tbsp + 4 leaves", category: "Spice" },
    ],
    instructions: [
      { step: 1, title: "Marinate", instruction: "Combine chicken with vinegar, soy sauce, garlic, peppercorns, and bay leaves 30 mins." },
      { step: 2, title: "Simmer", instruction: "Bring to a simmer in heavy pot, cover and cook 25 mins until chicken is tender." },
      { step: 3, title: "Glaze", instruction: "Remove lid, crank heat to reduce sauce into a rich glaze. Sear chicken lightly in sauce." },
    ],
    nutrition: { calories: 430, protein: 38, carbs: 6, fat: 26 },
    tips: ["Do not stir vinegar while it first comes to a boil to allow harsh acidity to mellow."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== IRISH ====================
  {
    id: "ire_1",
    documentId: "ire_1",
    title: "Traditional Irish Beef & Guinness Stew",
    description:
      "Tender chunks of beef chuck slow-braised in a dark, rich Guinness extra stout gravy with sweet parsnips, carrots, baby potatoes, and fresh thyme.",
    cuisine: "irish",
    country: "Irish",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 20,
    cookTime: 75,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
    ingredients: [
      { item: "Beef chuck roast cubed", amount: "800g", category: "Protein" },
      { item: "Guinness stout beer", amount: "1 bottle (330ml)", category: "Other" },
      { item: "Beef stock & tomato paste", amount: "2 cups stock + 2 tbsp paste", category: "Other" },
      { item: "Carrots, parsnips & potatoes", amount: "3 cups chunky diced", category: "Vegetable" },
    ],
    instructions: [
      { step: 1, title: "Sear Beef", instruction: "Brown seasoned beef cubes in butter and oil in a Dutch oven until deeply browned." },
      { step: 2, title: "Deglaze with Guinness", instruction: "Pour in Guinness stout, scraping up browned bits. Add beef stock, tomato paste, and herbs." },
      { step: 3, title: "Slow Simmer", instruction: "Simmer covered 50 mins. Add root vegetables and simmer 25 more mins until sauce is thick." },
    ],
    nutrition: { calories: 530, protein: 42, carbs: 36, fat: 22 },
    tips: ["A spoonful of brown sugar balances the natural bitterness of the roasted barley in Guinness stout."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== PORTUGUESE ====================
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
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    ingredients: [
      { item: "Puff pastry roll", amount: "1 sheet rolled tightly", category: "Grain" },
      { item: "Egg yolks", amount: "6 large", category: "Dairy" },
      { item: "Whole milk & heavy cream", amount: "1.5 cups + 1/2 cup", category: "Dairy" },
      { item: "Sugar syrup with cinnamon", amount: "1 cup sugar + 1/2 cup water", category: "Other" },
    ],
    instructions: [
      { step: 1, title: "Cook Custard Base", instruction: "Whisk flour and starch into warm milk, add sugar syrup and egg yolks until smooth." },
      { step: 2, title: "Press Pastry", instruction: "Cut puff pastry roll into discs, press into muffin tins with wet thumbs." },
      { step: 3, title: "Bake at 500°F", instruction: "Fill 3/4 with custard. Bake at 500°F (260°C) for 12-14 mins until tops are blistered." },
    ],
    nutrition: { calories: 220, protein: 4, carbs: 28, fat: 11 },
    tips: ["A blazing hot oven is essential to caramelize the custard top without overcooking the delicate filling."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== BRAZILIAN ====================
  {
    id: "bra_1",
    documentId: "bra_1",
    title: "Traditional Brazilian Feijoada",
    description:
      "Brazil's national treasure: a slow-simmered black bean stew with smoked pork sausage, tender ribs, and bacon, served with orange slices and farofa.",
    cuisine: "brazilian",
    country: "Brazilian",
    category: "dinner",
    foodType: "non-veg",
    prepTime: 25,
    cookTime: 90,
    servings: 6,
    imageUrl: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800",
    ingredients: [
      { item: "Black beans soaked overnight", amount: "500g", category: "Grain" },
      { item: "Smoked pork sausage (calabresa)", amount: "300g sliced", category: "Protein" },
      { item: "Pork spare ribs & bacon", amount: "400g ribs + 150g bacon", category: "Protein" },
      { item: "Garlic minced & bay leaves", amount: "6 cloves + 3 leaves", category: "Spice" },
    ],
    instructions: [
      { step: 1, title: "Brown Meats", instruction: "Render diced bacon. Brown pork ribs and sliced smoked sausage." },
      { step: 2, title: "Simmer Beans", instruction: "Add soaked black beans, water, garlic, and bay leaves. Simmer on low 1.5 hours until tender." },
      { step: 3, title: "Thicken", instruction: "Mash 1 cup of cooked beans and return to pot to naturally thicken the rich black gravy." },
    ],
    nutrition: { calories: 590, protein: 42, carbs: 48, fat: 26 },
    tips: ["Fresh orange slices served alongside Feijoada aid digestion and balance the rich smoked meats."],
    substitutions: [],
    isPublic: true,
  },

  // ==================== AUSTRALIAN ====================
  {
    id: "aus_1",
    documentId: "aus_1",
    title: "Classic Australian Meat Pie",
    description:
      "Iconic hand-held meat pie featuring a sturdy shortcrust pastry base and flaky puff pastry lid, encasing a rich, savory minced beef filling in dark onion gravy.",
    cuisine: "australian",
    country: "Australian",
    category: "lunch",
    foodType: "non-veg",
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    imageUrl: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?w=800",
    ingredients: [
      { item: "Ground lean beef (mince)", amount: "500g", category: "Protein" },
      { item: "Shortcrust pastry sheets (for base)", amount: "2 sheets", category: "Grain" },
      { item: "Puff pastry sheets (for top)", amount: "2 sheets", category: "Grain" },
      { item: "Beef stock & Worcestershire sauce", amount: "1.5 cups + 2 tbsp", category: "Other" },
    ],
    instructions: [
      { step: 1, title: "Cook Filling", instruction: "Brown minced beef and onion, stir in tomato paste, Worcestershire, and stock. Simmer until thick. Cool." },
      { step: 2, title: "Line Tins", instruction: "Line pie tins with shortcrust pastry, spoon in cooled beef filling." },
      { step: 3, title: "Top & Bake", instruction: "Crimp puff pastry lids on top, brush with egg wash, and bake at 400°F (200°C) for 25 mins." },
    ],
    nutrition: { calories: 480, protein: 28, carbs: 42, fat: 24 },
    tips: ["Always cool the meat filling before spooning onto pastry to avoid a soggy bottom crust."],
    substitutions: [],
    isPublic: true,
  },
];

module.exports = {
  ALL_DISHES,
};
