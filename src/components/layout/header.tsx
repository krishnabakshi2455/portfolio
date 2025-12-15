'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Routes } from "@/lib/routes";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass py-3" : "bg-transparent py-5"
            )}
        >
            <nav className="container-custom flex items-center justify-between">
                <Link href="/" className="relative z-10">
                    <motion.span
                        className="font-heading text-2xl font-bold text-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        krishna
                    </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    <Link
                        href={Routes.home}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                            pathname === Routes.home
                                ? "text-primary-foreground bg-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        href={Routes.about}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                            pathname === Routes.about
                                ? "text-primary-foreground bg-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        )}
                    >
                        About
                    </Link>
                    <Link
                        href={Routes.projects}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                            pathname === Routes.projects
                                ? "text-primary-foreground bg-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        )}
                    >
                        Projects
                    </Link>
                    {/* <Link
                        href={Routes.freelance}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                            pathname === Routes.freelance
                                ? "text-primary-foreground bg-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        )}
                    >
                        Freelance
                    </Link> */}
                    <Link
                        href={Routes.contact}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                            pathname === Routes.contact
                                ? "text-primary-foreground bg-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        )}
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative z-10 p-2 text-foreground"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 glass md:hidden"
                        >
                            <div className="container-custom py-4 flex flex-col gap-2">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0 * 0.05 }}
                                >
                                    <Link
                                        href={Routes.home}
                                        className={cn(
                                            "block px-4 py-3 rounded-lg font-medium transition-colors",
                                            pathname === Routes.home
                                                ? "bg-primary text-primary-foreground"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                        )}
                                    >
                                        Home
                                    </Link>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 }}
                                >
                                    <Link
                                        href={Routes.about}
                                        className={cn(
                                            "block px-4 py-3 rounded-lg font-medium transition-colors",
                                            pathname === Routes.about
                                                ? "bg-primary text-primary-foreground"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                        )}
                                    >
                                        About
                                    </Link>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href={Routes.projects}
                                        className={cn(
                                            "block px-4 py-3 rounded-lg font-medium transition-colors",
                                            pathname === Routes.projects
                                                ? "bg-primary text-primary-foreground"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                        )}
                                    >
                                        Projects
                                    </Link>
                                </motion.div>
                                {/* <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 }}
                                >
                                    <Link
                                        href={Routes.freelance}
                                        className={cn(
                                            "block px-4 py-3 rounded-lg font-medium transition-colors",
                                            pathname === Routes.freelance
                                                ? "bg-primary text-primary-foreground"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                        )}
                                    >
                                        Freelance
                                    </Link>
                                </motion.div> */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Link
                                        href={Routes.contact}
                                        className={cn(
                                            "block px-4 py-3 rounded-lg font-medium transition-colors",
                                            pathname === Routes.contact
                                                ? "bg-primary text-primary-foreground"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                                        )}
                                    >
                                        Contact
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Header;