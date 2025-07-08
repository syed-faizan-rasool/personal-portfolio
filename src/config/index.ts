import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Syed Faizan — Full Stack Flutter Developer",
  author: "Syed Faizan Rasool",
  description:
      "Flutter developer based in Pakistan, specializing in cross-platform mobile and web applications with strong backend integration using PHP and MySQL. Experienced in building scalable, user-centric apps with modern UI/UX design principles.",
  lang: "en",
  siteLogo: "/sf.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/syed-faizan-rasool" },
    // { text: "LinkedIn", href:"https://github.com/syed-faizan-rasool" },
    { text: "Github", href: "https://github.com/syed-faizan-rasool" },
    // { text: "Youtube", href: "https://github.com/syed-faizan-rasool" },
    // { text: "Dribbble", href: "https://github.com/syed-faizan-rasool" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Syed Faizan",
    specialty: "Full Stack Flutter Developer",
    summary:
      "Flutter developer based in Pakistan, specializing in cross-platform mobile and web applications with strong backend integration using PHP and MySQL. Experienced in building scalable, user-centric apps with modern UI/UX design principles.",
    email: "faizanworkx@gmail.com",
  },
 experience: [
  {
    company: "Media Design Expert",
    position: "Full Stack Flutter Developer",
    startDate: "Jan 2025",
    endDate: "Present",
    summary: [
      "Optimized overall app performance and user experience by applying advanced memory management and code refinement techniques.",
      "Led a team in building and integrating scalable features using Jetpack components such as LiveData and ViewModel to ensure maintainable architecture.",
    ],
  },
  {
    company: "Solution Experts",
    position: "Full Stack Flutter Developer",
    startDate: "Jan 2024",
    endDate: "Jan 2025",
    summary: [
      "Developed and maintained cross-platform applications using Flutter, ensuring consistent performance across Android and iOS.",
      "Implemented biometric authentication and data encryption features to enhance user data security and build trust.",
    ],
  },
],

 projects: [
  {
    name: "Sparkify",
    summary: "A business-influencer collaboration app allowing idea sharing, invites, and campaign management, built using Flutter with PHP & MySQL backend and Firestore for real-time sync.",
    linkPreview: "",
    linkSource: "https://github.com/syed-faizan-rasool",
    image: "/sparkfy.png",
  },
  {
    name: "Mela",
    summary: "An influencer-brand partnership app for promoting products and managing collaborations. Built with Flutter for UI and PHP & MySQL for backend.",
    linkPreview: "/",
    linkSource: "https://github.com/syed-faizan-rasool",
    image: "/melaa.png",
  },
  {
    name: "Hugh & Bucks",
    summary: "A 3-sided app for community, customer, and vendor interaction, including sales, redemption, and QR-based transaction flow. Built using Flutter and PHP APIs.",
    linkPreview: "/",
    linkSource: "https://github.com/syed-faizan-rasool",
    image: "/hb.png",
  },
  {
    name: "Wearium",
    summary: "A footwear e-commerce app with product browsing, cart, and order tracking using Flutter and Firebase Firestore.",
    linkPreview: "/",
    linkSource: "https://github.com/syed-faizan-rasool",
    image: "/wear.png",
  },
  {
    name: "Fitness Pro",
    summary: "A gym fitness app with workout plans, exercise tutorials, and progress tracking. Built with Flutter and Firebase Firestore for real-time features.",
    linkPreview: "/",
    linkSource: "https://github.com/syed-faizan-rasool",
    image: "/fitpro.png",
  },
  {
    name: "HealthPill App",
    summary: "HealthPill is a Flutter-based pharmacy app with four user roles: customer, doctor, pharmacy, and delivery boy.It enables easy medicine ordering, inventory management, prescriptions, and doorstep delivery in one seamless system.",
    linkPreview: "/",
    linkSource: "https://github.com/syed-faizan-rasool",
    image: "/hp.png",
  },
],
  about: {
   description: `
  Hi, I’m Faizan, a Full Stack Flutter Developer with a strong focus on mobile and web app development. I specialize in building scalable, user-centric solutions across Android, iOS, and web platforms using Flutter, PHP , MySQL, and Firebase.

  I’ve worked on a range of impactful applications including influencer-brand collaboration platforms, e-commerce apps, and healthcare solutions. My strength lies in merging design with functionality — ensuring smooth user experiences, robust backend integration, and performance-driven results. Always exploring new ideas, I bring both technical expertise and product thinking to every project.
`,

    image: "/faizan.png",
  },
};

// #5755ff
