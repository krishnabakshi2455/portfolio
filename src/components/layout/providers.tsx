"use client"
import { atom, useSetAtom } from "jotai"
import { useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import { Toaster } from "../ui/sonner"
import UserEngagement from "../user-engagement"

export const entryUrlAtom = atom('')
export const sessionIdAtom = atom('')
export const submitiondone = atom<boolean | null>(false)
export function Providers({ children }: { children: React.ReactNode }) {
    const setEntryUrl = useSetAtom(entryUrlAtom)
    const setSessionId = useSetAtom(sessionIdAtom)

    useEffect(() => { setEntryUrl(window.location.href) }, [])
    useEffect(() => { setSessionId(window?.crypto?.randomUUID?.()) }, [])
    return (
        <>
            <Header />
            {children}
            <Footer />
            <UserEngagement/>
            <Toaster toastOptions={{ className: 'bottom-14 sm:bottom-0' }} />
        </>
    )
}