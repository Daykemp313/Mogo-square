export type District = {
  id: string;
  name: string;
  icon: string;
  creators: number;
  weeklyVolume: string;
};

export type Creator = {
  id: string;
  name: string;
  district: string;
  level: "Dreamer" | "Hustler" | "Entrepreneur" | "Mogul" | "Tycoon" | "Baron" | "Titan";
  bio: string;
  walletBalance: number;
  topProducts: string[];
};

export type Deal = {
  id: string;
  actor: string;
  district: string;
  activity: string;
  amount: number;
  timestamp: string;
};

export type Listing = {
  id: string;
  title: string;
  seller: string;
  district: string;
  price: number;
  stock: number;
};

export const districts: District[] = [
  { id: "art", name: "Art, Sports & Entertainment", icon: "🎭", creators: 1320, weeklyVolume: "$2.4M" },
  { id: "fashion", name: "Fashion", icon: "👗", creators: 980, weeklyVolume: "$1.2M" },
  { id: "financial", name: "Financial", icon: "💹", creators: 640, weeklyVolume: "$3.8M" },
  { id: "technology", name: "Technology", icon: "💻", creators: 1580, weeklyVolume: "$5.1M" }
];

export const creators: Creator[] = [
  {
    id: "kendrick-lamar",
    name: "Kendrick Lamar",
    district: "Art, Sports & Entertainment",
    level: "Mogul",
    bio: "Producer and storyteller showcasing exclusive beats and collaborations.",
    walletBalance: 18450,
    topProducts: ["Studio Session Pack", "5-Track Preview", "Lyric Writing Masterclass"]
  },
  {
    id: "kim-kardashian",
    name: "Kim Kardashian",
    district: "Fashion",
    level: "Tycoon",
    bio: "Curating premium comfortwear with immersive avatar experiences.",
    walletBalance: 32990,
    topProducts: ["Denim Capsule", "SKIMS Essentials", "Limited Avatar Skin"]
  },
  {
    id: "mark-cuban",
    name: "Mark Cuban",
    district: "Financial",
    level: "Entrepreneur",
    bio: "Evaluating high-growth ventures and sales-proven founders.",
    walletBalance: 50120,
    topProducts: ["Investor AMA Pass", "Pitch Strategy Session", "Growth Analytics Bundle"]
  }
];

export const deals: Deal[] = [
  { id: "d-101", actor: "@beatstreetstudio", district: "Entertainment", activity: "Sold 120 track licenses", amount: 5400, timestamp: "2m ago" },
  { id: "d-102", actor: "@denimavenue", district: "Fashion", activity: "Launched avatar skin drop", amount: 3200, timestamp: "9m ago" },
  { id: "d-103", actor: "@dollarblvd", district: "Financial", activity: "Investor pitch accepted", amount: 10000, timestamp: "21m ago" },
  { id: "d-104", actor: "@codeyard", district: "Technology", activity: "Shipped no-code AI toolkit", amount: 7600, timestamp: "31m ago" }
];

export const marketplace: Listing[] = [
  { id: "p-101", title: "Loft Denim Pack", seller: "Kim Kardashian", district: "Fashion", price: 140, stock: 80 },
  { id: "p-102", title: "Studio Beat Bundle", seller: "Kendrick Lamar", district: "Entertainment", price: 95, stock: 120 },
  { id: "p-103", title: "Pitch Deck Audit", seller: "Mark Cuban", district: "Financial", price: 350, stock: 24 }
];
