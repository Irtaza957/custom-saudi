import { Calendar } from "../../../components/slots/Calender";
import { OrderSummary } from "../../../components/slots/OrderSummary";
import { TimeSlots } from "../../../components/slots/TimeSots";

export default function Slots() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm">
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
        <div>
          <h1 className="px-6 py-4 font-semibold text-lg border-b">
            Select Date and Time
          </h1>
          <Calendar />
          <TimeSlots />
        </div>
        <OrderSummary />
      </div>
    </div>
  </div>
  )
}

