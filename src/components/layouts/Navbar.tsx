// src/components/layout/Navbar.tsx
'use client' // ต้องมีบรรทัดนี้ เพราะเราใช้ useState

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // ฟังก์ชันสลับสถานะ เปิด/ปิด
    const toggleMenu = () => setIsOpen(!isOpen);

    // รายการเมนู (เก็บเป็น Array จะได้แก้ที่เดียว)
    const menuItems = [
        { name: 'Hero', href: '#hero' },
        { name: 'About', href: '#about'},
        { name: 'Projects', href: '#projects' },
        { name: 'Learning Journey', href: '#learingJourney'}
    ];

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* 1. Logo */}
                    <div className="shrink-0">
                        <h1 className="uppercase font-bold text-lg tracking-widest text-zinc-100 cursor-pointer hover:text-amber-400 transition-colors">
                            <Link href="#hero">Nontprawitch</Link>
                        </h1>
                    </div>

                    {/* 2. Desktop Menu (ซ่อนบนมือถือ md:flex) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="cursor-pointer text-sm font-medium text-zinc-400 hover:text-amber-400 hover:scale-130 transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* 3. Mobile Hamburger Button (โชว์เฉพาะมือถือ md:hidden) */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-zinc-400 hover:text-white focus:outline-none"
                        >
                            {/* ถ้าเปิดอยู่โชว์รูป X (Close), ถ้าปิดอยู่โชว์รูป 3 ขีด (Menu) */}
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. Mobile Menu Dropdown (AnimatePresence เพื่อให้ตอนปิดมี Animation) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)} // กดแล้วปิดเมนูทันที
                                    className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}