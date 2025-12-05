import { motion } from "framer-motion";

interface SkillBadgeProps {
    name: string;
    index: number;
}

const SkillBadge = ({ name, index }: SkillBadgeProps) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03, duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
        >
            {name}
        </motion.span>
    );
};

export default SkillBadge;
