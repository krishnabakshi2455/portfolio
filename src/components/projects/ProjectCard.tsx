import { Routes } from "@/lib/routes";
import { ProjectCardProps } from "@/lib/types";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";



const ProjectCard = ({
    title,
    description,
    image,
    tags,
    liveUrl,
    githubUrl,
    slug,
    index,
}: ProjectCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
        >
            <div className="aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent opacity-60" />
            </div>

            <div className="relative p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm line-clamp-2">
                    {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-3">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                                aria-label="View live site"
                            >
                                <ExternalLink size={18} />
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                                aria-label="View source code"
                            >
                                <Github size={18} />
                            </a>
                        )}
                    </div>

                    <Link
                        href={Routes.projectdetails(slug)}
                        className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                    >
                        Read More <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
