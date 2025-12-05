'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Routes } from "@/lib/routes";
import { allSkills, projects } from "@/lib/data";
import ProjectCard from "../projects/ProjectCard";
import SkillBadge from "../projects/SkillBadge";
import AnimatedSection from "../ui/AnimatedSection";
import TypewriterText from "../ui/TypewriterText";

const roles = ["Full Stack Developer", "Next-js Developer", "Mobile App Developer","Software Developer"];

const Homepage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[90vh] flex items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-accent/50 via-background to-background" />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-lg mb-4"
                        >
                            Hello, I&apos;m
                        </motion.p>

                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6">
                            Krishna Bakshi
                        </h1>

                        <div className="text-2xl md:text-4xl font-heading text-foreground mb-6">
                            I am a <TypewriterText words={roles} className="text-primary" />
                        </div>

                        <p className="text-lg text-muted-foreground max-w-xl mb-8">
                            I am a software developer specializing in building high-performance, user-focused web applications.
                            Skilled in React, Next.js, and TypeScript, with expertise in full-stack development.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={Routes.projects}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                            >
                                View My Work <ArrowRight size={18} />
                            </Link>
                            <a
                                href="file:///C:/Users/Lenovo/Downloads/KrishnaBakshiResume.pdf.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all duration-300"
                            >
                                <Download size={18} /> Download Resume
                            </a>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-4 mt-8"
                        >
                            <a
                                href="https://github.com/krishnabakshi2455"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github size={22} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/krishna-bakshi-b905222a7/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={22} />
                            </a>
                            <a
                                href="mailto:krishbakshi2455@gmail.com"
                                className="p-3 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail size={22} />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section-padding bg-secondary/30">
                <div className="container-custom">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
                            Skills & Technologies
                        </h2>
                        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                            Technologies I work with to bring ideas to life
                        </p>
                    </AnimatedSection>

                    <div className="flex flex-wrap justify-center gap-3">
                        {allSkills.map((skill, index) => (
                            <SkillBadge key={skill} name={skill} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection>
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                                    Featured Projects
                                </h2>
                                <p className="text-muted-foreground">
                                    Some of my recent work
                                </p>
                            </div>
                            <Link
                                href={Routes.projects}
                                className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                            >
                                View All <ArrowRight size={18} />
                            </Link>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                {...project}
                                description={project.shortDescription}
                                index={index}
                            />
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link
                            href={Routes.projects}
                            className="inline-flex items-center gap-2 text-primary font-medium"
                        >
                            View All Projects <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

          
        </>
    );
};

export default Homepage;