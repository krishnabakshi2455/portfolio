'use client';

import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Routes } from "@/lib/routes";
import { FreelanceWork, Review } from "@/lib/types";
import AnimatedSection from "../ui/AnimatedSection";
import FreelanceCard from "../freelance/FreelanceCard";
import ReviewCard from "../freelance/ReviewCard";
import ReviewForm from "../freelance/ReviewForm";
import { freelanceWorks } from "@/lib/data";
import { reviewsAtom } from "@/lib/store";





const Freelance = () => {
    const reviews = useAtomValue<Review[]>(reviewsAtom);

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
                            Freelance <span className="text-primary">Work</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Professional experience and client projects
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Work Experience */}
            <section className="section-padding">
                <div className="container-custom">
                    <AnimatedSection>
                        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                            My professional journey includes both full-time positions and freelance projects.
                            Here&apos;s a look at the companies I&apos;ve worked with and the projects I&apos;ve delivered.
                        </p>
                    </AnimatedSection>

                    <div className="space-y-8">
                        {freelanceWorks.map((work: FreelanceWork) => (
                            <FreelanceCard key={work.id} {...work} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="section-padding bg-secondary/30">
                <div className="container-custom">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
                            Client <span className="text-primary">Reviews</span>
                        </h2>
                        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                            What clients and colleagues say about working with me
                        </p>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            {reviews.map((review: Review, index: number) => (
                                <ReviewCard key={review.id} review={review} index={index} />
                            ))}
                        </div>
                        <div>
                            <ReviewForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="container-custom text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                            Interested in Working Together?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            I&apos;m available for freelance projects and full-time opportunities.
                            Let&apos;s discuss how I can help bring your ideas to life.
                        </p>
                        <Link
                            href={Routes.contact}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                        >
                            Get In Touch <ArrowRight size={18} />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
};

export default Freelance;