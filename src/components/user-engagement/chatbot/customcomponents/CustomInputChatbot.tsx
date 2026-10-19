"use client"
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { checkPhoneValid } from "@/util/check-phone-valid";
import { useCheckIp } from "@/hooks/useCheckIp";
import { chatbotData } from "../chatBot";

const formSchema = z.object({
    number: z.string().min(1, { message: "Phone number is required" }),
})

export default function CustomInputChatbot({
    value,
    onChange,
    onSubmit
}: {
    value: any,
    onChange: (value: any) => void,
    onSubmit: (value: any) => void
}) {
    const [store, setStore] = useAtom(chatbotData)
    const countryCode = useCheckIp("in");
    const [selectedCountry, setSelectedCountry] = useState<any>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            number: value || "",
        },
    })

    return (
        <section className="w-full">
            <Form {...form}>
                <form className="w-full space-y-2">
                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <PhoneInput
                                        inputClass="!rounded-md"
                                        country={countryCode}
                                        value={field.value}
                                        inputStyle={{
                                            width: '100%',
                                            height: '40px',
                                            fontSize: '14px',
                                        }}
                                        dropdownStyle={{
                                            position: 'fixed',
                                            zIndex: 99999,
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                            bottom: '60px',
                                            top: 'auto',
                                        }}
                                        buttonStyle={{
                                            zIndex: 1,
                                        }}
                                        containerClass="phone-input-container"
                                        onChange={(phone, country: any) => {
                                            field.onChange(phone)
                                            setSelectedCountry(country)

                                            // Uses THIS event's country object directly (never
                                            // stale state) so dial-code/national-number splitting
                                            // is always correct, then merges back into a single
                                            // string only when notifying the parent/store.
                                            const isValid = checkPhoneValid(phone, country)

                                            if (isValid) {
                                                setStore((prev) => ({ ...prev, phone }))
                                                onChange(phone)
                                            } else {
                                                onChange('')
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault()
                                                if (checkPhoneValid(field.value, selectedCountry)) {
                                                    onSubmit(field.value)
                                                }
                                            }
                                        }}
                                        enableSearch
                                        placeholder="Enter phone number"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </section>
    )
}