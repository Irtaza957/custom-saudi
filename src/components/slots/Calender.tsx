'use client'

import { DayPicker } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from "react"
import "react-day-picker/style.css";

export function Calendar() {
  const [selected, setSelected] = useState<Date>(new Date())
  const [selectedMonthYear, setSelectedMonthYear] = useState<Date>(new Date())

  const handlePreviousMonth = () => {
    const previousMonth = new Date(
      selectedMonthYear.getFullYear(),
      selectedMonthYear.getMonth() - 1
    );
    setSelectedMonthYear(previousMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      selectedMonthYear.getFullYear(),
      selectedMonthYear.getMonth() + 1
    );
    setSelectedMonthYear(nextMonth);
  };
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
            caption_label: "hidden",
            nav: "space-x-1 flex items-center absolute -top-10 right-0",
          }}
          components={{
            PreviousMonthButton: () => (
              <button onClick={handlePreviousMonth}>
                <ChevronLeft className="w-6 h-6 font-semibold text-[#888888] border border-gray100 rounded-full mr-3" />
              </button>
            ),
            NextMonthButton: () => (
              <button onClick={handleNextMonth}>
                <ChevronRight className="w-6 h-6 font-semibold text-[#888888] border border-gray100 rounded-full" />
              </button>
            ),
          }}
        />
      </div>
    </div>
  )
}

