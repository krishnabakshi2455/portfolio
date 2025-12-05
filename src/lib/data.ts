import { FreelanceWork, Project, SkillCategory } from "./types";

export const freelanceWorks: FreelanceWork[] = [
    {
        id: "1",
        title: "Full-Stack Developer",
        company: "Kreative Werbung",
        description: "Working on full-stack application development, contributing to improved user experience and reliable feature delivery. Building responsive interfaces with Next.js and TypeScript while managing deployments with Docker and CI/CD pipelines.",
        period: "June 2025 - Present",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        tags: ["Next.js", "TypeScript", "Docker", "CI/CD", "PostgreSQL", "MongoDB"],
        highlights: [
            "Built responsive front-end interfaces with Next.js and TypeScript",
            "Deployed applications using Docker, Portainer, and Woodpecker CI",
            "Integrated SQL and MongoDB databases for efficient data management",
            "Collaborated with cross-functional teams for feature delivery"
        ]
    },
    {
        id: "2",
        title: "Full-Stack Developer Intern",
        company: "Kreative Werbung",
        description: "Developed full-stack applications and built backend APIs with Node.js, Express, and Prisma. Utilized headless CMS solutions to enable non-technical team members to manage content efficiently.",
        period: "November 2024 - May 2025",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
        tags: ["Next.js", "Node.js", "Express", "Prisma", "Sanity", "Directus"],
        highlights: [
            "Developed full-stack applications using Next.js and TypeScript",
            "Built backend APIs with Node.js, Express, and Prisma",
            "Integrated Sanity and Directus CMS for content management",
            "Fixed bugs and deployed updates in production environment"
        ]
    },
    {
        id: "3",
        title: "Renovlange Website",
        company: "Freelance Project",
        description: "Designed and developed a complete website for a German stone flooring company. Implemented SEO best practices and integrated a content management system for easy updates.",
        period: "2024",
        image: "https://cdn.sanity.io/images/6n5978hs/production/f637b8b2eac96fbb5e4667086e25be1648d931d2-1919x866.png",
        liveUrl: "https://renovlange.de/",
        tags: ["Next.js", "Sanity CMS", "SEO", "Tailwind CSS"],
        highlights: [
            "Complete website design and development",
            "German market SEO optimization",
            "Sanity CMS integration for content management",
            "Responsive design for all devices"
        ]
    },
    {
        id: "4",
        title: "Beyond Just Work Website",
        company: "Freelance Project",
        description: "Contributed to building production features for a company website, implementing responsive UI components and API integrations for dynamic content rendering.",
        period: "2024",
        image: "https://cdn.sanity.io/images/6n5978hs/production/3523fcafda863f2f8e9ddfa51aa6ab48c3a46907-1918x864.png",
        liveUrl: "https://beyondjustwork.com/",
        tags: ["Next.js", "TypeScript", "API Integration", "Tailwind CSS"],
        highlights: [
            "Built responsive UI components",
            "Integrated APIs for dynamic content",
            "Deployed updates in production environment",
            "Enhanced user experience and navigation"
        ]
    }
];
export const projects: Project[] = [
    {
        id: "1",
        slug: "gigga-chat",
        title: "Gigga-Chat",
        shortDescription: "A real-time mobile chat application with video calling and secure authentication.",
        fullDescription: "Built a comprehensive real-time mobile chat application supporting text messaging, media sharing, and secure authentication. The app features WebRTC integration for live video and audio communication, providing a seamless communication experience across devices.",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop",
        tags: ["React Native", "WebRTC", "Node.js", "JWT", "Socket.io", "MongoDB"],
        githubUrl: "https://github.com/krishnabakshi2455",
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
        challenges: "Implementing real-time video calling with WebRTC while ensuring low latency and handling network fluctuations was the biggest challenge. I had to optimize the signaling server and implement robust error handling for call disconnections.",
        learnings: "This project deepened my understanding of real-time communication protocols, WebRTC architecture, and mobile app performance optimization. I learned how to handle complex state management in chat applications and implement secure authentication flows."
    },
    {
        id: "2",
        slug: "renovlange",
        title: "Renovlange.de",
        shortDescription: "A German stone flooring company website with modern design and CMS integration.",
        fullDescription: "Developed a professional website for a German-based stone flooring company. The site showcases their products and services with a clean, modern design and includes a content management system for easy updates.",
        image: "https://cdn.sanity.io/images/6n5978hs/production/f637b8b2eac96fbb5e4667086e25be1648d931d2-1919x866.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "SEO"],
        liveUrl: "https://renovlange.de/",
        features: [
            "Responsive multi-page design",
            "Product showcase gallery",
            "Contact form with email integration",
            "SEO optimized for German market",
            "Sanity CMS for content management",
            "Performance optimized images"
        ],
        techStack: {
            frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
            backend: ["Sanity CMS", "Vercel"],
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
        image: "https://cdn.sanity.io/images/6n5978hs/production/3523fcafda863f2f8e9ddfa51aa6ab48c3a46907-1918x864.png",
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
        skills: ["MongoDB", "PostgreSQL", "Firebase", "Sanity", "Directus"]
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
            "AWS",
            "Kubernetes",
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
