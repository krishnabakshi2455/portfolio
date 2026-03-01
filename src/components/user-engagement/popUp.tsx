'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { toast } from "sonner";
import { useAtomValue } from "jotai";
import { entryUrlAtom, sessionIdAtom } from "@/components/layout/providers";
import { useRouter } from 'next/navigation';
const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid mobile number.",
    }).max(15, {
        message: "Mobile number is too long.",
    }),
});
interface NewYearPopupProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export default function WorkspaceConsultationPopup({ open, onOpenChange }: NewYearPopupProps) {
    const entryUrl = useAtomValue(entryUrlAtom);
    const router = useRouter();
    const [_open, _setOpen] = useState(open || false);
    const sessionId = useAtomValue(sessionIdAtom);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {

    }

    // Sync open state from parent
    useEffect(() => {
        _setOpen(open);
    }, [open]);

    // Handle internal state changes
    useEffect(() => {
        if (_open !== open) {
            onOpenChange(_open);
        }
    }, [_open]);

    const handleClose = () => {
        _setOpen(false);
    };
    if (!_open) return null;
    return (
        <div className="fixed inset-0 bg-black/40 min-h-screen md:flex items-center justify-center p-4 z-50 hidden md:visible">

            {/* Popup */}
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl flex lg:flex-row flex-col overflow-hidden relative">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-50 text-gray-400 hover:text-gray-700 text-sm"
                >
                    ✕
                </button>
                {/* LEFT */}
                <div className="p-5 md:p-6 space-y-6 ">
                    <p className="text-indigo-600 font-medium">
                        Trusted by over <span className="font-semibold">5,000+</span> Clients ✨
                    </p>

                    {/* Logos */}
                    <div className="grid grid-cols-2 md:grid-cols-4 place-items-center md:gap-8 gap-4 w-full">
                        {
                            Array.from({ length: 8 }).map((_, index) =>
                                <img key={index} src={`/images/home/happy-league/${index + 1}.png`} alt={'beyondjustwork client' + index} className="w-20 sm:w-20" />
                            )
                        }
                    </div>

                    <div className='space-y-2 hidden md:block'>
                        <p className="text-sm md:text-base font-semibold text-gray-900">
                            Delhi NCR leading office space provider
                        </p>

                        <ul className="space-y-1.5 text-sm md:text-sm text-gray-700">
                            <li>• Shared office space</li>
                            <li>• Managed office space</li>
                            <li>• Fully-furnished office space</li>
                            <li>• Office space for rent</li>
                            <li>• Dedicated workspace</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="px-5 pb-5 md:p-6 bg-white border-l">


                    <p className="text-lg md:text-xl font-semibold text-gray-900 mb-4 leading-snug">
                        Start your office search with a workspace consultant today.
                    </p>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your name*"
                                                {...field}
                                                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none h-12"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="tel"
                                                placeholder="Enter mobile number*"
                                                {...field}
                                                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none h-12"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Enter work email*"
                                                {...field}
                                                className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-indigo-600 focus:outline-none h-12"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />



                            <Button
                                type="submit"
                                className="w-full h-10"
                            >
                                Request Callback
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}