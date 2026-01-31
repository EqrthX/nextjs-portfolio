'use client'
import { TypingEffect } from '@/libs/TypeEffect';
import { AnimatePresence, motion, useInView } from 'framer-motion';

export default function LearningJourney() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20">
      <div className="">
        <TypingEffect text='Learning Journey'/>
      </div>
    </section>
  );
}
