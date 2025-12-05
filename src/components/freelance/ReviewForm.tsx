import { useState } from "react";
import { useSetAtom } from "jotai";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, Mail, CheckCircle, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { addReviewAtom } from "@/lib/store";
import { isVerifiedClient } from "@/lib/data";

const ReviewForm = () => {
    const addReview = useSetAtom(addReviewAtom);
    const [isVerified, setIsVerified] = useState(false);
    const [verificationEmail, setVerificationEmail] = useState("");
    const [verificationError, setVerificationError] = useState(false);
    const [rating, setRating] = useState(5);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        role: "",
        comment: "",
    });

    const handleVerifyEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const email = verificationEmail.trim();

        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        if (isVerifiedClient(email)) {
            setIsVerified(true);
            setVerificationError(false);
            toast.success("Email verified! You can now submit your review.");
        } else {
            setVerificationError(true);
            toast.error("This email is not in our verified client list");
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.comment) {
            toast.error("Please fill in required fields");
            return;
        }

        addReview({
            ...formData,
            rating,
        });

        setFormData({ name: "", company: "", role: "", comment: "" });
        setRating(5);
        setIsVerified(false);
        setVerificationEmail("");
        toast.success("Thank you for your review!");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-xl p-6"
        >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Leave a Review
            </h3>

            <AnimatePresence mode="wait">
                {!isVerified ? (
                    <motion.div
                        key="verification"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <p className="text-sm text-muted-foreground mb-4">
                            To ensure authentic reviews, please verify your email first. Only clients I've worked with can submit reviews.
                        </p>

                        <form onSubmit={handleVerifyEmail} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="verifyEmail">Your Email *</Label>
                                <div className="relative">
                                    <Input
                                        id="verifyEmail"
                                        type="email"
                                        value={verificationEmail}
                                        onChange={(e) => {
                                            setVerificationEmail(e.target.value);
                                            setVerificationError(false);
                                        }}
                                        placeholder="Enter the email you used when working with me"
                                        className={verificationError ? "border-destructive pr-10" : ""}
                                        required
                                    />
                                    {verificationError && (
                                        <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-destructive" />
                                    )}
                                </div>
                                {verificationError && (
                                    <p className="text-sm text-destructive">
                                        Email not found. Only verified clients can submit reviews.
                                    </p>
                                )}
                            </div>

                            <Button type="submit" className="w-full gap-2">
                                Verify Email <Mail size={16} />
                            </Button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        key="reviewForm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="flex items-center gap-2 text-sm text-green-500 mb-4 p-2 bg-green-500/10 rounded-lg">
                            <CheckCircle size={16} />
                            <span>Verified as {verificationEmail}</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name *</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input
                                        id="company"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        placeholder="Your company"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="role">Your Role</Label>
                                <Input
                                    id="role"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    placeholder="e.g., Project Manager"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Rating</Label>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            className="p-1 transition-transform hover:scale-110"
                                        >
                                            <Star
                                                size={24}
                                                className={
                                                    star <= (hoveredRating || rating)
                                                        ? "fill-primary"
                                                        : "text-muted-foreground"
                                                }
                                            />
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="comment">Your Review *</Label>
                                <Textarea
                                    id="comment"
                                    value={formData.comment}
                                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                    placeholder="Share your experience working with me..."
                                    rows={4}
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full gap-2">
                                Submit Review <Send size={16} />
                            </Button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ReviewForm;
