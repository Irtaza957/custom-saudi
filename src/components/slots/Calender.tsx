'use client'

import { DayPicker } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from "react"

export function Calendar() {
  const [selected, setSelected] = useState<Date>(new Date())
  const [selectedMonthYear, setSelectedMonthYear] = useState<Date>(new Date())

  const css = `
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: #2563eb;
      --rdp-background-color: #e5edff;
      margin: 0;
    }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
      background-color: #f3f4f6;
    }
    .rdp-day_selected {
      background-color: var(--rdp-accent-color);
      font-weight: normal;
    }
    .rdp-button {
      font-size: 14px;
    }
    .rdp-head_cell {
      font-size: 12px;
      font-weight: 500;
      color: #6b7280;
    }
  `

  return (
    <div className="p-6">
      <style>{css}</style>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[15px] text-gray-900">
          <span className="font-semibold">{selectedMonthYear.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          <span className="ml-2 text-gray-500 font-normal">
            Wednesday, October 27
          </span>
        </h2>
      </div>

      <DayPicker
        mode="single"
        selected={selected}
        onSelect={(date) => date && setSelected(date)}
        onMonthChange={(date) => date && setSelectedMonthYear(date)}
        showOutsideDays
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "hidden",
          nav: "space-x-1 flex items-center",
          nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell: "text-gray-500 rounded-md w-10 h-10 font-medium flex items-center justify-center",
          row: "flex w-full mt-2",
          cell: "text-center text-sm relative p-0 rounded-md focus-within:relative focus-within:z-20",
          day: "h-10 w-10 p-0 font-normal",
          day_selected: "bg-blue-600 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white",
          day_outside: "opacity-50",
          day_disabled: "opacity-50 cursor-not-allowed",
          day_hidden: "invisible",
        }}
        components={{
          IconLeft: () => <ChevronLeft className="h-4 w-4" />,
          IconRight: () => <ChevronRight className="h-4 w-4" />,
        }}
      />
    </div>
  )
}

