import ProjectDetail from "@/components/pages/projec-details"
import { getProjectBySlug } from "@/lib/data"
import { Project } from "@/lib/types"
import { notFound } from "next/navigation"

export default async function ProjectPage({
    params
}: {
    params: Promise<{ projects: string }> // or { details: string } depending on your folder name
}) {
    // Await and destructure params
    const { projects: slug } = await params

    // Now slug contains the actual string value
    const project: Project | undefined = getProjectBySlug(slug)

    // Show 404 if project not found
    if (!project) {
        notFound()
    }

    // Pass filtered data to child component
    return <ProjectDetail project={project} />
}