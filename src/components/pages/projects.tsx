'use client';

import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { projects } from "@/lib/data";
import ProjectCard from "../projects/ProjectCard";
import { Project } from "@/lib/types";
const Projects = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="section-padding bg-linear-to-br from-accent/50 via-background to-background">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                            My <span className="text-primary">Projects</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            A showcase of my work, from concept to deployment
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection>
                        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                            Each project represents a unique challenge and learning opportunity.
                            Click on any project to learn more about the development process,
                            technologies used, and the problems solved.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project: Project, index: number) => (
                            <ProjectCard
                                key={project.id}
                                {...project}
                                description={project.shortDescription}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects