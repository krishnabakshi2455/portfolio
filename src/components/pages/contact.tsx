'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { toast } from "sonner";

interface ContactInfo {
    icon: React.ComponentType<{ size?: number }>;
    label: string;
    value: string;
    href?: string;
}

interface SocialLink {
    icon: React.ComponentType<{ size?: number }>;
    label: string;
    href: string;
    username: string;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const contactInfo: ContactInfo[] = [
    {
        icon: Mail,
        label: "Email",
        value: "krishbakshi2455@gmail.com",
        href: "mailto:krishbakshi2455@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 8743809657",
        href: "tel:+918743809657",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "India",
    },
];

const socialLinks: SocialLink[] = [
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/krishnabakshi2455",
        username: "krishnabakshi2455",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/in/krishna-bakshi/",
        username: "krishna-bakshi",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Thank you for reaching out! I'll get back to you soon.");
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            } else {
                toast.error(data.error || "Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            toast.error("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        }
    };

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
                            Get In <span className="text-primary">Touch</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Have a project in mind? Let&apos;s talk about it.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <AnimatedSection>
                                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Feel free to reach out through any of the following channels.
                                    I typically respond within 24 hours.
                                </p>
                            </AnimatedSection>

                            <div className="space-y-4">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <AnimatedSection key={item.label} delay={index * 0.1}>
                                            <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                                                <div className="p-3 bg-primary/10 rounded-full">
                                                    <Icon size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">{item.label}</p>
                                                    {item.href ? (
                                                        <a
                                                            href={item.href}
                                                            className="text-foreground font-medium hover:text-primary transition-colors"
                                                        >
                                                            {item.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-foreground font-medium">{item.value}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </AnimatedSection>
                                    );
                                })}
                            </div>

                            <AnimatedSection delay={0.3}>
                                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                                    Connect with me
                                </h3>
                                <div className="space-y-3">
                                    {socialLinks.map((link) => {
                                        const Icon = link.icon;
                                        return (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group"
                                            >
                                                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                                    <Icon size={20} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm text-muted-foreground">{link.label}</p>
                                                    <p className="text-foreground font-medium">{link.username}</p>
                                                </div>
                                                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Contact Form */}
                        <AnimatedSection delay={0.2} className="lg:col-span-3">
                            <div className="bg-card rounded-2xl border border-border p-8">
                                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                                    Send a Message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                placeholder="+91 1234567890"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                                placeholder="Project Inquiry"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                Send Message <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;