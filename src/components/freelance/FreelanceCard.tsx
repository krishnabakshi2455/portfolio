import { FreelanceWork } from "@/lib/types";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Building2 } from "lucide-react";



const FreelanceCard = ({
    title,
    company,
    description,
    period,
    image,
    liveUrl,
    tags,
}: FreelanceWork) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2 * 0.15, duration: 0.5 }}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
        >
            <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Building2 size={16} />
                        <span>{company}</span>
                        <span className="mx-2">•</span>
                        <Calendar size={16} />
                        <span>{period}</span>
                    </div>

                    <h3 className="text-2xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {title}
                    </h3>

                    <p className="mt-3 text-muted-foreground">
                        {description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs bg-accent text-accent-foreground rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                        >
                            View Live Site <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default FreelanceCard;
