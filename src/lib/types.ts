export interface FreelanceWork {
    id: string;
    title: string;
    company: string;
    description: string;
    period: string;
    image: string;
    liveUrl?: string;
    tags: string[];
    highlights: string[];
}
export interface Review {
    id: string;
    name: string;
    company: string;
    role: string;
    rating: number;
    comment: string;
    createdAt: Date;
}
export interface Project {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    features: string[];
    techStack: {
        frontend: string[];
        backend: string[];
        tools: string[];
    };
    challenges: string;
    learnings: string;
}


export interface SkillCategory {
    name: string;
    skills: string[];
}
export interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    slug: string;
    index: number;
}