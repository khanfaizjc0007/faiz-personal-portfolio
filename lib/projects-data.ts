export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  image: string
  year: string
  category: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  gallery: string[]
}

export const projectsData: Project[] = [
  // UI/UX Design
  {
    slug: "neural-interface",
    title: "Neural Interface",
    description: "AI-powered design system that adapts to user behavior in real-time.",
    tags: ["Next.js", "OpenAI", "WebGL"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    year: "2024",
    category: "UI/UX Design",
    overview:
      "Neural Interface is an experimental AI-powered design system that dynamically adapts its UI components based on user behavior patterns. Using machine learning algorithms, the system predicts user needs and automatically adjusts layouts, color schemes, and interaction patterns in real-time.",
    challenge:
      "Traditional design systems are static and fail to accommodate diverse user preferences and behavior patterns. The challenge was to create a flexible, intelligent system that could learn from user interactions while maintaining design consistency and performance.",
    solution:
      "We developed a hybrid approach combining Next.js for the frontend framework, OpenAI's GPT models for behavioral analysis, and WebGL for smooth visual transitions. The system tracks user interactions, analyzes patterns, and implements design adjustments using a custom component library that supports dynamic theming and layout modifications.",
    results: [
      "40% increase in user engagement metrics",
      "65% reduction in bounce rate across all pages",
      "Real-time adaptation in under 200ms",
      "Accessibility score improved to 98/100",
    ],
    gallery: [
      "/abstract-neural-network-visualization-dark-theme.jpg",
      "/futuristic-data-dashboard-dark-minimal.jpg",
      "/abstract-memory-storage-visualization.jpg",
    ],
  },
  {
    slug: "quantum-dashboard",
    title: "Quantum Dashboard",
    description: "Data visualization platform for complex quantum computing metrics.",
    tags: ["React", "D3.js", "Python"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    year: "2024",
    category: "UI/UX Design",
    overview:
      "A cutting-edge data visualization platform designed specifically for quantum computing researchers. The dashboard translates complex quantum metrics into intuitive visual representations, making quantum computing data accessible to both experts and newcomers.",
    challenge:
      "Quantum computing generates multi-dimensional data that's inherently difficult to visualize. Traditional charting libraries couldn't handle the complexity and real-time nature of quantum state representations.",
    solution:
      "Built with React and D3.js, we created custom visualization components that render quantum states, entanglement patterns, and computational progress. A Python backend processes quantum data streams and feeds them to the frontend via WebSocket connections.",
    results: [
      "Successfully visualizes 1000+ qubit systems",
      "Real-time data refresh at 60fps",
      "Used by 15+ research institutions globally",
      "Reduced data interpretation time by 70%",
    ],
    gallery: [
      "/futuristic-data-dashboard-dark-minimal.jpg",
      "/abstract-neural-network-visualization-dark-theme.jpg",
      "/sound-wave-visualization-dark-theme.jpg",
    ],
  },
  {
    slug: "admin-panel",
    title: "Responsive Admin Panel",
    description: "Enterprise dashboard with adaptive layouts and dark mode support.",
    tags: ["TypeScript", "Tailwind", "Framer"],
    image: "/modern-admin-dashboard-dark-theme.jpg",
    year: "2024",
    category: "UI/UX Design",
    overview:
      "A comprehensive admin dashboard designed for enterprise applications, featuring advanced data tables, real-time analytics, and seamless dark mode support. Built with TypeScript for type safety and Framer Motion for fluid animations.",
    challenge:
      "Enterprise users needed a dashboard that could handle massive datasets while remaining responsive and intuitive. The interface had to work flawlessly across devices from mobile to ultra-wide monitors.",
    solution:
      "We implemented a modular component architecture using TypeScript and Tailwind CSS, with Framer Motion providing smooth transitions. The dashboard uses virtual scrolling for large datasets and implements progressive loading strategies.",
    results: [
      "Handles 100,000+ row datasets smoothly",
      "98% user satisfaction score",
      "Fully responsive across all devices",
      "Dark mode reduces eye strain by 45%",
    ],
    gallery: [
      "/modern-admin-dashboard-dark-theme.jpg",
      "/futuristic-data-dashboard-dark-minimal.jpg",
      "/abstract-memory-storage-visualization.jpg",
    ],
  },
  // Vibe Coding Projects
  {
    slug: "synthetic-memory",
    title: "Synthetic Memory",
    description: "Vector database interface for semantic search and knowledge graphs.",
    tags: ["TypeScript", "LangChain", "Vector DB"],
    image: "/abstract-memory-storage-visualization.jpg",
    year: "2023",
    category: "Vibe Coding Projects",
    overview:
      "Synthetic Memory is a next-generation knowledge management system that uses vector embeddings to create semantic connections between disparate pieces of information. It enables natural language queries across massive datasets.",
    challenge:
      "Traditional databases struggle with semantic relationships and contextual understanding. Users needed a way to discover connections between data points that weren't explicitly linked.",
    solution:
      "Using LangChain and vector databases, we built a system that converts all data into embeddings, enabling semantic search. The TypeScript frontend provides an intuitive interface for querying and visualizing knowledge graphs.",
    results: [
      "10x faster semantic search vs traditional methods",
      "Discovers 3x more relevant connections",
      "Supports 50+ million documents",
      "Natural language query accuracy of 94%",
    ],
    gallery: [
      "/abstract-memory-storage-visualization.jpg",
      "/abstract-neural-network-visualization-dark-theme.jpg",
      "/futuristic-data-dashboard-dark-minimal.jpg",
    ],
  },
  {
    slug: "echo-protocol",
    title: "Echo Protocol",
    description: "Real-time audio processing system with WebAssembly optimization.",
    tags: ["Rust", "WebAssembly", "Audio"],
    image: "/sound-wave-visualization-dark-theme.jpg",
    year: "2023",
    category: "Vibe Coding Projects",
    overview:
      "Echo Protocol is a high-performance audio processing engine that runs entirely in the browser using WebAssembly. It provides studio-quality audio effects with near-zero latency.",
    challenge:
      "Browser-based audio processing typically suffers from high latency and limited computational power. Professional-grade audio effects require intense CPU processing that JavaScript alone cannot provide efficiently.",
    solution:
      "We wrote the core audio processing algorithms in Rust and compiled them to WebAssembly for near-native performance. The system uses Web Audio API for I/O while processing happens in WASM modules.",
    results: [
      "Latency reduced to <5ms",
      "20x faster than pure JavaScript",
      "Supports 32+ simultaneous effects",
      "Used by 5,000+ audio creators",
    ],
    gallery: [
      "/sound-wave-visualization-dark-theme.jpg",
      "/abstract-memory-storage-visualization.jpg",
      "/retro-terminal-interface-dark-aesthetic.jpg",
    ],
  },
  {
    slug: "terminal-vibe",
    title: "Terminal Vibe",
    description: "Retro-inspired command-line interface with modern aesthetics.",
    tags: ["React", "Styled", "Animation"],
    image: "/retro-terminal-interface-dark-aesthetic.jpg",
    year: "2023",
    category: "Vibe Coding Projects",
    overview:
      "Terminal Vibe reimagines the classic command-line interface with modern design sensibilities. It combines nostalgic terminal aesthetics with smooth animations and intuitive interactions.",
    challenge:
      "Modern users expect polished interfaces, but CLI tools often feel dated. The challenge was to modernize the terminal experience while preserving the power and efficiency developers love.",
    solution:
      "Built with React and styled-components, Terminal Vibe provides a component-based terminal emulator with customizable themes, autocomplete, and command history. Smooth animations make the experience delightful without sacrificing functionality.",
    results: [
      "50,000+ monthly active users",
      "Featured in 10+ developer publications",
      "4.9/5 average user rating",
      "30% increase in CLI tool adoption",
    ],
    gallery: [
      "/retro-terminal-interface-dark-aesthetic.jpg",
      "/sound-wave-visualization-dark-theme.jpg",
      "/abstract-neural-network-visualization-dark-theme.jpg",
    ],
  },
  // Logo Design
  {
    slug: "techforge",
    title: "TechForge",
    description: "Modern tech startup logo with geometric precision and bold typography.",
    tags: ["Branding", "Identity", "Minimalism"],
    image: "/minimalist-tech-logo-geometric-shapes.jpg",
    year: "2024",
    category: "Logo Design Projects",
    overview:
      "TechForge needed a brand identity that communicated innovation, precision, and reliability. The logo combines geometric shapes with custom typography to create a memorable mark that works across all media.",
    challenge:
      "The tech startup space is saturated with similar visual identities. TechForge needed to stand out while maintaining approachability and professionalism.",
    solution:
      "We developed a distinctive logomark using intersecting geometric shapes that symbolize the forging of technology. The custom typeface balances modern sans-serif aesthetics with unique letterforms that enhance brand recognition.",
    results: [
      "93% brand recognition in target market",
      "Featured in 5 major design publications",
      "Used across 50+ marketing materials",
      "Brand value increased 40% post-rebrand",
    ],
    gallery: [
      "/minimalist-tech-logo-geometric-shapes.jpg",
      "/fitness-brand-logo-dynamic.jpg",
      "/luxury-studio-logo-celestial-theme.jpg",
    ],
  },
  {
    slug: "pulse-fitness",
    title: "Pulse Fitness",
    description: "Dynamic fitness brand identity with energy and movement.",
    tags: ["Sports", "Wellness", "Motion"],
    image: "/fitness-brand-logo-dynamic.jpg",
    year: "2024",
    category: "Logo Design Projects",
    overview:
      "Pulse Fitness required a brand identity that embodied energy, movement, and transformation. The design captures the rhythm of a heartbeat combined with upward momentum.",
    challenge:
      "Fitness brands often rely on cliché imagery. Pulse needed a fresh, energetic identity that would resonate with modern health-conscious consumers without feeling generic.",
    solution:
      "The logomark combines a stylized pulse wave with an ascending arrow, creating a symbol that represents both heart health and personal growth. Bold, athletic typography reinforces the energetic positioning.",
    results: [
      "Member enrollment up 65% post-launch",
      "Instagram engagement increased 200%",
      "Brand mentioned in 15+ fitness blogs",
      "Merchandising revenue up 85%",
    ],
    gallery: [
      "/fitness-brand-logo-dynamic.jpg",
      "/minimalist-tech-logo-geometric-shapes.jpg",
      "/luxury-studio-logo-celestial-theme.jpg",
    ],
  },
  {
    slug: "lunar-studios",
    title: "Lunar Studios",
    description: "Elegant studio logo blending cosmic elements with sophistication.",
    tags: ["Creative", "Luxury", "Celestial"],
    image: "/luxury-studio-logo-celestial-theme.jpg",
    year: "2023",
    category: "Logo Design Projects",
    overview:
      "Lunar Studios, a premium creative agency, needed a brand identity that exuded elegance and creativity. The design draws inspiration from celestial bodies and cosmic phenomena.",
    challenge:
      "The creative agency market is highly competitive. Lunar needed a sophisticated identity that would attract high-end clients while showcasing artistic sensibility.",
    solution:
      "We created a refined logomark featuring a crescent moon integrated with orbital rings, symbolizing creativity and global reach. The serif typeface adds timeless elegance while remaining contemporary.",
    results: [
      "Premium client acquisition up 120%",
      "Average project value increased 90%",
      "Featured in Awwwards and CSS Design Awards",
      "Social media following grew 300%",
    ],
    gallery: [
      "/luxury-studio-logo-celestial-theme.jpg",
      "/minimalist-tech-logo-geometric-shapes.jpg",
      "/fitness-brand-logo-dynamic.jpg",
    ],
  },
  // Graphic Design
  {
    slug: "digital-dreams",
    title: "Digital Dreams Poster",
    description: "Abstract visual exploration of AI-generated aesthetics and glitch art.",
    tags: ["Print", "Abstract", "Experimental"],
    image: "/abstract-poster-glitch-art-cyberpunk.jpg",
    year: "2024",
    category: "Graphic Design Projects",
    overview:
      "Digital Dreams is an experimental poster series exploring the intersection of AI-generated imagery and glitch aesthetics. Each piece questions the nature of digital reality and artistic authorship.",
    challenge:
      "Creating meaningful art in the age of AI generation required finding the balance between algorithmic output and human curation. The work needed to provoke thought while remaining visually striking.",
    solution:
      "We developed a hybrid process combining AI image generation, manual glitch manipulation, and traditional composition techniques. Each poster is a unique collaboration between human and machine creativity.",
    results: [
      "Exhibited in 3 international galleries",
      "Limited edition sold out in 48 hours",
      "Featured in Digital Arts Magazine",
      "1M+ social media impressions",
    ],
    gallery: [
      "/abstract-poster-glitch-art-cyberpunk.jpg",
      "/brand-guidelines-design-system-modern.jpg",
      "/brutalist-event-poster-tech-conference.jpg",
    ],
  },
  {
    slug: "brand-guidelines",
    title: "Brand Guidelines Kit",
    description: "Comprehensive visual identity system for modern startups.",
    tags: ["Branding", "System", "Guidelines"],
    image: "/brand-guidelines-design-system-modern.jpg",
    year: "2024",
    category: "Graphic Design Projects",
    overview:
      "A complete brand guidelines package designed to help startups establish consistent visual identities. The kit includes logo usage, typography, color systems, and application examples.",
    challenge:
      "Early-stage startups often lack the resources for comprehensive brand guidelines, leading to inconsistent brand applications that dilute recognition.",
    solution:
      "We created a modular, easy-to-follow guidelines system with visual examples, dos and don'ts, and ready-to-use templates. The guidelines balance comprehensive coverage with practical usability.",
    results: [
      "Used by 50+ startups globally",
      "Average brand consistency score: 4.7/5",
      "Reduced brand onboarding time by 60%",
      "Featured in Brand New blog",
    ],
    gallery: [
      "/brand-guidelines-design-system-modern.jpg",
      "/abstract-poster-glitch-art-cyberpunk.jpg",
      "/brutalist-event-poster-tech-conference.jpg",
    ],
  },
  {
    slug: "event-campaign",
    title: "Event Campaign",
    description: "Bold visual campaign for annual tech conference with brutalist aesthetics.",
    tags: ["Campaign", "Event", "Brutalism"],
    image: "/brutalist-event-poster-tech-conference.jpg",
    year: "2023",
    category: "Graphic Design Projects",
    overview:
      "A comprehensive visual campaign for TechSummit 2023, featuring brutalist design principles. The campaign included posters, social media assets, and environmental graphics.",
    challenge:
      "Tech conferences often have generic, corporate visual identities. TechSummit wanted something bold and memorable that would stand out in a crowded market.",
    solution:
      "We embraced brutalist design principles—raw typography, stark contrasts, and geometric compositions—to create an aggressive, attention-grabbing campaign that perfectly matched the conference's disruptive positioning.",
    results: [
      "Ticket sales increased 180% vs previous year",
      "Social media reach: 2.5M impressions",
      "Won Best Event Branding 2023",
      "Campaign templates reused by 20+ events",
    ],
    gallery: [
      "/brutalist-event-poster-tech-conference.jpg",
      "/abstract-poster-glitch-art-cyberpunk.jpg",
      "/brand-guidelines-design-system-modern.jpg",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter((project) => project.category === category)
}
