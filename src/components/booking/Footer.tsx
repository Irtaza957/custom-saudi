"use client";
import { ArrowDownToLine, Bolt, CalendarDays, ChevronLeft, CreditCard } from 'lucide-react'
import { Button } from '@/components/UI/Button'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/libs/utils';

export function Footer() {
  const pathname = usePathname()
  const router = useRouter()

  const handleNext = () => {
    if (pathname.includes('/booking/slot')) {
      router.push('payment')
    } else if (pathname .includes('/booking')) {
      router.push('booking/slot')
    } else {
      router.push('booking')
    }
  }

  const handleBack = () => {
    if (pathname.includes('/booking/slot')) {
      router.push('booking')
    } else if (pathname.includes('/booking/payment')) {
      router.push('slot')
    }
  }
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Button
            size="icon"
            className="h-10 w-10"
            onClick={handleBack}
          >
            <ChevronLeft className="h-6 w-6 text-gray200 font-bold" />
            <span className="sr-only">Previous</span>
          </Button>
          <div className='flex items-center gap-1'>
            <div className={cn(
              'border border-white rounded-full p-1.5',
              pathname === '/booking' && 'border-black',
              pathname !== '/booking' && 'bg-black'
            )}>
              <Bolt className={cn(
                'w-[14px] h-[14px]',
                pathname !== '/booking' && 'text-white'
              )} />
            </div>
            <div className='border-t border-gray100 w-5' />
            <div className={cn(
              'border rounded-full p-1.5',
              pathname === '/booking/slot' && 'border-black',
              pathname === '/booking' && 'border-white',
              pathname === '/booking/payment' && 'bg-black',
              )}>
              <CalendarDays className={cn(
                'w-[14px] h-[14px]',
                pathname === '/booking/slot' && 'text-black',
                pathname === '/booking' && 'text-gray100',
                pathname === '/booking/payment' && 'text-white'
              )} />
            </div>
            <div className='border-t border-gray100 w-5' />
            <div className={cn(
              'border border-white rounded-full p-1.5',
              pathname === '/booking/payment' && 'border-black',
              )}>
              <CreditCard className={cn(
                'w-[14px] h-[14px] text-gray100',
                pathname === '/booking/payment' && 'text-black',
              )} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium"><span className='font-semibold'>250</span> SAR</span>
          <Button onClick={handleNext} className="bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800">
            NEXT
            <ArrowDownToLine className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

