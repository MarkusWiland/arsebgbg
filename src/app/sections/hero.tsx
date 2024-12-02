import Image from 'next/image';
import React from 'react';
import bg from '@/app/assets/images/bg.jpg';
import bg2 from '@/app/assets/images/backgroundimage.png';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative  h-full w-full">
        {/* Bakgrundsbild */}
        <div className="absolute inset-0 h-full mx-auto">
          <Image
            src={bg}
            alt="Background"
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Gradient överlagring */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,rgba(8,9,10,80%)_0%,rgba(8,9,10,0.1)_25%,rgba(8,9,10,0.5)_50%,rgba(8,9,10,0.7)_75%,rgba(8,9,10,1)_100%)] pointer-events-none z-30"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(8,9,10,0.4)_0%,_rgba(8,9,10,0.6)_70%,_rgba(8,9,10,0.8)_100%)] pointer-events-none"></div>

        {/* Innehåll */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            {/* Text och Knappar */}
            <div className="max-w-2xl">
              <h1 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-6">
                We take <span className="text-yellow-500">pride</span> in teamwork and support each other's <span className="text-yellow-500">goals</span>.
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                Follow along during the most exciting moments and stand by the team's side on the road to success.
              </p>
              <div className="flex gap-4">
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold">
                  Buy Tickets Now
                </button>
                <button className="border border-gray-300 text-white px-6 py-3 rounded-lg">
                  See Match Schedule
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PODCAST-knapp */}
        <div className="absolute right-0 top-1/2 px-2 py-4 bg-yellow-500 text-black rotate-90 z-40">
          <h1>PODCAST</h1>
        </div>

        {/* Overlay-bild */}
        <div className="absolute bottom-0 right-20 z-20">
          <Image
            src={bg2}
            alt="Overlay"
            className="w-[894px] h-[501px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
