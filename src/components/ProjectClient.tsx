'use client';
import ImageSlider from '@/components/ImageSlider';
import { ProjectDatas } from '@/data/ProjectData';
import Link from 'next/link';
import { use } from 'react'; 


export default function ProjectClient({ id }: { id: string }) {
    const project = ProjectDatas.find((p) => p.id === Number(id));
    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-white">
                <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                <Link href="/" className="text-amber-500 hover:underline">Return Home</Link>
            </div>
        );
    }
    return (
        <section className="min-h-screen flex flex-col items-center pt-32 px-6 text-white">
            <div className="w-full max-w-4xl">
                {/* ปุ่มย้อนกลับ */}
                <Link href="/#projects" className="inline-block mb-8 text-gray-400 hover:text-white transition-colors">
                    ← Back to Projects
                </Link>

                {/* รูปภาพ (Placeholder) */}
                <div className="w-full h-64 md:h-96 bg-gray-800 rounded-3xl mb-10 overflow-hidden flex items-center justify-center">
                    <ImageSlider images={project.images || []}/>
                </div>

                {/* หัวข้อโปรเจกต์ */}
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-amber-500">
                    {project.name}
                </h1>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((t) => (
                        <span key={t} className="px-4 py-2 rounded-full bg-[#222] border border-gray-700 text-sm text-gray-300">
                            {t}
                        </span>
                    ))}
                </div>

                {/* เนื้อหา */}
                <p className="text-lg text-gray-300 leading-relaxed mb-10">
                    {project.description}
                    {/* ตรงนี้คุณสามารถเพิ่ม field 'longDescription' ใน data เพื่อเนื้อหาที่ยาวกว่านี้ได้ */}
                </p>

                {/* ปุ่มไป GitHub */}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all"
                    >
                        View on GitHub ↗
                    </a>
                )}
            </div>
        </section>
    );
}
