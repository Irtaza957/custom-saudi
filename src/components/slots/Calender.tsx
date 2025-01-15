'use client'

import { DayPicker } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from "react"
import "react-day-picker/style.css";

export function Calendar() {
  const [selected, setSelected] = useState<Date>(new Date())
  const [selectedMonthYear, setSelectedMonthYear] = useState<Date>(new Date())

  return (
    <div className="p-6 bg-white w-full">
      <div className="flex items-center justify-between mb-4 w-full">
        <h2 className="text-[15px] text-gray-900">
          <span className="font-semibold text-black500 text-xl">{selectedMonthYear.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          <span className="ml-2 text-black500 text-sm font-semibold">
            Wednesday, October 27
          </span>
        </h2>
      </div>

      <div className="relative dayPicker">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={(date) => date && setSelected(date)}
          onMonthChange={(date) => date && setSelectedMonthYear(date)}
          showOutsideDays
          classNames={{
            // months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            // month: "space-y-4",
            // caption: "flex justify-center pt-1 relative items-center",
            caption_label: "hidden",
            nav: "space-x-1 flex items-center absolute -top-10 right-0",
            // nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
            // nav_button_previous: "absolute left-1 text-gray200",
            // nav_button_next: "absolute right-1",
            // table: "w-full border-collapse space-y-1",
            // head_row: "flex",
            // head_cell: "text-gray-500 rounded-md w-10 h-10 font-medium flex items-center justify-center",
            // row: "flex w-full mt-2",
            // cell: "text-center text-sm relative p-0 rounded-md focus-within:relative focus-within:z-20",
            // day: "h-10 w-10 p-0 font-normal",
            // day_selected: "bg-blue-600 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white",
            // day_outside: "opacity-50",
            // day_disabled: "opacity-50 cursor-not-allowed",
            // day_hidden: "invisible",
          }}
          components={{
            PreviousMonthButton: () => <ChevronLeft className="w-6 h-6 font-semibold text-[#888888] border border-gray100 rounded-full mr-3" />,
            NextMonthButton: () => <ChevronRight className="w-6 h-6 font-semibold text-[#888888] border border-gray100 rounded-full" />,
          }}
        />
      </div>
    </div>
  )
}

