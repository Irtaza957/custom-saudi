'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react'
import { Button } from "@/components/UI/Button"
import { SedanImg, SUVImg } from '@/assets'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import { setCarType } from '@/store/slices/booking'
import { useDispatch } from 'react-redux'

interface CarType {
    name: string;
    image: StaticImageData;
}

const carTypes: CarType[] = [
    {
        name: "SEDAN",
        image: SedanImg
    },
    {
        name: "SUV",
        image: SUVImg
    },
]

export default function CarSelector() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0) 
    const router = useRouter()
    const dispatch = useDispatch()

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
        setSelectedIndex(emblaApi.selectedScrollSnap()) 
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, onSelect])

    const handleNavigate = () => {
        dispatch(setCarType(carTypes[selectedIndex].name))
        router.push('/booking')
    }
    return (
        <div className="w-full">
            <h1 className="text-center font-bold text-2xl mb-8">SELECT CAR TYPE</h1>

            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {carTypes.map((car, index) => (
                            <div key={index} className="flex-[0_0_82%] min-w-0 pl-4">
                                <div className="relative w-full">
                                    {/* Diagonal background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent transform -skew-x-12" />

                                    {/* Car image */}
                                    <div className="relative z-10">
                                        <Image
                                            src={car.image || "/placeholder.svg"}
                                            alt={`${car.name} car type`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Car type label */}

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2" onClick={handleNavigate}>
                        <div className="w-8 h-8 border-2 border-black rounded-lg flex items-center justify-center">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                        {/* <span className="text-[80px] font-bold text-[#f1f1f1] opacity-20 absolute -left-4 -z-10">
                      {car.name}
                    </span> */}
                        <span className="text-2xl font-bold">{carTypes[selectedIndex].name}</span>
                    </div>
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 flex gap-2">
                    <Button
                        onClick={scrollPrev}
                        disabled={!prevBtnEnabled}
                        className="h-10 w-10 rounded-lg border-2 border-black p-0"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                        className="h-10 w-10 rounded-lg border-2 border-black p-0"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}