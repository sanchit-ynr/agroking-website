export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  keySpecs: string[];
  useCases: string[];
  hpRange: string;
  images: string[];
  specs: Record<string, string>;
  brochure: string;
};

export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type SiteData = {
  name: string;
  shortName: string;
  url: string;
  tagline: string;
  descriptionShort: string;
  descriptionLong: string;
  metrics: Array<{ label: string; value: string }>;
  regionsServed: string[];
  capabilities: string[];
  certifications: string[];
  values: Array<{ title: string; description: string }>;
  timeline: Array<{ title: string; description: string }>;
  productCategories: ProductCategory[];
  products: Product[];
  applications: Array<{ title: string; items: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  testimonials: Array<{ name: string; role: string; quote: string }>;
  contact: { address: string; phone: string; email: string; whatsapp: string; hours: string };
  social: Array<{ label: string; url: string }>;
};

export const site: SiteData = {
  name: "Agroking Implements Industries",
  shortName: "Agroking",
  url: "https://agroking.example",
  tagline: "Export-ready farm implements engineered for modern agriculture.",
  descriptionShort:
    "Premium agricultural implements for global farms, built for durability and precision.",
  descriptionLong:
    "Agroking Implements Industries (Agroking) designs and manufactures rugged, export-ready farm implements with consistent quality, high throughput, and reliable after-sales support. Our facilities focus on precision fabrication, rigorous testing, and dependable delivery for dealers and distributors worldwide.",
  metrics: [
    { label: "Years of Manufacturing", value: "18+" },
    { label: "Export Markets", value: "26" },
    { label: "Dealer Partners", value: "180+" },
  ],
  regionsServed: [
    "North America",
    "Latin America",
    "Europe",
    "Middle East",
    "Africa",
    "Southeast Asia",
  ],
  capabilities: [
    "OEM & private labeling",
    "Custom paint & branding",
    "Bulk container dispatch",
    "Spare parts program",
    "Technical training",
    "After-sales support",
  ],
  certifications: ["ISO 9001:2015", "CE Compliance", "ROHS", "Export QA"],
  values: [
    {
      title: "Precision Manufacturing",
      description:
        "Tight tolerances, CNC fabrication, and repeatable processes that scale globally.",
    },
    {
      title: "Field-Proven Durability",
      description:
        "Heat-treated components and reinforced frames built for heavy-duty conditions.",
    },
    {
      title: "Partner-First Support",
      description:
        "Dedicated export logistics, documentation, and after-sales teams.",
    },
  ],
  timeline: [
    { title: "Inquiry", description: "Share requirements and target markets." },
    { title: "Quote", description: "Receive specs, pricing, and lead time." },
    { title: "Manufacturing", description: "Production with QA checkpoints." },
    { title: "Dispatch", description: "Secure packing and export delivery." },
    { title: "Support", description: "Warranty, spares, and service response." },
  ],
  productCategories: [
    {
      id: "soil-prep",
      name: "Soil Preparation",
      description: "Harrowing, leveling, and residue management.",
      image: "/images/placeholder-1.svg",
    },
    {
      id: "tillage",
      name: "Tillage",
      description: "Primary tillage and deep cultivation tools.",
      image: "/images/placeholder-2.svg",
    },
    {
      id: "planting",
      name: "Planting & Seeding",
      description: "Uniform seed placement and row prep.",
      image: "/images/placeholder-3.svg",
    },
    {
      id: "transport",
      name: "Transport",
      description: "Heavy duty trailers and haulage solutions.",
      image: "/images/placeholder-4.svg",
    },
  ],
  products: [
    {
      slug: "heavy-duty-disc-harrow",
      name: "Heavy-Duty Disc Harrow",
      category: "soil-prep",
      shortDescription: "Aggressive residue cut with smooth leveling.",
      description:
        "High-capacity disc harrow engineered for residue-heavy fields and export-ready performance.",
      keySpecs: ["24-36 discs", "Heat-treated boron steel", "Hydraulic offset"],
      useCases: ["Residue management", "Seedbed preparation", "Post-harvest tillage"],
      hpRange: "70 - 120 HP",
      images: [
        "/images/placeholder-1.svg",
        "/images/placeholder-2.svg",
        "/images/placeholder-3.svg",
      ],
      specs: {
        WorkingWidth: "2.6m - 3.4m",
        DiscDiameter: "610mm",
        DiscSpacing: "230mm",
        Frame: "Reinforced tubular",
        Bearings: "Sealed, maintenance-free",
      },
      brochure: "/brochure",
    },
    {
      slug: "hydraulic-reversible-plough",
      name: "Hydraulic Reversible Plough",
      category: "tillage",
      shortDescription: "Uniform inversion with rapid turnaround.",
      description:
        "Designed for compacting soils and deep inversion with minimum passes.",
      keySpecs: ["3-5 bottoms", "Hydraulic safety", "Heavy-duty landsides"],
      useCases: ["Primary tillage", "Weed burial", "Soil aeration"],
      hpRange: "90 - 160 HP",
      images: ["/images/placeholder-2.svg", "/images/placeholder-4.svg"],
      specs: {
        WorkingWidth: "1.2m - 1.8m",
        Clearance: "800mm",
        Turnover: "Fast hydraulic",
        BodyType: "Slatted moldboard",
        Weight: "950 - 1350kg",
      },
      brochure: "/brochure",
    },
    {
      slug: "laser-land-leveler",
      name: "Laser Land Leveler",
      category: "soil-prep",
      shortDescription: "Precision leveling with laser accuracy.",
      description:
        "Laser-guided leveling implement for uniform water distribution and yield optimization.",
      keySpecs: ["Laser receiver", "Hydraulic control", "Heavy duty bucket"],
      useCases: ["Irrigated farms", "Water conservation", "Yield optimization"],
      hpRange: "80 - 150 HP",
      images: ["/images/placeholder-3.svg", "/images/placeholder-1.svg"],
      specs: {
        WorkingWidth: "2.5m - 3.6m",
        Control: "Automatic laser",
        Bucket: "Reinforced AR steel",
        Hydraulic: "Dual cylinder",
        Accuracy: "±10mm",
      },
      brochure: "/brochure",
    },
    {
      slug: "seed-cum-fertilizer-drill",
      name: "Seed Cum Fertilizer Drill",
      category: "planting",
      shortDescription: "One-pass seeding with precise metering.",
      description:
        "Uniform seed placement and fertilizer delivery in a single pass.",
      keySpecs: ["Fluted roller", "Row spacing options", "Stainless hoppers"],
      useCases: ["Cereal crops", "Row crops", "Conservation farming"],
      hpRange: "55 - 100 HP",
      images: ["/images/placeholder-4.svg", "/images/placeholder-2.svg"],
      specs: {
        WorkingWidth: "2.2m - 3.0m",
        Rows: "11 - 15",
        Metering: "Adjustable fluted",
        HopperCapacity: "300L",
        Frame: "Powder coated",
      },
      brochure: "/brochure",
    },
    {
      slug: "multi-crop-planter",
      name: "Multi-Crop Planter",
      category: "planting",
      shortDescription: "Flexible planting for diverse crop sets.",
      description:
        "Multi-crop planter optimized for high precision and low seed damage.",
      keySpecs: ["Vacuum metering", "Depth control", "Quick change plates"],
      useCases: ["Vegetables", "Oilseeds", "Specialty crops"],
      hpRange: "60 - 110 HP",
      images: ["/images/placeholder-1.svg", "/images/placeholder-3.svg"],
      specs: {
        WorkingWidth: "2.0m - 2.8m",
        Rows: "6 - 8",
        Metering: "Vacuum precision",
        Transport: "Foldable",
        Weight: "780kg",
      },
      brochure: "/brochure",
    },
    {
      slug: "hydraulic-tipping-trailer",
      name: "Hydraulic Tipping Trailer",
      category: "transport",
      shortDescription: "High payload transport with safe tipping.",
      description:
        "Export-grade tipping trailer engineered for fast offload and stable transport.",
      keySpecs: ["10-14 ton capacity", "Hydraulic cylinder", "Dual axle"],
      useCases: ["Grain hauling", "Field transport", "Logistics"],
      hpRange: "70 - 140 HP",
      images: ["/images/placeholder-2.svg", "/images/placeholder-4.svg"],
      specs: {
        Capacity: "10T - 14T",
        Body: "High tensile steel",
        Axle: "Heavy-duty tandem",
        Tyres: "12.5/80-15.3",
        Brakes: "Hydraulic optional",
      },
      brochure: "/brochure",
    },
  ],
  applications: [
    {
      title: "Soil Preparation",
      items: ["Disc harrows", "Laser levelers", "Rotary tillers"],
    },
    {
      title: "Primary Tillage",
      items: ["Reversible ploughs", "Subsoilers", "Chisel ploughs"],
    },
    {
      title: "Secondary Tillage",
      items: ["Cultivators", "Rotavators", "Land planes"],
    },
    {
      title: "Planting & Seeding",
      items: ["Seed drills", "Multi-crop planters", "Precision planters"],
    },
    {
      title: "Transport & Haulage",
      items: ["Tipping trailers", "Flatbed trailers", "Grain wagons"],
    },
  ],
  faqs: [
    {
      question: "What is your typical export lead time?",
      answer:
        "Standard production lead time ranges from 30-45 days depending on configuration and volume.",
    },
    {
      question: "Do you offer OEM branding?",
      answer:
        "Yes. We provide private labeling, custom paint, and branded packaging for dealer partners.",
    },
    {
      question: "How do you ensure quality?",
      answer:
        "Each unit goes through multi-stage inspections, field testing, and export-grade packaging checks.",
    },
    {
      question: "Can I request technical documentation?",
      answer:
        "We provide detailed manuals, parts catalogs, and compliance documentation upon request.",
    },
  ],
  testimonials: [
    {
      name: "Global Agri Trading",
      role: "Dealer Partner",
      quote:
        "Agroking consistently delivers export-ready units with excellent finishing and packaging.",
    },
    {
      name: "Agro Supply Co.",
      role: "Distributor",
      quote:
        "The durability and after-sales support has been outstanding for our markets.",
    },
    {
      name: "TerraGrow Exports",
      role: "Import Partner",
      quote:
        "Reliable lead times, reliable quality, and proactive communication.",
    },
  ],
  contact: {
    address: "Old Saharanpur Road, near Saraswati Sugar Mill, Indira Market, Yamuna Nagar, Haryana 135001, India",
    phone: "+91 98962 40414",
    email: "export@agroking.example",
    whatsapp: "+91 98962 40414",
    hours: "Tue - Sun: 9:00 AM - 6:00 PM (IST)",
  },
  social: [
    { label: "LinkedIn", url: "#" },
    { label: "YouTube", url: "#" },
    { label: "Instagram", url: "#" },
  ],
};
