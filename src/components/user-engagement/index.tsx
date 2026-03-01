"use client"
import { usePathname } from "next/navigation";
import Chatbot from "./chatbot/chatBot";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function UserEngagement() {
    const pathname = usePathname();
    const [chatbotOpen, setChatbotOpen] = useState(false)
    const [popupOpen, setPopupOpen] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setChatbotOpen(true)
        }, 5000)
    }, [])

    useEffect(() => {
        let timeout:any;
        if (pathname?.startsWith("/")) {
            timeout = setTimeout(() => {
                setPopupOpen(true)
            }, 25000)
        }

        return ()=>{clearTimeout(timeout)}
    }, [chatbotOpen])
    return <>

      
                <>
                    {/* PopUp */}
                    {/* <PopUp open={popupOpen} onOpenChange={setPopupOpen} /> */}
                    {/* Chatbot */}
                    <div >
                        <Chatbot open={chatbotOpen} onOpenChange={setChatbotOpen} />
                    </div>
                    {/* <a href="tel:+918743809657" className="fixed z-40 sm:hidden bottom-5 right-5 w-14 h-14 p-3 bg-green-600 text-white rounded-full shadow">
                        <Phone className="w-full h-full" />
                    </a> */}
                </>
        

    </>
}