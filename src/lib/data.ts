import { FreelanceWork, Project, SkillCategory } from "./types";

export const freelanceWorks: FreelanceWork[] = [
    {
        id: "1",
        title: "",
        company: "",
        description: "",
        period: "",
        image: "",
        tags: [],
        highlights: [
            
        ]
    },
];
export const projects: Project[] = [
    {
        id: "1",
        slug: "gigga-chat",
        title: "Gigga-Chat",
        shortDescription: "A real-time mobile chat application with video calling and secure authentication.",
        fullDescription: "Built a comprehensive real-time mobile chat application supporting text messaging, media sharing, and secure authentication. The app features WebRTC integration for live video and audio communication, providing a seamless communication experience across devices.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        tags: ["React Native", "WebRTC", "Node.js", "JWT", "Socket.io", "MongoDB"],
        liveUrl: "https://github.com/krishnabakshi2455/gigga-chat-frontend",
        features: [
            "Real-time messaging with Socket.io",
            "Video and audio calls via WebRTC",
            "Media sharing (images, videos, documents)",
            "JWT-based secure authentication",
            "Push notifications",
            "Message read receipts and typing indicators",
            "Cross-platform support (Android/iOS)"
        ],
        techStack: {
            frontend: ["React Native", "TypeScript", "Redux Toolkit"],
            backend: ["Node.js", "Express", "Socket.io", "MongoDB"],
            tools: ["WebRTC", "JWT", "Firebase Cloud Messaging"]
        },
        challenges: "Implementing real-time video calling with WebRTC while ensuring low latency and handling network fluctuations was the biggest challenge.",
        learnings: "This project deepened my understanding of real-time communication protocols, WebRTC architecture, and mobile app performance optimization."
    },
    {
        id: "2",
        slug: "renovlange",
        title: "Renovlange.de",
        shortDescription: "A German stone flooring company website with modern design and CMS integration.",
        fullDescription: "Developed a professional website for a German-based stone flooring company. The site showcases their products and services with a clean, modern design and includes a content management system for easy updates.",
        image: "/images/projects/renovlange.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "DirectUs CMS", "SEO"],
        liveUrl: "https://renovlange.de/",
        features: [
            "Responsive multi-page design",
            "Product showcase gallery",
            "Contact form with email integration",
            "SEO optimized for German market",
            "DirectUs CMS for content management",
            "Performance optimized images"
        ],
        techStack: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
            backend: ["DirectUs CMS", "Vercel"],
            tools: ["SEO Tools", "Google Analytics"]
        },
        challenges: "Optimizing the website for German SEO while maintaining fast load times with high-quality product images required careful image optimization and strategic content structuring.",
        learnings: "I gained experience in building multilingual websites, German market SEO best practices, and integrating headless CMS solutions for non-technical content editors."
    },
    {
        id: "3",
        slug: "beyond-just-work",
        title: "Beyond Just Work",
        shortDescription: "A company website with dynamic content and modern UI components.",
        fullDescription: "Contributed to building and maintaining production features for the Beyond Just Work website, improving user experience and navigation flow. Implemented responsive UI components and integrated APIs for dynamic data rendering.",
        image: "/images/projects/beyond-just-work.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
        liveUrl: "https://beyondjustwork.com/",
        features: [
            "Modern responsive design",
            "Dynamic content rendering",
            "Smooth animations and transitions",
            "Contact form integration",
            "SEO optimization",
            "Performance optimized"
        ],
        techStack: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
            backend: ["API Integration", "Vercel"],
            tools: ["Git", "Performance Monitoring"]
        },
        challenges: "Working in a two-member team to deploy updates and fix bugs in a live production environment required careful coordination and robust testing practices.",
        learnings: "This project enhanced my skills in team collaboration, production deployment workflows, and maintaining code quality in a fast-paced development environment."
    },
    {
        id: "4",
        slug: "ds-steinteppich",
        title: "DS-Steinteppich",
        shortDescription: "A flooring-renovation service site offering seamless stone-carpet solutions for indoor & outdoor floors.",
        fullDescription: "Built a modern, SEO-optimized website to present and market professional stone-carpet renovation services for balconies, terraces, stairs, garages and more. The site shows service offerings, before/after galleries, and facilitates contact requests for renovation jobs. Focused on a clean, performant, and responsive UI to attract customers, and integrated a contact form for leads.",
        image: "/images/projects/ds-steinteppich.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "SEO", "SSR"],
        liveUrl: "https://ds-steinteppich.de/",
        features: [
            "Service showcase for indoor and outdoor flooring renovation",
            "Before/after gallery",
            "Responsive multi-page design",
            "Contact form for renovation inquiries",
            "SEO optimization for German market",
            "Performance and Core Web Vitals improvements"
        ],
        techStack: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
            backend: ["Next.js API Routes", "Nodemailer"],
            tools: ["Docker", "GitHub Actions", "SEO Tools"]
        },
        challenges: "Migrating a legacy PHP structure while modernizing the UI and ensuring zero downtime during deployment.",
        learnings: "Strengthened skills in SSR, Docker workflows, and structuring scalable Next.js projects."
    },
    {
        id: "5",
        slug: "zweibay",
        title: "Zweibay",
        shortDescription: "A responsive platform for buying, selling, and repairing electronics, targeting the German market.",
        fullDescription: "Developed a clean, responsive website aiming to facilitate electronics trading and repair services — helping users buy, sell or get repair support for devices. Designed for clarity, ease-of-use, and quick navigation to support seamless transactions and service inquiries.",
        image: "/images/projects/zweibay.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
        liveUrl: "https://zweibay-kb.vercel.app/",
        features: [
            "Responsive layout optimized for German users",
            "Service/product listing and repair service flow",
            "Clean UI focused on conversions",
            "SEO and performance optimization",
            "Contact/Inquiry forms"
        ],
        techStack: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
            backend: ["Next.js API Routes"],
            tools: ["SEO Tools", "Vercel Analytics"]
        },
        challenges: "Structuring a smooth navigation and service flow for both buying/selling and repair services.",
        learnings: "Enhanced skills in UX design for service-based marketplaces and responsive web development."
    },
    {
        id: "6",
        slug: "lyfsmile-kids",
        title: "Lyfsmile Kids",
        shortDescription: "A child therapy platform offering accessible mental-health services across India.",
        fullDescription: "Created a responsive, approachable website for child therapy services — featuring information on therapy programs, counseling support, and resources for parents seeking help for anxiety, behavioral issues, ADHD or social-media addiction in children. Emphasized a warm, trust-building UI, performance, and accessibility to reach a wide audience.",
        image: "/images/projects/lyfsmile-kids.webp",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
        liveUrl: "https://lyfsmile-kids-kb.vercel.app/",
        features: [
            "Therapy service presentation and program listings",
            "Mobile-first responsive design",
            "User-friendly navigation for parents",
            "Performance and SEO optimization",
            "Clear content structure for mental health support"
        ],
        techStack: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
            backend: ["Next.js API Routes"],
            tools: ["SEO Tools"]
        },
        challenges: "Designing a trustworthy, child- and parent-friendly UI while keeping performance high.",
        learnings: "Gained experience in emotional and accessible design for wellness platforms."
    },
    {
        id: "7",
        slug: "pcbeheben",
        title: "PC Beheben",
        shortDescription: "A service booking platform for computer hardware and software repair help.",
        fullDescription: "Developed a user-centric website that allows visitors to book expert assistance for hardware and software issues. Designed intuitive service flows, clear service descriptions, and performance-optimized pages to deliver a seamless user experience for users needing tech support.",
        image: "/images/projects/pc-beheben.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
        liveUrl: "https://pcbeheben.de/",
        features: [
            "Service listing for hardware/software repair",
            "Easy appointment booking flow",
            "Mobile-optimized layout",
            "Fast load times with optimized assets",
            "User-centered design for service seekers"
        ],
        techStack: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
            backend: ["Next.js API Routes"],
            tools: ["SEO Tools", "Vercel"]
        },
        challenges: "Designing a simple booking experience accessible to non-technical users.",
        learnings: "Learned the importance of clarity, minimalism, and trust-building in service-based websites."
    },
    {
        id: "8",
        slug: "lyfsmile",
        title: "Lyfsmile",
        shortDescription: "A wellness and therapy platform providing mental health services with a modern, accessible UX.",
        fullDescription: "Built a responsive, performance-optimized mental health and wellness website offering therapy services and wellness resources. The site features structured content layouts, clear navigation, and strong SEO to improve visibility and accessibility for users seeking professional help.",
        image: "/images/projects/lyfsmile.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
        liveUrl: "https://lyfsmile.com/",
        features: [
            "Therapy and wellness service descriptions",
            "Warm, approachable interface",
            "Responsive, fast-loading design",
            "SEO-optimized content structure",
            "Optimized images and UI components"
        ],
        techStack: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
            backend: ["Next.js API Routes"],
            tools: ["SEO Tools", "Vercel"]
        },
        challenges: "Creating a safe, trust-building design language for users seeking mental health support.",
        learnings: "Strengthened skills in emotional design, accessibility, and structured content for wellness platforms."
    }
];


