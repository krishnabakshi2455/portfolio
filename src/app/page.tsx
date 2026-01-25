import Homepage from "@/components/pages/homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krishna Bakshi | Full-Stack Developer",
  description:
    "Full-stack developer building fast, scalable, and user-focused web applications using React, Next.js, TypeScript, and modern web technologies.",
};
export default function Home() {
  return <div>
    <Homepage/>
  </div>
}
