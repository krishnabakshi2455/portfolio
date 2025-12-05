import { Review } from "@/lib/types";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ReviewCardProps {
    review: Review;
    index: number;
}

const ReviewCard = ({ review, index }: ReviewCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
        >
            <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"}
                    />
                ))}
            </div>

            <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>

            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {review.name.charAt(0)}
                </div>
                <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role} at {review.company}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ReviewCard;
