export type Project = {
  id: string;
  title: string;
  shortDesc: string;
  problem: string;
  methods: string;
  results: string;
  links: { github?: string; paper?: string; demo?: string };
  image: string;
};

export type Thought = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
};

export type TravelSpot = {
  id: string;
  location: string;
  date: string;
  image: string;
  story: string;
};

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Neuro-Symbolic AI Framework",
    shortDesc: "Bridging neural networks and symbolic logic reasoning.",
    problem: "Current LLMs struggle with multi-step deterministic logical verification.",
    methods: "Combined Transformer architectures with explicit symbolic solvers using a hyper-graph representation.",
    results: "Achieved 94% accuracy on complex logic benchmarks, a 15% improvement over baseline.",
    links: { github: "#", paper: "#" },
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "proj-2",
    title: "BCI Motor Cortex Decoding",
    shortDesc: "Real-time decoding of motor intentions from EEG signals.",
    problem: "Non-invasive BCI usually suffers from high noise and low bandwidth.",
    methods: "Implemented a custom CNN-LSTM model optimized for low-latency inference on edge devices.",
    results: "Reduced latency to <50ms with 89% directional classification accuracy.",
    links: { github: "#", demo: "#" },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  }
];

export const thoughtsData: Thought[] = [
  {
    id: "thought-1",
    title: "The Computational Theory of Mind: A Modern Rethink",
    date: "Oct 12, 2025",
    readTime: "8 min read",
    tags: ["Philosophy", "Neuroscience"],
    excerpt: "Exploring how modern deep learning architectures mirror or diverge from human cognitive functions, and what this implies for AGI."
  },
  {
    id: "thought-2",
    title: "Why Cyber-Brutalism is the Future of UI",
    date: "Sep 28, 2025",
    readTime: "5 min read",
    tags: ["Design", "Engineering"],
    excerpt: "A deep dive into the rejection of corporate minimalism and the embrace of chaotic, expressive, and highly constrained web design."
  }
];

export const travelData: TravelSpot[] = [
  {
    id: "loc-1",
    location: "Tokyo, Japan",
    date: "Spring 2024",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800",
    story: "Wandering through Akihabara at night feels like stepping into a cyberpunk novel. The density of information is staggering."
  },
  {
    id: "loc-2",
    location: "Reykjavik, Iceland",
    date: "Winter 2023",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800",
    story: "The vast, untouched landscapes offer a stark contrast to the highly engineered world I usually inhabit. A necessary reset."
  }
];
