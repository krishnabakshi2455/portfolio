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
        slug: "watchtower",
        title: "Watchtower",
        shortDescription: "A multi-tenant website monitoring platform that tracks performance, uptime and SEO, and alerts teams when a site gets slower or goes down.",
        fullDescription: "Built a full-stack monitoring SaaS as two projects: a Node.js backend and a React dashboard. The backend runs Google Lighthouse audits on a schedule (three samples, median stored), pings sites for uptime, and compares each audit against a rolling 7-day baseline so alerts fire on real regressions, not noise. It detects deploys from Vercel or any CI, sends alerts to Slack, webhooks or email, and runs a Screaming Frog-style site crawler with 27 SEO checks and a health score. The platform is multi-tenant, with workspaces, owner, admin and viewer roles, invitations, plan limits, SSRF protection and read-only client report links. The API and the background worker are separate processes sharing one codebase, backed by PostgreSQL and Redis queues.",
        image: "/images/projects/watchtower.jpg",
        tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker", "SEO"],
        liveUrl: "",
        features: [
            "Scheduled Lighthouse audits with Core Web Vitals (LCP, CLS, TBT, FCP, Speed Index), performance score and page weight by resource type",
            "Regression alerts against a 7-day median baseline, opened only after two consecutive bad runs and closed on recovery",
            "Uptime monitoring with downtime alerts backdated to the first failed check",
            "Deploy detection from Vercel and CI hooks, plus inferred deploys from asset hashes, with an audit queued after each successful deploy and alerts for failed builds",
            "Alerts to Slack, webhooks and email, with one retrying job per channel and follow-ups when issues resolve",
            "Site crawler that reads robots.txt and sitemaps, records redirect chains and click depth, and reports 27 SEO issue types with a 0 to 100 health score and new-issue tracking",
            "Crawl reports scoped to sitemap pages, with an all-pages view for redirects, broken links, orphans and noindex pages",
            "Workspaces with owner, admin and viewer roles, email invitations and tenant isolation enforced at three layers",
            "Free, Pro and Agency plans with site, interval, member and daily audit limits, plus Razorpay subscription billing built and ready to switch on",
            "Email and Google sign-in, with sessions that can be revoked on all devices",
            "Read-only client report links with revocable, expiring tokens",
            "Super-admin page with usage totals, queue depth and workspace plan control",
            "SSRF protection on every server-side fetch of customer-supplied URLs",
            "Daily database backups, data retention jobs and automated tenancy and security tests"
        ],
        techStack: {
            frontend: [
                "React 19",
                "TypeScript",
                "Vite",
                "Tailwind CSS v4",
                "Framer Motion",
                "React Router",
                "SWR",
                "Recharts"
            ],
            backend: [
                "Node.js",
                "Express 5",
                "TypeScript",
                "PostgreSQL",
                "Prisma ORM",
                "Redis",
                "BullMQ",
                "ioredis",
                "Zod",
                "JWT (jsonwebtoken)",
                "bcrypt",
                "Helmet",
                "Google OAuth 2.0",
                "Razorpay Subscriptions",
                "Nodemailer (SMTP)",
                "Slack and webhook integrations",
                "Google Lighthouse",
                "Headless Chrome (chrome-launcher)",
                "Cheerio",
                "p-queue",
                "robots-parser",
                "fast-xml-parser"
            ],
            tools: [
                "Docker",
                "Docker Compose",
                "nginx",
                "pnpm workspaces (monorepo)",
                "Vitest",
                "Supertest",
                "Vercel deploy hooks",
                "pg_dump backups",
                "Mailpit"
            ]
        },
        challenges: "Keeping alerts and reports trustworthy: audits use the median of three Lighthouse runs, regression alerts need consecutive bad runs against a rolling baseline, and the crawler had to be tuned so issue lists and health scores matched what site owners care about. Running Chrome in a separate worker process also keeps browser crashes away from the API.",
        learnings: "Strengthened skills in queue-based architecture with BullMQ, idempotent job scheduling, multi-tenant access control, SSRF-safe crawling, and debugging data-accuracy problems by testing each hypothesis against real crawl data."
    },


    {
        id: "2",
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
        id: "3",
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
    },
    {
        id: "9",
        slug: "educast",
        title: "EduCast",
        shortDescription: "A multi-tenant school content broadcasting and management platform for Principals, Teachers, and Students.",

        fullDescription:
            "EduCast is a scalable educational content management platform designed for schools. The system enables Principals to create and manage schools, generate classes and sections, onboard teachers and students, assign subjects, and monitor platform-wide activity. Teachers can upload educational content, schedule learning materials, and manage class-specific resources, while students receive personalized content feeds based on their assigned classes. The platform includes school-scoped authentication, role-based access control, content approval workflows, analytics dashboards, and support for multimedia educational content.",

        image: "/images/projects/educast.png",

        tags: [
            "Node.js",
            "TypeScript",
            "Express.js",
            "PostgreSQL",
            "Prisma",
            "Redis",
            "JWT",
            "Cloudflare R2",
            "Zod",
            "Multi-Tenant SaaS"
        ],

        liveUrl: "https://educast-frontend.vercel.app/onboarding",

        features: [
            "Multi-tenant school architecture with isolated school data",
            "School onboarding with auto-generated School IDs",
            "Role-based authentication for Principals, Teachers, and Students",
            "Class and section generation system",
            "Teacher-to-class subject assignment management",
            "Educational content upload and distribution",
            "Content approval workflow for Principals",
            "Student-specific content feeds",
            "Content scheduling and rotation engine",
            "School-wide analytics dashboards",
            "JWT authentication with refresh token rotation",
            "Cloud file storage support with multimedia uploads",
            "School-scoped user and content management"
        ],

        techStack: {
            frontend: [
                "React",
                "TypeScript",
                "TanStack Query",
                "Zustand",
                "Axios",
                "Tailwind CSS"
            ],
            backend: [
                "Node.js",
                "Express.js",
                "TypeScript",
                "PostgreSQL",
                "Prisma ORM",
                "Redis"
            ],
            tools: [
                "JWT Authentication",
                "Cloudflare R2",
                "Zod Validation",
                "Winston Logger",
                "pnpm",
                "Docker"
            ]
        },

        challenges:
            "Designing a secure multi-tenant architecture where every school operates as a completely isolated tenant while maintaining efficient authentication, role-based access control, content approval workflows, and scalable content delivery across multiple user roles.",

        learnings:
            "This project strengthened my understanding of multi-tenant SaaS architecture, authentication and authorization patterns, database modeling with Prisma, scalable backend design, content management workflows, and building role-driven systems for real-world educational institutions."
    },


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
            "React Hook Form",
            "Vite",
            "SWR",
            "Recharts"
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
            "Mongoose",
            "REST APIs",
            "BullMQ",
            "Zod",
            "bcrypt",
            "Helmet",
            "Google OAuth",
            "Nodemailer",
            "Razorpay",
            "Cheerio"
        ]
    },
    {
        name: "Databases",
        skills: ["MongoDB", "PostgreSQL", "Firebase", "Directus", "Redis"]
    },
    {
        name: "Tools & Technologies",
        skills: [
            "Docker",
            "Docker Compose",
            "Git",
            "GitHub",
            "GitLab",
            "Vercel",
            "Netlify",
            "Postman",
            "VS Code",
            "nginx",
            "pnpm",
            "Google Lighthouse",
            "Vitest",
            "Supertest"
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
