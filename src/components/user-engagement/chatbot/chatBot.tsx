"use client"
import Chatbot from "@/components/ui/chatbot"
import { useEffect } from "react"
import ChatbotPhoneInput from "./customcomponents/phone-input"
import { atom, useAtom, useAtomValue } from "jotai"
import axios from "axios"
import { entryUrlAtom, sessionIdAtom, submitiondone } from "@/components/layout/providers"
import { useDebounce } from "use-debounce"

// ─── Atom defined outside component (stable reference) ───────────────────────
export const chatbotData = atom({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    projectDetails: '',
    budget: '',
    timeline: '',
})

export default function ChatbotComponent({ open, onOpenChange }: { open: boolean, onOpenChange: any }) {

    const [store, setStore] = useAtom(chatbotData)
    const [__, setSubmit] = useAtom(submitiondone)
    const entryUrl = useAtomValue(entryUrlAtom)
    const sessionId = useAtomValue(sessionIdAtom)

    // Debounce store to avoid rapid submissions
    const [debouncedStore] = useDebounce(store, 1500)

    useEffect(() => {
        const shouldSubmit = debouncedStore.phone.length > 9 && sessionId

        if (shouldSubmit) {
            const submitData = async () => {
                try {
                    const res = await axios.post("/api/submit", {
                        formId: "chatbot",
                        ...debouncedStore,
                        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
                        referrerUrl: typeof document !== "undefined" ? document.referrer : "",
                        entryUrl,
                        sessionId,
                    })

                    if (res.status === 200) {
                        setSubmit(true)
                    }
                } catch (error) {
                    console.log(error)
                }
            }

            submitData()
        }
    }, [debouncedStore, entryUrl])

    // Reset store when chat is reloaded
    function onChatReload() {
        setStore({
            name: '',
            email: '',
            phone: '',
            inquiryType: '',
            projectDetails: '',
            budget: '',
            timeline: '',
        })
    }

    return (
        <Chatbot
            onChatReload={onChatReload}
            config={{
                name: "Krishna",
                image: "/chatbot.png",
                initialStep: 'start',
                primaryColor: "#4ED1D6",
                favicon: '/kb.png',
                tooltip: "Let's build something great together!",
                open,
                onOpenChange: onOpenChange,
                flow: {

                    // ─── GREETING ───────────────────────────────────────────────
                    start: {
                        delay: 800,
                        render: () => (
                            <div>
                                <b>Hey there! 👋 I'm Krishna Bakshi</b>
                                <br />
                                A Full-Stack Developer based in New Delhi — I build fast, scalable web & mobile apps with Next.js, React Native, Node.js, and more.
                                <br /><br />
                                Whether you need a product built from scratch, a feature added, or just want to chat about a project idea — I'm here!
                            </div>
                        ),
                        autoNext: true,
                        inputboxDisabled: true,
                        inputboxHide: true,
                        next: "ask_name"
                    },

                    // ─── ASK NAME ────────────────────────────────────────────────
                    ask_name: {
                        delay: 1000,
                        message: "First, what's your name?",
                        validation: (value: string) => {
                            if (!value || value.trim().length < 2) return "Please enter your name"
                            setStore((prev) => ({ ...prev, name: value.trim() }))
                            return true
                        },
                        next: "greet_user"
                    },

                    // ─── GREET USER (dynamic, no options) ────────────────────────
                    greet_user: {
                        delay: 800,
                        render: () => <div>Nice to meet you, <b>{store.name}</b>! What can I help you with?</div>,
                        autoNext: true,
                        inputboxDisabled: true,
                        inputboxHide: true,
                        next: "ask_inquiry_type"
                    },

                    // ─── INQUIRY TYPE ─────────────────────────────────────────────
                    ask_inquiry_type: {
                        delay: 600,
                        message: "Here's how I can help:",
                        options: [
                            "🚀 Build a new web app",
                            "📱 Build a mobile app",
                            "🔌 Backend / API development",
                            "🛠️ Fix / improve existing project",
                            "💼 Hire me full-time",
                            "🤝 Just want to connect",
                        ],
                        inputboxDisabled: true,
                        validation: (value: string) => {
                            setStore((prev) => ({ ...prev, inquiryType: value }))
                            return true
                        },
                        next: (value: string) => {
                            if (value === "💼 Hire me full-time") return "ask_company"
                            if (value === "🤝 Just want to connect") return "ask_email_connect"
                            return "ask_project_details"
                        }
                    },

                    // ─── PROJECT DETAILS (freelance/contract) ────────────────────
                    ask_project_details: {
                        delay: 1000,
                        message: "Tell me a bit about your project — what are you trying to build or solve?",
                        validation: (value: string) => {
                            if (!value || value.trim().length < 5) return "Please describe your project briefly"
                            setStore((prev) => ({ ...prev, projectDetails: value.trim() }))
                            return true
                        },
                        next: "ask_budget"
                    },

                    // ─── BUDGET ──────────────────────────────────────────────────
                    ask_budget: {
                        delay: 1000,
                        message: "What's your approximate budget for this project?",
                        options: [
                            "Under ₹25,000",
                            "₹25,000 – ₹75,000",
                            "₹75,000 – ₹2,00,000",
                            "₹2,00,000+",
                            "Not sure yet",
                        ],
                        inputboxDisabled: true,
                        validation: (value: string) => {
                            setStore((prev) => ({ ...prev, budget: value }))
                            return true
                        },
                        next: "ask_timeline"
                    },

                    // ─── TIMELINE ────────────────────────────────────────────────
                    ask_timeline: {
                        delay: 1000,
                        message: "What's your expected timeline?",
                        options: [
                            "ASAP",
                            "Within 1 month",
                            "1–3 months",
                            "3+ months",
                            "Flexible",
                        ],
                        inputboxDisabled: true,
                        validation: (value: string) => {
                            setStore((prev) => ({ ...prev, timeline: value }))
                            return true
                        },
                        next: "ask_email"
                    },

                    // ─── HIRE FULL-TIME FLOW ──────────────────────────────────────
                    ask_company: {
                        delay: 1000,
                        message: "That's great! What company or team would I be joining?",
                        validation: (value: string) => {
                            setStore((prev) => ({ ...prev, projectDetails: `Hiring inquiry from: ${value.trim()}` }))
                            return true
                        },
                        next: "ask_email"
                    },

                    // ─── CONNECT FLOW ─────────────────────────────────────────────
                    ask_email_connect: {
                        delay: 1000,
                        message: "Sure! Drop your email and I'll reach out 🙂",
                        validation: (value: string) => {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                            if (!emailRegex.test(value)) return "Please enter a valid email address"
                            setStore((prev) => ({ ...prev, email: value.trim() }))
                            return true
                        },
                        next: "ask_phone_connect"
                    },

                    // ─── PHONE (connect flow) ─────────────────────────────────────
                    ask_phone_connect: {
                        delay: 1000,
                        inputboxDisabled: true,
                        inputboxHide: true,
                        render: (onsubmit: any) => <ChatbotPhoneInput onSubmit={onsubmit} />,
                        validation: (value: string) => {
                            setStore((prev) => ({ ...prev, phone: value }))
                            return true
                        },
                        next: "final_connect"
                    },

                    // ─── EMAIL ────────────────────────────────────────────────────
                    ask_email: {
                        delay: 1200,
                        message: "What's the best email to reach you at?",
                        validation: (value: string) => {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                            if (!emailRegex.test(value)) return "Please enter a valid email address"
                            setStore((prev) => ({ ...prev, email: value.trim() }))
                            return true
                        },
                        next: "ask_phone"
                    },

                    // ─── PHONE ────────────────────────────────────────────────────
                    ask_phone: {
                        delay: 1000,
                        inputboxDisabled: true,
                        inputboxHide: true,
                        render: (onsubmit: any) => <ChatbotPhoneInput onSubmit={onsubmit} />,
                        validation: (value: string) => {
                            setStore((prev) => ({ ...prev, phone: value }))
                            return true
                        },
                        next: "final_message"
                    },

                    // ─── FINAL MESSAGE (project/hire) ─────────────────────────────
                    final_message: {
                        delay: 1200,
                        inputboxDisabled: true,
                        inputboxHide: true,
                        render: () => (
                            <div>
                                <b>Thanks! I'll be in touch soon. 🙌</b>
                                <br /><br />
                                In the meantime, feel free to check out my work or reach out directly:
                                <br />
                                📧 <a href="mailto:krishnabakshi2455@gmail.com" className="text-blue-500 underline">krishnabakshi2455@gmail.com</a>
                                <br />
                                📱 <a href="tel:+918743809657" className="text-blue-500 underline">+91 87438 09657</a>
                                <br />
                                🔗 <a href="https://linkedin.com/in/krishnabakshi" target="_blank" className="text-blue-500 underline">LinkedIn</a>
                            </div>
                        ),
                        next: ""
                    },

                    // ─── FINAL MESSAGE (connect) ──────────────────────────────────
                    final_connect: {
                        delay: 1200,
                        inputboxDisabled: true,
                        inputboxHide: true,
                        render: () => (
                            <div>
                                <b>Got it! Talk to you soon. 😊</b>
                                <br /><br />
                                You can also find me here:
                                <br />
                                🔗 <a href="https://linkedin.com/in/krishnabakshi" target="_blank" className="text-blue-500 underline">LinkedIn</a>
                                <br />
                                📧 <a href="mailto:krishnabakshi2455@gmail.com" className="text-blue-500 underline">krishnabakshi2455@gmail.com</a>
                            </div>
                        ),
                        next: ""
                    },
                }
            }}
        />
    )
}