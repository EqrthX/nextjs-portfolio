import ProjectClient from '@/components/ProjectClient';
import { ProjectDatas } from '@/data/ProjectData';

export async function generateStaticParams() {
    return ProjectDatas.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ProjectClient id={id} />;
}