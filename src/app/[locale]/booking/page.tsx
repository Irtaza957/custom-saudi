'use client'
import { Car } from '@/assets'
import { ServiceCard } from '@/components/booking/Card'
import { NavMenu } from '@/components/booking/Sidebar'
import { VehicleSelector } from '@/components/booking/VehicleSelector'
import Image from 'next/image'
import { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/UI/Dropdown'
import { ChevronDown } from 'lucide-react'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('POLISH')
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLang, setSelectedLang] = useState(pathname?.split('/')?.[1])
  console.log(pathname?.split('/'), 'pathnamepathname')
  const t = useTranslations()
  const services = [
    { title: 'Bright Polishing', price: 10600, originalPrice: 12000 },
    { title: 'Detailgio Full Polishing', price: 10600, originalPrice: 12000 },
    { title: 'Aqueous Bright Polishing', price: 10600, originalPrice: 12000 },
  ]

  const handleSelectTab = (value: string) => {
    setSelectedTab(value)
  }

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  const handleLanguageChange = (locale: string) => {
    setSelectedLang(locale);
    const segments = pathname.split('/').filter(Boolean);
  
    // Handle locale at the first segment
    if (['en', 'ar'].includes(segments[0])) {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
  
    // Construct the new path and navigate
    const newPath = `/${segments.join('/')}`;
    router.push(newPath);
    setTimeout(()=>{
      window.location.reload()
    },1000)
  };
  

  return (
    <div>
      {/* Main Content */}
      <main className="lg:container lg:mx-auto pb-10 lg:py-6 w-full lg:h-screen overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full">
          {/* Car Image */}
          <div className='w-full'>
            <header className="bg-zinc-900 text-white p-4 lg:rounded-lg w-full lg:w-[50%]">
              <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-7">
                  <span className="font-bold text-lg">CUSTOM</span>
                  <div className='flex gap-3'>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm hover:text-gray-300 transition-colors">
                      {selectedLang}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-40 bg-zinc-900 border-zinc-800"
                    >
                      <DropdownMenuItem
                        onClick={() => handleLanguageChange('en')}
                        className="text-sm text-white hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      >
                        en
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleLanguageChange('ar')}
                        className="text-sm text-white hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      >
                        ar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <VehicleSelector />
                  </div>
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
          <div className="space-y-6 w-full lg:max-w-[35%] px-6 lg:px-0">
            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-200 bg-[rgba(0,00,0.99)] rounded-lg overflow-auto whitespace-nowrap w-[calc(100%-2px)] no-scrollbar">
              {['POLISH', 'THERMAL TINT', 'PROTECTION FILM', 'NANO CERAMIC'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm hover:bg-[rgba(104,104,104,0.50)] capitalize hover:text-white rounded-lg transition-all 
                    ${tab === selectedTab
                      ? 'text-white font-semibold bg-[rgba(104,104,104,0.50)]'
                      : 'text-gray200 hover:text-gray-700'
                    }`}
                  onClick={() => handleSelectTab(tab)}
                >
                  {t(tab)}
                </button>
              ))}
            </div>

            {/* Service Cards */}
            <div className="hidden lg:block gap-2 space-y-2 overflow-auto lg:h-[calc(100vh-170px)] no-scrollbar">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
            <div className='relative'>
              <Carousel
                onChange={handleSlideChange}
                showArrows={true}
              >
                {services.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

