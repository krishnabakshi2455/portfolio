import { atom } from 'jotai';
import { Review } from './types';



const initialReviews: Review[] = [
    {
        id: '1',
        name: 'John Mueller',
        company: 'Kreative Werbung',
        role: 'Project Manager',
        rating: 5,
        comment: 'Krishna delivered exceptional work on our web applications. His attention to detail and problem-solving skills are outstanding.',
        createdAt: new Date('2024-12-01'),
    },
    {
        id: '2',
        name: 'Sarah Weber',
        company: 'Renovlange',
        role: 'Business Owner',
        rating: 5,
        comment: 'Professional, reliable, and creative. The website exceeded our expectations and has significantly improved our online presence.',
        createdAt: new Date('2024-10-15'),
    },
];

export const reviewsAtom = atom<Review[]>(initialReviews);

export const addReviewAtom = atom(
    null,
    (get, set, newReview: Omit<Review, 'id' | 'createdAt'>) => {
        const reviews = get(reviewsAtom);
        const review: Review = {
            ...newReview,
            id: Date.now().toString(),
            createdAt: new Date(),
        };
        set(reviewsAtom, [review, ...reviews]);
    }
);
