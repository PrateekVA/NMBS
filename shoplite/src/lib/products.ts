export type Product = {
  id: number;
  slug: string;
  title: string;
  price: number;
  category: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "pixel-phones",
    title: "Pixel Phone",
    price: 45999,
    category: "Mobiles",
    description: "Clean Android experience, great camera.",
  },
  {
    id: 2,
    slug: "noise-buds",
    title: "Noise Buds",
    price: 1999,
    category: "Audio",
    description: "TWS earbuds with long battery life.",
  },
  {
    id: 3,
    slug: "logi-mx-master",
    title: "Logi MX Master",
    price: 7499,
    category: "Accessories",
    description: "Ergonomic wireless mouse for productivity.",
  },
  {
    id: 4,
    slug: "sony-wh-1000xm",
    title: "Sony WH-1000XM",
    price: 24999,
    category: "Audio",
    description: "Top-tier ANC over-ear headphones.",
  },
  {
    id: 5,
    slug: "ankr-powerbank",
    title: "Ankr PowerBank 20k",
    price: 2999,
    category: "Accessories",
    description: "20,000 mAh fast-charging power bank.",
  },
  {
    id: 6,
    slug: "kindle-basic",
    title: "Kindle Basic",
    price: 7999,
    category: "Readers",
    description: "Affordable e-reader with front light.",
  },
];
