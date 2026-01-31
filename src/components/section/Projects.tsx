'use client'
import { ProjectDatas } from '@/data/ProjectData';
import { getAssetPath } from '@/libs/GetAssetPath';
import { TypingEffect } from '@/libs/TypeEffect';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20 px-6">
      <div className="z-10 w-full max-w-6xl"> {/* ใช้ 6xl ให้เท่ากับ About */}
        <div className="text-center text-5xl md:text-7xl font-extrabold mb-12 tracking-tight">
          <TypingEffect text='Projects' />
        </div>

        {/* Grid Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          {ProjectDatas.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className='bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-amber-500 transition-all flex flex-col h-full'
            >
              {/* ส่วนเนื้อหาด้านบน */}
              <div className="grow">
                <div className="w-full h-48 bg-gray-800 rounded-xl mb-6 overflow-hidden relative">
                  {project.images && project.images.length > 0 ? (
                    <Image
                      src={getAssetPath(project.images[0])}
                      alt={project.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
                  )}
                  <h3 className="text-white text-xl font-bold mb-2 wrap-break-word">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* ส่วน Tech Stack ด้านล่าง */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}