export const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find((project) => project.slug === slug);
};


export const skillCategories: SkillCategory[] = [
    {
        name: "Languages",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript"]
    },
    {
        name: "Frontend",
        skills: [
            "React.js",
            "Next.js",
            "React Native",
            "Tailwind CSS",
            "Material-UI",
            "ShadCN",
            "Framer Motion",
            "Redux Toolkit",
            "React Router",
            "React Hook Form"
        ]
    },
    {
        name: "Backend",
        skills: [
            "Node.js",
            "Express.js",
            "Socket.io",
            "WebRTC",
            "JWT",
            "Prisma",
            "Mongoose"
        ]
    },
    {
        name: "Databases",
        skills: ["MongoDB", "PostgreSQL", "Firebase", "Directus"]
    },
    {
        name: "Tools & Technologies",
        skills: [
            "Docker",
            "Git",
            "GitHub",
            "GitLab",
            "Vercel",
            "Netlify",
            "Postman",
            "VS Code"
        ]
    }
];

export const allSkills = skillCategories.flatMap((category) => category.skills);


// Verified client emails - only these emails can submit reviews
export const verifiedClientEmails: string[] = [
    "john.mueller@kreativewerbung.de",
    "sarah.weber@renovlange.com",
    // Add more verified client emails here
];

export const isVerifiedClient = (email: string): boolean => {
    return verifiedClientEmails.some(
        (verifiedEmail) => verifiedEmail.toLowerCase() === email.toLowerCase().trim()
    );
};
