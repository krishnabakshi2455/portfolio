'use client';

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import { skillCategories } from "@/lib/data";
import SkillBadge from "../projects/SkillBadge";
import { SkillCategory } from "@/lib/types";


const About = () => {
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
                            About <span className="text-primary">Me</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            A passionate full-stack developer crafting digital experiences
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        <AnimatedSection className="lg:col-span-3">
                            <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                                Who I Am
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    I am a full-stack developer with extensive experience in building scalable web and mobile applications.
                                    My expertise includes Next.js, React, TypeScript, Node.js, Express, and MongoDB, with a strong emphasis
                                    on clean UI development and maintainable code.
                                </p>
                                <p>
                                    I&apos;m currently expanding my skills into cross-platform app development with React Native while being
                                    proficient in CI/CD pipelines and containerized deployment. My passion lies in creating high-performance,
                                    user-focused applications that solve real-world problems.
                                </p>
                                <p>
                                    When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects,
                                    and continuously learning to stay at the forefront of web development.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin size={18} className="text-primary" />
                                    <span>India</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Briefcase size={18} className="text-primary" />
                                    <span>Full Stack Developer</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2} className="lg:col-span-2">
                            <div className="bg-card rounded-2xl border border-border p-6">
                                <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <GraduationCap className="text-primary" />
                                    Education
                                </h3>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-primary pl-4">
                                        <h4 className="font-medium text-foreground">
                                            Bachelor of Computer Applications (BCA)
                                        </h4>
                                        <p className="text-sm text-muted-foreground">IGNOU</p>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                            <Calendar size={14} />
                                            <span>June 2023 - June 2026</span>
                                        </div>
                                    </div>
                                    {/* ================================================ */}
                                    <div className="border-l-2 border-primary pl-4">
                                        <h4 className="font-medium text-foreground">
                                            Full stack Web development
                                        </h4>
                                        <p className="text-sm text-muted-foreground">Dice academy</p>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                            <Calendar size={14} />
                                            <span>2023 August to 2024 August</span>
                                        </div>
                                    </div>
                                    {/* ================================================ */}
                                    <div className="border-l-2 border-primary pl-4">
                                        <h4 className="font-medium text-foreground">
                                            12th
                                        </h4>
                                        <p className="text-sm text-muted-foreground">Munirka, Sarvodaya (Co-ed) SS Senior Secondary School</p>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                            <Calendar size={14} />
                                            <span>2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="section-padding bg-secondary/30">
                <div className="container-custom">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
                            Work Experience
                        </h2>
                    </AnimatedSection>

                    <div className="max-w-3xl mx-auto">
                        <div className="relative">
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

                            {/* Experience 1 */}
                            <AnimatedSection delay={0.1}>
                                <div className="relative flex flex-col md:flex-row gap-8 mb-12">
                                    <div className="md:w-1/2 md:text-right md:pr-8">
                                        <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors">
                                            <div className="flex items-center gap-2 text-sm text-primary mb-2 md:justify-end">
                                                <Calendar size={14} />
                                                <span>June 2025 - Present</span>
                                            </div>
                                            <h3 className="text-lg font-heading font-semibold text-foreground">
                                                Full-Stack Developer
                                            </h3>
                                            <p className="text-muted-foreground text-sm mt-1">Kreative Werbung</p>
                                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-right">
                                                <li>Built responsive front-end interfaces with Next.js and TypeScript</li>
                                                <li>Deployed applications using Docker and CI/CD pipelines</li>
                                                <li>Integrated SQL and MongoDB databases</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 top-8" />
                                    <div className="md:w-1/2" />
                                </div>
                            </AnimatedSection>

                            {/* Experience 2 */}
                            <AnimatedSection delay={0.2}>
                                <div className="relative flex flex-col md:flex-row gap-8">
                                    <div className="md:w-1/2" />
                                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 top-8" />
                                    <div className="md:w-1/2 md:pl-8">
                                        <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 transition-colors">
                                            <div className="flex items-center gap-2 text-sm text-primary mb-2">
                                                <Calendar size={14} />
                                                <span>Nov 2024 - May 2025</span>
                                            </div>
                                            <h3 className="text-lg font-heading font-semibold text-foreground">
                                                Full-Stack Developer Intern
                                            </h3>
                                            <p className="text-muted-foreground text-sm mt-1">Kreative Werbung</p>
                                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                                <li>Developed full-stack applications using Next.js and TypeScript</li>
                                                <li>Built backend APIs with Node.js, Express, and Prisma</li>
                                                <li>Integrated Sanity and Directus CMS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
                            Technical Skills
                        </h2>
                    </AnimatedSection>

                    <div className="space-y-12">
                        {skillCategories.map((category: SkillCategory, categoryIndex: number) => (
                            <AnimatedSection key={category.name} delay={categoryIndex * 0.1}>
                                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                                    {category.name}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill: string, index: number) => (
                                        <SkillBadge key={skill} name={skill} index={index} />
                                    ))}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;