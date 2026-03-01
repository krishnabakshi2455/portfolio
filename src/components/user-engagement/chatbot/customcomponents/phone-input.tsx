"use client"
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const formSchema = z.object({
    number: z.string().min(10, {
        message: "The number must be 10 digits long",
    }),
})
export default function ChatbotPhoneInput({ onSubmit }: { onSubmit: any }) {
    const [state, setState] = useState({
        disabled: false
    })

    const [countryCode, setCountryCode] = useState('IN') // default fallback

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                if (data?.country_code) {
                    setCountryCode(data.country_code.toLowerCase())
                }
            })
            .catch(err => {
                console.error('Failed to fetch country', err)
            })
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            number: "",
        },
    })
    function formsubmit(values: z.infer<typeof formSchema>) {
        onSubmit(values.number);
        setState({ disabled: true })
        form.reset()
    }
    return (
        <div>
            <div className="mt-2">
                <div className="text-left">{`Please provide your phone number for identity verification.`}</div>
                <div className="mt-3 flex flex-col gap-2 justify-start items-start overflow-hidden">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(formsubmit)} className="w-full space-y-2">
                            <FormField
                                control={form.control}
                                name="number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl className="">
                                            <PhoneInput
                                                country={countryCode}
                                                {...field}
                                                inputStyle={{
                                                    width: '100%',
                                                }}
                                                onChange={(phone) => {
                                                    form.setValue("number", phone)
                                                }}
                                                disabled={state.disabled}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        e.preventDefault() // prevent PhoneInput default behavior
                                                        form.handleSubmit(formsubmit)() // trigger form submit
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit"
                                disabled={state.disabled}
                                className="w-full bg-primary hover:bg-primary/90 text-lg"
                            >Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}