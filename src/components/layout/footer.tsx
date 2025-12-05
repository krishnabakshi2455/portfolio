'use client';

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { Routes } from "@/lib/routes";
import AnimatedSection from "../ui/AnimatedSection";

interface SocialLink {
    icon: React.ComponentType<{ size?: number }>;
    href: string;
    label: string;
}

const socialLinks: SocialLink[] = [
    { icon: Github, href: "https://github.com/krishnabakshi2455", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/krishna-bakshi/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:krishbakshi2455@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+918743809657", label: "Phone" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* CTA Section */}
            <section className="section-padding bg-primary text-primary-foreground">
                <div className="container-custom text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <Link
                            href={Routes.contact}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-full font-medium hover:gap-3 transition-all duration-300"
                        >
                            Get In Touch <ArrowRight size={18} />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border bg-secondary/30">
                <div className="container-custom py-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <Link href={Routes.home} className="font-heading text-xl font-bold text-primary">
                                krishna
                            </Link>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Full Stack Developer
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                        aria-label={link.label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-border text-center">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Krishna Bakshi. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;