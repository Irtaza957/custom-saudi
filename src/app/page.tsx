'use client'
import { Car } from '@/assets'
import { ServiceCard } from '@/components/booking/Card'
import { NavMenu } from '@/components/booking/Sidebar'
import { VehicleSelector } from '@/components/booking/VehicleSelector'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [selectedTab, setSelectedTab]=useState('POLISH')
  const services = [
    { title: 'Bright Polishing', price: 10600, originalPrice: 12000 },
    { title: 'Detailgio Full Polishing', price: 10600, originalPrice: 12000 },
    { title: 'Aqueous Bright Polishing', price: 10600, originalPrice: 12000 },
  ]

  const handleSelectTab=(value: string)=>{
    setSelectedTab(value)
  }

  return (
    <div>
      {/* Main Content */}
      <main className="lg:container lg:mx-auto lg:py-6 w-full lg:h-screen overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full">
          {/* Car Image */}
          <div className='w-full'>
            <header className="bg-zinc-900 text-white p-4 rounded-lg w-full lg:w-[50%]">
              <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-7">
                  <span className="font-bold text-lg">CUSTOM</span>
                  <VehicleSelector />
                </div>
                <NavMenu />
              </div>
            </header>
            <div className="relative overflow-hidden w-full h-[400px] lg:h-[600px]">
              <Image
                src={Car}
                alt="Car"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-6 w-full lg:w-[35%] px-6 lg:px-0">
            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-200 bg-[rgba(0,00,0.99)] rounded-lg overflow-auto whitespace-nowrap w-[calc(100%-2px)] no-scrollbar">
              {['POLISH', 'THERMAL TINT', 'PROTECTION FILM', 'Smooth Polishing'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm hover:bg-[rgba(104,104,104,0.50)] capitalize hover:text-white rounded-lg transition-all 
                    ${tab === selectedTab
                    ? 'text-white font-semibold bg-[rgba(104,104,104,0.50)]'
                    : 'text-gray200 hover:text-gray-700'
                    }`}
                    onClick={()=>handleSelectTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Service Cards */}
            <div className="flex lg:flex-col gap-2 space-y-2 overflow-auto lg:h-[calc(100vh-170px)] no-scrollbar">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

