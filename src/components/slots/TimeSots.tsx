'use client'

import { cn } from "@/libs/utils"
import { useState } from "react"

const MORNING_SLOTS = [
    ["10:00 AM", "10:00 AM"],
    ["11:00 AM", "12:00 PM"],
    ["03:00 PM", "04:00 PM"],
    ["05:00 PM", "06:00 PM"],
    ["07:00 PM", "08:00 PM"],
    ["09:00 PM", "10:00 PM"],
    ["11:00 PM", "11:00 PM"],
    ["10:00 AM", "10:00 AM"],
]

export function TimeSlots() {
    const [selectedTime, setSelectedTime] = useState("12:30 AM")

    const TimeSlot = ({ time }: { time: string }) => (
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
    )

    return (
        <div className="px-6 pb-6">
            <div className="space-y-6">
                <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                        {MORNING_SLOTS.map(([start, end], i) => (
                            <div key={i} className="grid grid-cols-2 gap-2">
                                <TimeSlot time={start} />
                                <TimeSlot time={end} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

