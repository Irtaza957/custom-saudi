import { ArrowDownToLine, Bolt, CalendarDays, ChevronLeft, CreditCard } from 'lucide-react'
import { Button } from '@/components/UI/Button'

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Button
            size="icon"
            className="h-10 w-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray200 font-bold" />
            <span className="sr-only">Previous</span>
          </Button>
          <div className='flex items-center gap-1'>
            <div className='border border-black rounded-full p-1.5'><Bolt className='w-[14px] h-[14px]'/></div>
            <div className='border-t border-gray100 w-5'/>
            <CalendarDays className='w-[14px] h-[14px] text-gray100'/>
            <div className='border-t border-gray100 w-5'/>
            <CreditCard className='w-[14px] h-[14px] text-gray100'/>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium"><span className='font-semibold'>250</span> SAR</span>
          <Button className="bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800">
            NEXT
            <ArrowDownToLine className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

