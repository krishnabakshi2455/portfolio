import About from "@/components/pages/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Krishna Bakshi",
  description:
    "Learn more about Krishna Bakshi, a full-stack developer passionate about building clean, efficient, and scalable web applications.",
};
export default function page() {
  return <div>
    <About/>
  </div>
}


