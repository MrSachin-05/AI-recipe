import { Camera, BookOpen, ChefHat, Search } from "lucide-react";

export const SITE_STATS = [
  { label: "Free Scans", val: "10/mo" },
  { label: "Recipes Generated", val: "1M+" },
  { label: "Cost to Start", val: "$0" },
  { label: "App Store Rating", val: "4.9" },
];

export const FEATURES = [
  {
    title: "Scan Your Pantry",
    description:
      "Photo recognition that actually works. Know what you have instantly.",
    icon: Camera,
    limit: "10 scans/mo free",
  },
  {
    title: "AI Chef Suggestions",
    description:
      "Turn random ingredients into a gourmet meal. Zero food waste.",
    icon: ChefHat,
    limit: "5 meals/mo free",
  },
  {
    title: "Search Any Dish",
    description:
      "Find any recipe instantly. Filter by cuisine, time, or dietary needs.",
    icon: Search,
    limit: "Unlimited searches",
  },
  {
    title: "Digital Cookbook",
    description: "Save your favorites. Export as PDF. Share with family.",
    icon: BookOpen,
    limit: "3 saves/mo free",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Scan",
    desc: "Point camera at fridge. AI identifies ingredients.",
  },
  {
    step: "02",
    title: "Select",
    desc: "Choose a generated recipe based on your mood.",
  },
  {
    step: "03",
    title: "Savor",
    desc: "Follow simple steps. Eat delicious food.",
  },
];

// Helper function for category emojis
export function getCategoryEmoji(category) {
  const emojiMap = {
    Beef: "🥩",
    Chicken: "🍗",
    Dessert: "🍰",
    Lamb: "🍖",
    Miscellaneous: "🍴",
    Pasta: "🍝",
    Pork: "🥓",
    Seafood: "🦐",
    Side: "🥗",
    Starter: "🥟",
    Vegan: "🥬",
    Vegetarian: "🥕",
    Breakfast: "🍳",
    Goat: "🐐",
  };
  return emojiMap[category] || "🍽️";
}

