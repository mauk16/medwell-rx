export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  rx: boolean;
  blurb: string;
  description: string;
};

// One illustration per category, used for card watermarks and category tiles.
export const categoryArt: Record<string, string> = {
  "Pain Relief": "/images/med-1.webp",
  "Cold & Flu": "/images/med-4.webp",
  Vitamins: "/images/med-2.webp",
  "Skin Care": "/images/med-6.webp",
  "Baby & Child": "/images/med-5.webp",
  Prescription: "/images/med-7.webp",
};

export const categories = [
  "Pain Relief",
  "Cold & Flu",
  "Vitamins",
  "Skin Care",
  "Baby & Child",
  "Prescription",
];

export const products: Product[] = [
  {
    slug: "paracet-relief-500",
    name: "Paracet Relief 500mg",
    category: "Pain Relief",
    price: 4.99,
    rx: false,
    blurb: "Fast-acting pain & fever relief, 24 tablets.",
    description:
      "Paracet Relief 500mg tablets provide effective, fast-acting relief from headaches, muscle aches, and fever. Suitable for adults and children over 12. Take with water, up to 4 times daily.",
  },
  {
    slug: "flexijoint-gel",
    name: "FlexiJoint Gel",
    category: "Pain Relief",
    price: 8.5,
    rx: false,
    blurb: "Topical anti-inflammatory gel for joint & muscle pain.",
    description:
      "A cooling topical gel that targets joint and muscle pain directly at the source. Non-greasy formula absorbs quickly, apply 3-4 times daily to the affected area.",
  },
  {
    slug: "coldeeze-max",
    name: "ColdEeze Max Syrup",
    category: "Cold & Flu",
    price: 6.75,
    rx: false,
    blurb: "Multi-symptom cold & flu relief syrup, 100ml.",
    description:
      "Relieves cough, congestion, sore throat, and fever associated with the common cold and flu. Non-drowsy daytime formula, honey-lemon flavor.",
  },
  {
    slug: "throateaze-lozenges",
    name: "ThroatEaze Lozenges",
    category: "Cold & Flu",
    price: 3.25,
    rx: false,
    blurb: "Soothing lozenges for sore throat relief, pack of 20.",
    description:
      "Menthol and honey lozenges that soothe sore, scratchy throats and calm coughs. Sugar-free option also available.",
  },
  {
    slug: "vitaboost-c1000",
    name: "VitaBoost C1000",
    category: "Vitamins",
    price: 12.0,
    rx: false,
    blurb: "High-strength Vitamin C, 60 effervescent tablets.",
    description:
      "1000mg Vitamin C per tablet to support normal immune function and reduce tiredness. Orange flavor effervescent, dissolve in water.",
  },
  {
    slug: "dailymulti-complete",
    name: "DailyMulti Complete",
    category: "Vitamins",
    price: 14.5,
    rx: false,
    blurb: "Complete daily multivitamin & mineral formula, 90 caps.",
    description:
      "A comprehensive multivitamin covering 23 essential vitamins and minerals for everyday wellbeing. One capsule daily with food.",
  },
  {
    slug: "puraderm-moisturizer",
    name: "PuraDerm Daily Moisturizer",
    category: "Skin Care",
    price: 9.99,
    rx: false,
    blurb: "Fragrance-free daily moisturizer for sensitive skin, 200ml.",
    description:
      "Dermatologist-tested, fragrance-free moisturizer formulated for sensitive and dry skin. Non-comedogenic and suitable for daily use on face and body.",
  },
  {
    slug: "sunshield-spf50",
    name: "SunShield SPF 50",
    category: "Skin Care",
    price: 11.25,
    rx: false,
    blurb: "Broad-spectrum SPF 50 sunscreen lotion, 150ml.",
    description:
      "Water-resistant broad-spectrum SPF 50 protection against UVA and UVB rays. Lightweight, non-greasy finish suitable for daily wear.",
  },
  {
    slug: "littleones-fever-drops",
    name: "LittleOnes Fever Drops",
    category: "Baby & Child",
    price: 7.4,
    rx: false,
    blurb: "Infant fever & pain relief drops, alcohol-free, 30ml.",
    description:
      "Gentle, alcohol-free fever and pain relief drops formulated for infants 2 months and older. Dosing syringe included for accurate measurement.",
  },
  {
    slug: "babysoothe-rash-cream",
    name: "BabySoothe Rash Cream",
    category: "Baby & Child",
    price: 6.2,
    rx: false,
    blurb: "Diaper rash cream with zinc oxide, 100g.",
    description:
      "Zinc oxide barrier cream that soothes and protects irritated skin, helping to treat and prevent diaper rash.",
  },
  {
    slug: "amoxiclav-875",
    name: "Amoxiclav 875mg",
    category: "Prescription",
    price: 18.0,
    rx: true,
    blurb: "Antibiotic tablets — requires valid prescription.",
    description:
      "Amoxiclav 875mg is a prescription antibiotic used to treat a range of bacterial infections. A valid prescription from a licensed physician is required for purchase.",
  },
  {
    slug: "cardiopress-10",
    name: "CardioPress 10mg",
    category: "Prescription",
    price: 22.5,
    rx: true,
    blurb: "Blood pressure management tablets — requires valid prescription.",
    description:
      "CardioPress 10mg is used in the management of high blood pressure. Dosage must be determined by your prescribing physician. Requires a valid prescription for purchase.",
  },
];
