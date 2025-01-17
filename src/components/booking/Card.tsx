'use client'
import { CheckedIcon, Tabby, Tamara } from "@/assets"
import { cn } from "@/libs/utils"
import Image from "next/image"
import { useState } from "react"

interface ServiceCardProps {
  title: string
  price: number
  originalPrice: number
}

export function ServiceCard({ title, price, originalPrice }: ServiceCardProps) {
  const [selectedCard, setSelectedCard] = useState<string[]>([])
  // const [service, setService]=useState<number | null>(null)
  const handleSelectCard = () => {
    if(selectedCard.includes(title)){
      setSelectedCard(prev=> prev.filter(item=> item!==title)) 
    }else{
      setSelectedCard(prev=> [...prev, title])
    }
  }
  return (
    <div className={cn(
      "bg-white rounded-lg px-6 py-4 space-y-4 border-4 border-white transition-all cursor-pointer"
      // selectedCard.includes(title) && 'border-black'
    )} 
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-black">{title}</h3>
        <button className={cn(
          "flex gap-2 text-sm text-gray-600 border border-gray100 rounded-full px-3 py-2",
          selectedCard.includes(title) && 'bg-[rgba(0,00,0.99)] text-white'
          )} onClick={handleSelectCard}>
          {selectedCard.includes(title) ? 'Selected' : 'Select'}
          {selectedCard.includes(title) &&
          <div className="relative overflow-hidden w-5 h-5">
              <Image
                src={CheckedIcon}
                alt="Car"
                fill
                className="object-contain"
              />
            </div>}
        </button>
      </div>
      <div className="bg-zinc-900 rounded-lg p-4 flex items-center justify-between">
        <div className=" gap-1">
          <div className="text-white text-xl font-bold">{price.toLocaleString()} <span className="text-white text-sm">SAR</span></div>

          <div className="text-white font-semibold text-sm ml-2 relative">
            {originalPrice.toLocaleString()} <span className="text-xs">SAR</span>
            <div className="border-t-2 border-[#FF3B30] absolute top-[10px] -left-1 w-[95%]"></div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-xs text-white">Pay with</span>
          <div className="relative w-16 h-16">
            <Image
              src={Tabby}
              alt="Tabby"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[84px] h-16">
            <Image
              src={Tamara}
              alt="Tamara"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

