'use client'
import { TypingEffect } from '@/libs/TypeEffect';

export default function LearningJourney() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20 px-6">
      <div className="z-10 w-full max-w-7xl">
        <div className="text-center text-5xl md:text-7xl font-extrabold mb-12 tracking-tight">
          <TypingEffect text='Learning Journey' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>

          <section className='md:w-full bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-amber-500 transition-colors'>
            <h1 className='text-2xl md:text-3xl font-bold text-amber-400 mb-6 flex items-center gap-2'>
              <span>🚀</span>Timeline Learning University
            </h1>

            <div className='flex flex-col gap-2 text-gray-300'>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">First year</h3>
                <p className="text-sm text-gray-400 font-light">
                  Focused Basic Computer Mathematics, Statistics, Basic Programming, Network.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Second year</h3>
                <p className="text-sm text-gray-400 font-light">
                  Leared Data Structure and Algorithem, Database Webapplication using HTML/CSS JavaScript PHP MySQL. as this is first project for university and i still have a lot to learn, so it didn't turn out very well.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Third year</h3>
                <p className="text-sm text-gray-400 font-light">
                  Software engineering subject I did project second-hand text book in university with real-time chat. First use websocket to make real time chat it hard complex have time to learing use Ai ask to websocket
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Final year</h3>
                <p className="text-sm text-gray-400 font-light">
                  I do project detect behavior student in class (Computer Vision). this first time to Ai detection this so hard learning curve to high and connect hardware (webcam) to use detect behavior.
                </p>
              </div>

            </div>
          </section>

          <section className='md:w-full bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-amber-500 transition-colors'>
            <h1 className='text-2xl md:text-3xl font-bold text-blue-400 mb-6 flex items-center gap-2'>Future Goals?</h1>

            <div className='flex flex-col gap-2 text-gray-200'>
              <h1 className='text-lg font-semibold text-white mb-1"'>Interested DevOps</h1>

              <div>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  My goal is to <strong className='text-amber-500'>Full-Stack Developer</strong> first to build a strong foundation, and then transition into <strong className='text-blue-400'>DevOps</strong>.
                  <br /><br />
                  Currently, I am actively learning:
                  <br />
                  • <strong>Git & GitHub:</strong> Practicing collaboration with friends, managing branches, and handling code merges.
                  <br />
                  • <strong>GitHub Actions:</strong> Implemented a CI/CD pipeline using YAML to automate the deployment of this Next.js portfolio.
                  <br />
                  • <strong>Docker:</strong> Exploring containerization to simplify project setup and environment management.
                </p>
              </div>

            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