// Comprehensive Country, Flag Logo & Cuisine Metadata Map
export const COUNTRY_METADATA = {
  American: { code: "us", flagEmoji: "🇺🇸", cuisineEmoji: "🍔", cuisine: "American", tag: "Burgers, BBQ & Soul Food" },
  British: { code: "gb", flagEmoji: "🇬🇧", cuisineEmoji: "🐟", cuisine: "British", tag: "Fish & Chips, Roasts & Pies" },
  Canadian: { code: "ca", flagEmoji: "🇨🇦", cuisineEmoji: "🍁", cuisine: "Canadian", tag: "Poutine, Maple & Comfort Food" },
  Chinese: { code: "cn", flagEmoji: "🇨🇳", cuisineEmoji: "🥢", cuisine: "Chinese", tag: "Dim Sum, Wok & Dumplings" },
  Croatian: { code: "hr", flagEmoji: "🇭🇷", cuisineEmoji: "🥩", cuisine: "Croatian", tag: "Peka, Seafood & Stews" },
  Dutch: { code: "nl", flagEmoji: "🇳🇱", cuisineEmoji: "🧀", cuisine: "Dutch", tag: "Stroopwafel, Gouda & Bitterballen" },
  Egyptian: { code: "eg", flagEmoji: "🇪🇬", cuisineEmoji: "🧆", cuisine: "Egyptian", tag: "Koshari, Falafel & Spiced Rice" },
  Filipino: { code: "ph", flagEmoji: "🇵🇭", cuisineEmoji: "🍲", cuisine: "Filipino", tag: "Adobo, Sinigang & Pancit" },
  French: { code: "fr", flagEmoji: "🇫🇷", cuisineEmoji: "🥐", cuisine: "French", tag: "Pastries, Ratatouille & Gourmet" },
  Greek: { code: "gr", flagEmoji: "🇬🇷", cuisineEmoji: "🥗", cuisine: "Greek", tag: "Souvlaki, Feta & Mediterranean" },
  Indian: { code: "in", flagEmoji: "🇮🇳", cuisineEmoji: "🍛", cuisine: "Indian", tag: "Curries, Biryani & Tandoori" },
  Irish: { code: "ie", flagEmoji: "🇮🇪", cuisineEmoji: "🥔", cuisine: "Irish", tag: "Irish Stew, Colcannon & Soda Bread" },
  Italian: { code: "it", flagEmoji: "🇮🇹", cuisineEmoji: "🍕", cuisine: "Italian", tag: "Pizza, Pasta, Risotto & Gelato" },
  Jamaican: { code: "jm", flagEmoji: "🇯🇲", cuisineEmoji: "🍗", cuisine: "Jamaican", tag: "Jerk Chicken, Rice & Peas" },
  Japanese: { code: "jp", flagEmoji: "🇯🇵", cuisineEmoji: "🍜", cuisine: "Japanese", tag: "Ramen, Sushi, Katsu & Tempura" },
  Kenyan: { code: "ke", flagEmoji: "🇰🇪", cuisineEmoji: "🥘", cuisine: "Kenyan", tag: "Ugali, Sukuma Wiki & Nyama Choma" },
  Malaysian: { code: "my", flagEmoji: "🇲🇾", cuisineEmoji: "🍜", cuisine: "Malaysian", tag: "Laksa, Nasi Lemak & Satay" },
  Mexican: { code: "mx", flagEmoji: "🇲🇽", cuisineEmoji: "🌮", cuisine: "Mexican", tag: "Tacos, Enchiladas & Salsas" },
  Moroccan: { code: "ma", flagEmoji: "🇲🇦", cuisineEmoji: "🍲", cuisine: "Moroccan", tag: "Tagine, Couscous & Pastilla" },
  Polish: { code: "pl", flagEmoji: "🇵🇱", cuisineEmoji: "🥟", cuisine: "Polish", tag: "Pierogi, Kielbasa & Bigos" },
  Portuguese: { code: "pt", flagEmoji: "🇵🇹", cuisineEmoji: "🥧", cuisine: "Portuguese", tag: "Pastel de Nata, Piri-Piri & Seafood" },
  Russian: { code: "ru", flagEmoji: "🇷🇺", cuisineEmoji: "🥣", cuisine: "Russian", tag: "Borscht, Stroganoff & Pelmeni" },
  Spanish: { code: "es", flagEmoji: "🇪🇸", cuisineEmoji: "🥘", cuisine: "Spanish", tag: "Paella, Tapas & Tortilla" },
  Thai: { code: "th", flagEmoji: "🇹🇭", cuisineEmoji: "🍲", cuisine: "Thai", tag: "Pad Thai, Green Curry & Tom Yum" },
  Tunisian: { code: "tn", flagEmoji: "🇹🇳", cuisineEmoji: "🌶️", cuisine: "Tunisian", tag: "Harissa, Brik & Spiced Couscous" },
  Turkish: { code: "tr", flagEmoji: "🇹🇷", cuisineEmoji: "🥙", cuisine: "Turkish", tag: "Kebabs, Pide, Baklava & Meze" },
  Ukrainian: { code: "ua", flagEmoji: "🇺🇦", cuisineEmoji: "🥣", cuisine: "Ukrainian", tag: "Borscht, Varenyky & Holubtsi" },
  Vietnamese: { code: "vn", flagEmoji: "🇻🇳", cuisineEmoji: "🍜", cuisine: "Vietnamese", tag: "Pho, Banh Mi & Spring Rolls" },
  Algerian: { code: "dz", flagEmoji: "🇩🇿", cuisineEmoji: "🍲", cuisine: "Algerian", tag: "Chakhchoukha, Couscous & Tajine" },
  Argentinian: { code: "ar", flagEmoji: "🇦🇷", cuisineEmoji: "🥩", cuisine: "Argentinian", tag: "Asado, Empanadas & Chimichurri" },
  Australian: { code: "au", flagEmoji: "🇦🇺", cuisineEmoji: "🥧", cuisine: "Australian", tag: "Meat Pies, Pavlova & Barramundi" },
  Norwegian: { code: "no", flagEmoji: "🇳🇴", cuisineEmoji: "🐟", cuisine: "Norwegian", tag: "Smoked Salmon, Favebrod & Seafood" },
  "Saudi Arabian": { code: "sa", flagEmoji: "🇸🇦", cuisineEmoji: "🍚", cuisine: "Saudi Arabian", tag: "Kabsa, Mandi & Fragrant Rice" },
  Slovakian: { code: "sk", flagEmoji: "🇸🇰", cuisineEmoji: "🥟", cuisine: "Slovakian", tag: "Bryndzove Halusky & Goulash" },
  Syrian: { code: "sy", flagEmoji: "🇸🇾", cuisineEmoji: "🧆", cuisine: "Syrian", tag: "Fattoush, Kibbeh & Shawarma" },
  Uruguayan: { code: "uy", flagEmoji: "🇺🇾", cuisineEmoji: "🥩", cuisine: "Uruguayan", tag: "Chivito, Asado & Dulce de Leche" },
  Venezuelan: { code: "ve", flagEmoji: "🇻🇪", cuisineEmoji: "🫓", cuisine: "Venezuelan", tag: "Arepas, Pabellon & Empanadas" },
  Korean: { code: "kr", flagEmoji: "🇰🇷", cuisineEmoji: "🍱", cuisine: "Korean", tag: "Bibimbap, Kimchi & Korean BBQ" },
  German: { code: "de", flagEmoji: "🇩🇪", cuisineEmoji: "🥨", cuisine: "German", tag: "Schnitzel, Bratwurst & Pretzels" },
  Brazilian: { code: "br", flagEmoji: "🇧🇷", cuisineEmoji: "🥩", cuisine: "Brazilian", tag: "Feijoada, Churrasco & Pao de Queijo" },
};

