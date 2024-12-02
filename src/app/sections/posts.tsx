import Image from 'next/image'
import React from 'react'
import bg from '@/app/assets/images/bg.jpg'
export default function PostsSection() {
  return (
    <section>
      <div className="container">
        <div>

      <h1>
Senaste nyheter
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tenetur laboriosam reprehenderit at id accusantium et possimus incidunt cupiditate, nemo laudantium nam veritatis ipsum doloribus corrupti nulla maxime tempore vel?
      </p>
        </div>

      <div  className="grid grid-cols-3 gap-6">
        <div className="bg-[#090A0C] p-4">
            <Image src={bg} alt="hej"/>
            <h2 className="text-2xl font-medium tracking-tighter">Titel detta är</h2>
            <p className="text-xl text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam aliquam sint ab quos fugit neque? Consequuntur ab debitis magnam necessitatibus odit neque repellendus qui. Dolores inventore possimus tenetur officia.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">published</span>
              <button>Knapp</button>
            </div>
        </div>
        <div className="bg-[#090A0C] p-4">
            <Image src={bg} alt="hej"/>
            <h2 className="text-2xl font-medium tracking-tighter">Titel detta är</h2>
            <p className="text-xl text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam aliquam sint ab quos fugit neque? Consequuntur ab debitis magnam necessitatibus odit neque repellendus qui. Dolores inventore possimus tenetur officia.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">published</span>
              <button>Knapp</button>
            </div>
        </div>
        <div className="bg-[#090A0C] p-4">
            <Image src={bg} alt="hej"/>
            <h2 className="text-2xl font-medium tracking-tighter">Titel detta är</h2>
            <p className="text-xl text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam aliquam sint ab quos fugit neque? Consequuntur ab debitis magnam necessitatibus odit neque repellendus qui. Dolores inventore possimus tenetur officia.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">published</span>
              <button>Knapp</button>
            </div>
        </div>
        <div className="bg-[#090A0C] p-4">
            <Image src={bg} alt="hej"/>
            <h2 className="text-2xl font-medium tracking-tighter">Titel detta är</h2>
            <p className="text-xl text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ipsam aliquam sint ab quos fugit neque? Consequuntur ab debitis magnam necessitatibus odit neque repellendus qui. Dolores inventore possimus tenetur officia.</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">published</span>
              <button>Knapp</button>
            </div>
        </div>

      </div>
      </div>
    </section>
  )
}
