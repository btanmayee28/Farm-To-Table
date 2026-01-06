// Mock API service - simulates API calls with local data
// In a real application, these would be actual API calls to a backend

const FARMS_DATA = [
  {
    id: 1,
    name: "Green Valley Farm",
    location: "Pedakakani, Guntur District, Andhra Pradesh",
    description: "Family-owned organic farm since 1985",
    fullDescription: "Green Valley Farm has been providing fresh, organic produce to the local community for over 35 years. Located in the fertile lands of Guntur district near the Krishna river basin, our commitment to sustainable farming practices and crop rotation ensures the healthiest soil and most nutritious vegetables.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    certifications: ["USDA Organic", "Non-GMO", "Sustainable"],
    email: "contact@greenvalleyfarm.com",
    phone: "(0863) 234-5678"
  },
  {
    id: 2,
    name: "Sunrise Dairy",
    location: "Tadepalligudem, West Godavari District, Andhra Pradesh",
    description: "Premium grass-fed dairy products",
    fullDescription: "At Sunrise Dairy, located in the lush West Godavari region, our cows graze on rich pastures year-round, producing the richest, most flavorful milk and dairy products. We believe happy cows make better dairy, and our humane farming practices reflect that commitment. Our farm is situated along the Godavari river belt, ensuring natural irrigation and fertile grazing lands.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    certifications: ["Grass-Fed", "Humane Certified", "Local"],
    email: "info@sunrisedairy.com",
    phone: "(0883) 456-7890"
  },
  {
    id: 3,
    name: "Happy Hen Farm",
    location: "Vijayawada, Krishna District, Andhra Pradesh",
    description: "Free-range eggs and poultry",
    fullDescription: "Our chickens roam freely across 50 acres of farmland in Krishna district, near the Krishna river. They enjoy pecking at bugs and fresh air daily in the natural environment. This results in eggs with deep orange yolks and exceptional flavor that cage-free alternatives simply can't match. We are committed to animal welfare and sustainable poultry farming.",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800",
    certifications: ["Free-Range", "Organic Feed", "Animal Welfare Approved"],
    email: "hello@happyhenfarm.com",
    phone: "(0866) 345-6789"
  },
  {
    id: 4,
    name: "Heritage Orchard",
    location: "Bapatla, Guntur District, Andhra Pradesh",
    description: "Heirloom fruit varieties",
    fullDescription: "We specialize in preserving rare and heirloom fruit varieties that have been almost forgotten by modern agriculture. Located in the coastal belt of Guntur district near Bapatla, our orchards benefit from the unique microclimate of the region. Each apple, pear, mango, and stone fruit tells a story of flavor and history, preserving agricultural biodiversity of Andhra Pradesh.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800",
    certifications: ["Organic", "Heirloom Varieties", "Pesticide-Free"],
    email: "orchard@heritageorchard.com",
    phone: "(0863) 567-8901"
  }
];

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 60,
    unit: "kg",
    category: "Vegetables",
    farmId: 1,
    farmName: "Green Valley Farm",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400",
    organic: true,
    stock: 50,
    harvestDate: "Today",
    fullDescription: "Vine-ripened organic tomatoes bursting with flavor. Perfect for salads, sauces, or eating fresh. Grown in nutrient-rich soil without synthetic pesticides.",
    featured: true
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    price: 180,
    unit: "250g",
    category: "Fruits",
    farmId: 4,
    farmName: "Heritage Orchard",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400",
    organic: true,
    stock: 30,
    harvestDate: "Yesterday",
    fullDescription: "Sweet, juicy strawberries picked at peak ripeness. These organic berries are grown using traditional methods for maximum flavor and nutrition.",
    featured: true
  },
  {
    id: 3,
    name: "Whole Milk",
    price: 65,
    unit: "litre",
    category: "Dairy",
    farmId: 2,
    farmName: "Sunrise Dairy",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
    organic: false,
    stock: 25,
    fullDescription: "Creamy whole milk from grass-fed cows. Non-homogenized and lightly pasteurized to preserve natural nutrients and flavor. Delivered fresh daily.",
    featured: true
  },
  {
    id: 4,
    name: "Free-Range Eggs",
    price: 90,
    unit: "dozen",
    category: "Eggs",
    farmId: 3,
    farmName: "Happy Hen Farm",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400",
    organic: true,
    stock: 40,
    fullDescription: "Farm-fresh eggs from hens that roam freely outdoors. Rich, orange yolks and superior taste. Perfect for baking, cooking, or enjoying for breakfast.",
    featured: true
  },
  {
    id: 5,
    name: "Organic Spinach",
    price: 25,
    unit: "bunch",
    category: "Vegetables",
    farmId: 1,
    farmName: "Green Valley Farm",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400",
    organic: true,
    stock: 35,
    harvestDate: "Today",
    fullDescription: "Tender organic spinach leaves, perfect for salads or cooking. Packed with iron, vitamins, and antioxidants. Harvested this morning.",
    featured: false
  },
  {
    id: 6,
    name: "Honeycrisp Apples",
    price: 180,
    unit: "kg",
    category: "Fruits",
    farmId: 4,
    farmName: "Heritage Orchard",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400",
    organic: true,
    stock: 60,
    fullDescription: "Crisp, sweet apples with a perfect balance of sweetness and tartness. Grown without pesticides in our organic orchard.",
    featured: false
  },
  {
    id: 8,
    name: "Organic Carrots",
    price: 45,
    unit: "kg",
    category: "Vegetables",
    farmId: 1,
    farmName: "Green Valley Farm",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
    organic: true,
    stock: 45,
    harvestDate: "Today",
    fullDescription: "Sweet, crunchy organic carrots freshly harvested. Great for snacking, juicing, or cooking. Grown in mineral-rich soil.",
    featured: false
  },
  {
    id: 9,
    name: "Organic Blueberries",
    price: 220,
    unit: "250g",
    category: "Fruits",
    farmId: 4,
    farmName: "Heritage Orchard",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400",
    organic: true,
    stock: 28,
    fullDescription: "Plump, sweet organic blueberries bursting with antioxidants. Perfect for smoothies, baking, or eating fresh.",
    featured: false
  },
  {
    id: 10,
    name: "Cheese",
    price: 450,
    unit: "kg",
    category: "Dairy",
    farmId: 2,
    farmName: "Sunrise Dairy",
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400",
    organic: false,
    stock: 15,
    fullDescription: "Sharp, aged cheddar cheese made from our grass-fed milk. Hand-crafted in small batches and aged for 12 months.",
    featured: true
  },
  {
    id: 11,
    name: "Organic Kale",
    price: 35,
    unit: "bunch",
    category: "Vegetables",
    farmId: 1,
    farmName: "Green Valley Farm",
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400",
    organic: true,
    stock: 30,
    harvestDate: "Today",
    fullDescription: "Nutrient-dense organic kale, perfect for salads, smoothies, or sautéing. High in vitamins K, A, and C.",
    featured: false
  },
  {
    id: 12,
    name: "Free-Range Chicken",
    price: 320,
    unit: "kg",
    category: "Meat",
    farmId: 3,
    farmName: "Happy Hen Farm",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400",
    organic: true,
    stock: 12,
    fullDescription: "Whole free-range chicken raised on organic feed with access to outdoor pasture. Superior flavor and texture.",
    featured: false
  },
  {
    id: 13,
    name: "Alphonso Mangoes",
    price: 250,
    unit: "kg",
    category: "Fruits",
    farmId: 4,
    farmName: "Heritage Orchard",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400",
    organic: true,
    stock: 35,
    harvestDate: "Today",
    fullDescription: "Premium Alphonso mangoes, known as the king of mangoes. Sweet, aromatic, and perfectly ripened. Grown in our organic orchards.",
    featured: true
  },
  {
    id: 14,
    name: "Organic Rice",
    price: 75,
    unit: "kg",
    category: "Grains",
    farmId: 1,
    farmName: "Green Valley Farm",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400",
    organic: true,
    stock: 100,
    fullDescription: "Premium organic rice grown in the Krishna delta region. Naturally grown without pesticides, perfect for daily consumption.",
    featured: true
  },
  {
    id: 15,
    name: "Fresh Potatoes",
    price: 35,
    unit: "kg",
    category: "Vegetables",
    farmId: 1,
    farmName: "Green Valley Farm",
    image: "/images/potatoes.jpg",
    organic: false,
    stock: 80,
    harvestDate: "Yesterday",
    fullDescription: "Fresh farm potatoes, perfect for curries, fries, and all your cooking needs. Sourced from local farms.",
    featured: false
  },
  {
    id: 16,
    name: "Red Onions",
    price: 40,
    unit: "kg",
    category: "Vegetables",
    farmId: 1,
    farmName: "Green Valley Farm",
    image: "/images/onions.jpg",
    organic: false,
    stock: 90,
    harvestDate: "Today",
    fullDescription: "Fresh red onions, essential for Indian cooking. Rich flavor and long shelf life.",
    featured: false
  },
  {
    id: 17,
    name: "Bananas",
    price: 50,
    unit: "dozen",
    category: "Fruits",
    farmId: 4,
    farmName: "Heritage Orchard",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400",
    organic: false,
    stock: 60,
    fullDescription: "Fresh yellow bananas, naturally ripened. Rich in potassium and perfect for a healthy snack.",
    featured: false
  },
  {
    id: 18,
    name: "Fresh Coconuts",
    price: 40,
    unit: "piece",
    category: "Fruits",
    farmId: 4,
    farmName: "Heritage Orchard",
    image: "/images/coconuts.jpg",
    organic: false,
    stock: 45,
    fullDescription: "Fresh tender coconuts with sweet water and soft flesh. Perfect for cooking and refreshing coconut water.",
    featured: false
  },
  {
    id: 19,
    name: "Fresh Yogurt",
    price: 60,
    unit: "litre",
    category: "Dairy",
    farmId: 2,
    farmName: "Sunrise Dairy",
    image: "/images/yogurt.jpg",
    organic: false,
    stock: 40,
    fullDescription: "Thick, creamy yogurt made from fresh grass-fed milk. Rich in probiotics and perfect for lassi or raita.",
    featured: true
  },
  {
    id: 21,
    name: "Fresh Coriander",
    price: 20,
    unit: "bunch",
    category: "Vegetables",
    farmId: 1,
    farmName: "Green Valley Farm",
    image: "/images/coriander.jpg",
    organic: true,
    stock: 70,
    harvestDate: "Today",
    fullDescription: "Fresh aromatic coriander leaves, essential for garnishing and adding flavor to Indian dishes.",
    featured: false
  },
  {
    id: 22,
    name: "Green Chillies",
    price: 80,
    unit: "kg",
    category: "Vegetables",
    farmId: 1,
    farmName: "Green Valley Farm",
    image: "/images/chillies.jpg",
    organic: false,
    stock: 40,
    harvestDate: "Today",
    fullDescription: "Fresh green chillies, adding that perfect spicy kick to your dishes. Locally sourced from Guntur region.",
    featured: false
  },
  {
    id: 23,
    name: "Pomegranates",
    price: 150,
    unit: "kg",
    category: "Fruits",
    farmId: 4,
    farmName: "Heritage Orchard",
    image: "/images/pomegranate.jpg",
    organic: true,
    stock: 30,
    fullDescription: "Sweet and juicy pomegranates, rich in antioxidants. Perfect for fresh juice or eating as is.",
    featured: true
  },
  {
    id: 24,
    name: "Fresh Paneer",
    price: 350,
    unit: "kg",
    category: "Dairy",
    farmId: 2,
    farmName: "Sunrise Dairy",
    image: "/images/paneer.jpg",
    organic: false,
    stock: 25,
    fullDescription: "Fresh homemade paneer (cottage cheese) from pure grass-fed milk. Soft texture, perfect for curries and snacks.",
    featured: true
  }
];

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async () => {
  await delay(500);
  return PRODUCTS_DATA;
};

export const fetchFeaturedProducts = async () => {
  await delay(500);
  return PRODUCTS_DATA.filter(p => p.featured);
};

export const fetchProductById = async (id) => {
  await delay(300);
  return PRODUCTS_DATA.find(p => p.id === id);
};

export const fetchProductsByFarm = async (farmId) => {
  await delay(400);
  return PRODUCTS_DATA.filter(p => p.farmId === farmId);
};

export const fetchFarms = async () => {
  await delay(500);
  return FARMS_DATA;
};

export const fetchFarmById = async (id) => {
  await delay(300);
  return FARMS_DATA.find(f => f.id === id);
};
