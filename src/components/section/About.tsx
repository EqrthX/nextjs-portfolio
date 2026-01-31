'use client';
import { TypingEffect } from '@/libs/TypeEffect';

export default function About() {
    return (
        <section className='relative min-h-screen flex flex-col items-center pt-20 px-6'>
            {/* ขยายความกว้างตรงนี้เป็น 6xl */}
            <div className="z-10 w-full max-w-6xl">

                <div className="text-center text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                    <TypingEffect text='About Me' />
                </div>

                {/* ปรับให้เป็น flex-col สำหรับมือถือ และ flex-row สำหรับจอใหญ่ */}
                <div className='flex flex-col md:flex-row gap-6 min-h-100'>

                    {/* Card 1: What I Do */}
                    <section className='md:w-1/2 bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-amber-500 transition-colors'>
                        <h3 className="text-amber-500 text-2xl font-bold mb-6">What I Do</h3>

                        <div className='flex flex-col gap-6'>
                            <div>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    Thrid year me and friend develop project e-commerce second-hand textbook with Real-time chat to buyer and seller in university in subject Software engineering.
                                    I manage client and server, Client HTTP-only cookies to manage user sessions call api for server to using and connect socket real-time chat.
                                    Server manage Token authentication to user sign in website and store data into database
                                </p>

                            </div>

                            <div>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    Final Year Project: Classroom Behavior Detection "In my final year, my friend and I built a web app that detects student behavior using webcams.
                                    I worked as the Backend Developer, where I connected the system to multiple cameras and managed the data.
                                    I used Supabase to save all the detection results and sent that data to the dashboard so users can see everything in real-time."
                                </p>

                            </div>
                        </div>

                    </section>

                    {/* Card 2: Technical Skills */}
                    <section className='md:w-1/2 bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-amber-500 transition-colors'>
                        <h3 className="text-amber-500 text-2xl font-bold mb-4">Technical Skills</h3>
                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <h4 className="text-white font-semibold mb-2">Languages</h4>
                                <ul className="text-gray-400 text-sm space-y-1">
                                    <li>• HTML / CSS</li>
                                    <li>• JavaScript</li>
                                    <li>• PHP</li>
                                    <li>• Python</li>
                                    <li>• SQL (MySQL, PostgreSQL)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-2">Tools</h4>
                                <ul className="text-gray-400 text-sm space-y-1">
                                    <li>• Postman</li>
                                    <li>• Git / Github</li>
                                    <li>• Docker</li>
                                    <li>• XAMPP</li>
                                    <li>• Supabase</li>
                                    <li>• ChatGPT / Gemini</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-2">Framework</h4>
                                <ul className="text-gray-400 text-sm space-y-1">
                                    <li>• Express / FastAPI</li>
                                    <li>• React / Next.js</li>
                                    <li>• Tailwindcss / Bootstrap</li>
                                </ul>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </section>
    );
}