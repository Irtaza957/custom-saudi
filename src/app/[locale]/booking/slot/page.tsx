import { Calendar } from "@/components/slots/Calender";
import { OrderSummary } from "@/components/slots/OrderSummary";
import { TimeSlots } from "@/components/slots/TimeSots";


export default function Slots() {
  return (
    <div className="overflow-hidden md:h-screen bg-gray-50">
      <div className="rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full px-5 md:px-10 mt-5 lg:mt-8">
            <h1 className="px-1 py-3 lg:py-5 font-semibold text-2xl">
              Select Date and Time
            </h1>
            <div className="flex flex-col lg:flex-row w-full">
              <Calendar />
              <TimeSlots />
            </div>
          </div>
          <div className="px-5 md:px-0 w-full md:w-[45%]"><OrderSummary /></div>
        </div>
      </div>
    </div>
  )
}

