'use client';

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "../ui/AnimatedSection";
import { Project } from "@/lib/types";


interface ProjectDetailProps {
    project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-8 pb-16">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                        >
                            <ArrowLeft size={18} />
                            Back to Projects
                        </Link>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                                {project.title}
                            </h1>
                            <p className="text-xl text-muted-foreground mb-6">
                                {project.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg transition-all"
                                    >
                                        <ExternalLink size={18} />
                                        View Live Site
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all"
                                    >
                                        <Github size={18} />
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-2xl overflow-hidden border border-border"
                        >
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto object-cover"
                                />
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="section-padding bg-secondary/30">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <AnimatedSection>
                                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                                    About This Project
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.fullDescription}
                                </p>
                            </AnimatedSection>

                            <AnimatedSection delay={0.1}>
                                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                                    Key Features
                                </h2>
                                <ul className="space-y-3">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="mt-1 p-1 bg-primary/10 rounded-full">
                                                <Check size={14} className="text-primary" />
                                            </span>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2}>
                                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                                    Challenges & Solutions
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.challenges}
                                </p>
                            </AnimatedSection>

                            <AnimatedSection delay={0.3}>
                                <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                                    What I Learned
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.learnings}
                                </p>
                            </AnimatedSection>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <AnimatedSection delay={0.2}>
                                <div className="bg-card rounded-2xl border border-border p-6">
                                    <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                                        Tech Stack
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm font-medium text-muted-foreground mb-2">
                                                Frontend
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.frontend.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium text-muted-foreground mb-2">
                                                Backend
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.backend.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium text-muted-foreground mb-2">
                                                Tools
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.tools.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetail;