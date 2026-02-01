'use client';
import { TypingEffect } from '@/libs/TypeEffect';

export default function Hero() {
  return (
    <section className='relative min-h-screen flex flex-col items-center justify-center pt-20 px-4'>
      <div className="z-10 w-full max-w-4xl text-center"> {/* เพิ่ม text-center และ max-width */}

        <div className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <TypingEffect text='Hi, I am Nontprawitch' />
        </div>

        <p className='text-xl md:text-2xl text-gray-400 font-medium leading-relaxed'>
          I am Fresh Graduate Student <span className="text-amber-500 font-semibold">Information Communication Technology (ICT)</span> with a focus a Full-Stack Developer and passionate DevOps
        </p>        
      </div>

    </section>
  );
}