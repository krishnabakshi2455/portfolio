import Projects from "@/components/pages/projects"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Krishna Bakshi",
  description:
    "Explore projects built by Krishna Bakshi showcasing expertise in React, Next.js, TypeScript, Node.js, and full-stack development.",
};
function page() {
  return <div>
    <Projects/>
  </div>
}

export default page
