// /data/projectData.ts

export interface Project {
  id: number;
  title: string;
  category: string;
  stat: string;
  image: string;
  description: string;
  location: string;
  status: "Completed" | "In Progress" | "Proposed";
  area: string;
  year: string;
  features: string[];
  gallery?: string[];
}

export const projectCategories = [
  "All",
  "Buildings",
  "Hydro Power",
  "Bridges",
  "Town Planning",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Saif Mall & Residency",
    category: "Buildings",
    stat: "18 Stories",
    image: "/expertise-images/saifMall.PNG",
    description:
      "A landmark 18-story commercial and residential complex in Peshawar, featuring extensive retail space and luxury apartments.",
    location: "Peshawar, Pakistan",
    status: "In Progress",
    area: "525,000 sq ft",
    year: "2019-20",
    features: [
      "18 Stories",
      "Commercial & Residential",
      "Luxury Apartments",
      "Retail Mall",
      "Design & Top Supervision",
    ],
    gallery: [],
  },
  {
    id: 2,
    title: "AFI Tower, Peshawar",
    category: "Buildings",
    stat: "18 Stories",
    image: "/expertise-images/AfiTower.PNG",
    description:
      "An iconic 18-story commercial and residential tower with a unique architectural design, one of the major high-rises in Peshawar.",
    location: "Peshawar, Pakistan",
    status: "In Progress",
    area: "650,000 sq ft",
    year: "2021",
    features: [
      "18 Stories",
      "Commercial & Residential",
      "Modern Architectural Design",
      "Iconic City Landmark",
    ],
    gallery: [],
  },
  {
    id: 3,
    title: "Diamond Mall, Peshawar",
    category: "Buildings",
    stat: "19 Stories",
    image: "/DiamondMall.PNG",
    description:
      "A 19-story high-rise building featuring 3 basements and multiple commercial floors, located on University Road, Peshawar.",
    location: "Peshawar, Pakistan",
    status: "In Progress",
    area: "449,537 sq ft",
    year: "2019-20",
    features: [
      "19 Stories",
      "Commercial Mall",
      "3 Basement Floors",
      "Design & Top Supervision",
    ],
    gallery: [],
  },
  {
    id: 4,
    title: "Capital Grand Heights",
    category: "Buildings",
    stat: "17 Stories",
    image: "/CapitalHeights.PNG",
    description:
      "A major 17-story residential and commercial complex in Islamabad, consisting of 3 towers.",
    location: "Islamabad, Pakistan",
    status: "In Progress",
    area: "600,000 sq ft",
    year: "2019-20",
    features: [
      "17 Stories",
      "3 Towers",
      "Commercial & Residential",
      "Design & Top Supervision",
    ],
    gallery: [],
  },
  {
    id: 5,
    title: "Burj Rabbani, Peshawar",
    category: "Buildings",
    stat: "20 Stories",
    image: "/expertise-images/burj-rabbani.jpg",
    description:
      "A 20-story commercial and residential complex with design and top supervision by Pyramids.",
    location: "Peshawar, Pakistan",
    status: "In Progress",
    area: "650,000 sq ft",
    year: "2020",
    features: [
      "20 Stories",
      "Commercial & Residential",
      "Design & Supervision",
    ],
    gallery: [],
  },
  {
    id: 6,
    title: "La Vita, Malam Jabba",
    category: "Buildings",
    stat: "G+7 Hotel",
    image: "/expertise-images/MalamJabbaLavita.PNG",
    description:
      "A G+7 hotel apartment project consisting of 3 towers, managed and designed by Pyramids.",
    location: "Malam Jabba, Swat",
    status: "In Progress",
    area: "320,000 sq ft",
    year: "2021",
    features: [
      "G+7 Stories",
      "3 Towers",
      "Hotel Apartments",
      "Design & Supervision",
      "Construction Management",
    ],
    gallery: [],
  },
  {
    id: 7,
    title: "Saif Defence Mall",
    category: "Buildings",
    stat: "Proposal",
    image: "/expertise-images/SaifDefence.png",
    description:
      "A proposed futuristic mall for DHA Peshawar, designed by Pyramids.",
    location: "DHA Peshawar",
    status: "Proposed",
    area: "N/A",
    year: "N/A",
    features: ["Proposed Design", "Futuristic Architecture", "DHA Peshawar"],
    gallery: [],
  },
  {
    id: 8,
    title: "Town Heights",
    category: "Buildings",
    stat: "Commercial Complex",
    image: "/expertise-images/TownHeights.PNG",
    description:
      "Modern commercial complex featuring contemporary architectural design and premium business facilities.",
    location: "Peshawar, Pakistan",
    status: "Completed",
    area: "280,000 sq ft",
    year: "2022",
    features: [
      "Commercial Spaces",
      "Modern Architecture",
      "Premium Business Facilities",
      "Strategic Location",
    ],
    gallery: [],
  },
];
