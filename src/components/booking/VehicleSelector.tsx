'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/UI/Dropdown'

const vehicles = ['SEDAN', 'SUV']

export function VehicleSelector() {
  const [selected, setSelected] = React.useState(vehicles[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors">
        {selected}
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-40 bg-zinc-900 border-zinc-800"
      >
        {vehicles.map((vehicle) => (
          <DropdownMenuItem
            key={vehicle}
            onClick={() => setSelected(vehicle)}
            className="text-sm text-white hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
          >
            {vehicle}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

