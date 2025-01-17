import Payment from "@/components/payment/Payment"
import { OrderSummary } from "@/components/slots/OrderSummary"

export default function PaymentForm() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full md:h-screen">
      <Payment/>
      <div className="px-6 md:px-0 w-full md:w-[32%]"><OrderSummary/></div>
    </div>
  )
}

