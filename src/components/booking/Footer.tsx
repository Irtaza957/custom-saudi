import { ArrowDown, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/UI/Button'

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium"><span className='font-semibold'>250</span> SAR</span>
          <Button className="bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800">
            NEXT
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

