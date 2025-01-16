'use client'

import { cn } from "@/libs/utils"
import { useState } from "react"

const MORNING_SLOTS = ["10:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM", "11:00 PM"]

export function TimeSlots() {
    const [selectedTime, setSelectedTime] = useState("12:30 AM")

    return (
        <div className="p-6 flex items-center w-full lg:w-[50%] justify-center bg-white border-l">
            <div className="space-y-6">
                <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {MORNING_SLOTS.map((time, i) => (
                            <div key={i} className="whitespace-nowrap gap-2">
                                <button
                                    onClick={() => setSelectedTime(time)}
                                    className={cn(
                                        "py-2.5 px-4 text-sm rounded-lg border transition-colors",
                                        selectedTime === time
                                            ? "border-blue-600 bg-blue-50 text-blue-600"
                                            : "border-gray-200 hover:border-gray-300 text-gray-700"
                                    )}
                                >
                                    {time}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

