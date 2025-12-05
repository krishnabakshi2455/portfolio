"use client";

import { motion } from "framer-motion";
import { Easing } from "framer-motion";

const Loader: React.FC = () => {
    const firstName = "Krishna";
    const lastName = "Bakshi";
    const customEase: Easing = [0.6, 0.01, 0.05, 0.95];

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 0.95,
                transition: { duration: 0.5, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
            <div className="relative flex flex-col items-center gap-4">
                {/* Animated background glow */}
                <motion.div
                    className="absolute -inset-20 rounded-full bg-primary/20 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Name container */}
                <div className="relative flex flex-col items-center">
                    {/* First name */}
                    <div className="flex overflow-hidden">
                        {firstName.split("").map((letter, i) => (
                            <motion.span
                                key={`first-${i}`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: i * 0.08,
                                    duration: 0.5,
                                    ease: customEase,
                                }}
                                className="font-display text-5xl md:text-7xl font-bold text-foreground"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>

                    {/* Last name */}
                    <div className="flex overflow-hidden">
                        {lastName.split("").map((letter, i) => (
                            <motion.span
                                key={`last-${i}`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: (i + firstName.length) * 0.08,
                                    duration: 0.5,
                                    ease: customEase,
                                }}
                                className="font-display text-5xl md:text-7xl font-bold text-gradient"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Loading bar */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        delay: 1,
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    className="mt-8 h-0.5 w-48 origin-left bg-linear-to-r from-transparent via-primary to-transparent"
                />

                {/* Subtle dots animation */}
                <div className="mt-4 flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="h-2 w-2 rounded-full bg-primary"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;