// Helper function for full country metadata
export function getCountryMetadata(country) {
  if (!country) return null;
  const matchKey = Object.keys(COUNTRY_METADATA).find(
    (k) => k.toLowerCase() === country.toLowerCase() ||
           k.toLowerCase().replace(/\s+/g, "-") === country.toLowerCase()
  );
  if (matchKey) {
    const meta = COUNTRY_METADATA[matchKey];
    return {
      name: matchKey,
      ...meta,
      flagUrl: `https://flagcdn.com/w80/${meta.code}.png`,
      flagSvg: `https://flagcdn.com/${meta.code}.svg`,
    };
  }
  return {
    name: country,
    code: "xx",
    flagEmoji: "🌍",
    cuisineEmoji: "🍽️",
    cuisine: country,
    tag: "World Cuisine",
    flagUrl: "",
    flagSvg: "",
  };
}

// Helper function for country logos (flag image URL, authentic flag emoji, and cuisine emblem)
export function getCountryLogo(country) {
  const meta = getCountryMetadata(country);
  return {
    flagUrl: meta?.flagUrl || "",
    flagSvg: meta?.flagSvg || "",
    flagEmoji: meta?.flagEmoji || "🌍",
    cuisineEmoji: meta?.cuisineEmoji || "🍽️",
    code: meta?.code || "xx",
    name: meta?.name || country,
  };
}

// Backward compatible helper for country flags
export function getCountryFlag(country) {
  const meta = getCountryMetadata(country);
  return meta?.flagEmoji ?? "🌍";
}

// Helper for cuisine food icon
export function getCuisineEmoji(country) {
  const meta = getCountryMetadata(country);
  return meta?.cuisineEmoji ?? "🍽️";
}