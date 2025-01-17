import Image from "next/image"
import { Label } from "@/components/UI/Label"
import { Input } from "@/components/UI/Input"
import { RadioGroup, RadioGroupItem } from "@/components/UI/RadioGroup"
import { Mada, Mastercard, Tabby, Tamara, Visa } from "@/assets"

export default function Payment() {
  return (
    <div className="mx-auto px-6 pt-6 md:p-6 space-y-8 md:h-[calc(100vh-100px)] no-scrollbar overflow-auto">
      {/* Data Entry Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Enter Your Data</h2>
        <div className="space-y-4">
          <div>
            <Input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-white"
            />
          </div>
          <div className="flex gap-4">
            <Input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-white"
            />
            {/* <Button 
              className="bg-black text-white hover:bg-black/90 text-xs px-4"
            >
              VERIFY NUMBER
            </Button> */}
          </div>
          {/* <div className="flex gap-2">
            {[1,2,3,4].map((num) => (
              <Input 
                key={num}
                type="text" 
                className="w-14 h-14 text-center bg-gray-50"
                maxLength={1}
              />
            ))}
          </div> */}
        </div>
      </div>

      {/* Payment Details Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Enter Payment Details</h2>
        <RadioGroup defaultValue="card" className="space-y-1.5 md:space-y-4">
          {/* Credit/Debit Card Option */}
          <div className="flex items-center space-x-2 border rounded-lg p-4 bg-white">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex justify-between items-center w-full">
              <span>Pay with Debit/Credit Card</span>
              <div className="flex gap-1">
                <Image 
                  src={Mada} 
                  alt="Credit Card Logos"
                  width={120}
                  height={24}
                  className="h-6 object-contain"
                />
                <Image 
                  src={Visa} 
                  alt="Credit Card Logos"
                  width={120}
                  height={24}
                  className="h-6 object-contain"
                />
                <Image 
                  src={Mastercard} 
                  alt="Credit Card Logos"
                  width={120}
                  height={24}
                  className="h-6 object-contain"
                />
              </div>
            </Label>
          </div>

          {/* Tamara Option */}
          <div className="flex items-start space-x-2 border rounded-lg p-4 bg-white">
            <RadioGroupItem value="tamara" id="tamara" className="mt-1" />
            <Label htmlFor="tamara" className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <span>Pay with Tamara</span>
                <Image 
                  src={Tabby}
                  alt="Tamara Logo"
                  width={80}
                  height={24}
                  className="h-6 object-contain"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Pay part of the amount now and the rest according to the payment plan, without interest and hidden fees
              </p>
            </Label>
          </div>

          {/* Tabby Option */}
          <div className="flex items-start space-x-2 border rounded-lg p-4 bg-white">
            <RadioGroupItem value="tabby" id="tabby" className="mt-1" />
            <Label htmlFor="tabby" className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <span>Pay with Tabby</span>
                <Image 
                  src={Tamara}
                  alt="Tabby Logo"
                  width={80}
                  height={24}
                  className="h-6 object-contain"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Divide it into four interest-free payments
              </p>
            </Label>
          </div>

          {/* Pay on Site Option */}
          <div className="flex items-center space-x-2 border rounded-lg p-4 bg-white">
            <RadioGroupItem value="onsite" id="onsite" />
            <Label htmlFor="onsite" className="flex justify-between items-center w-full">
              <span>Pay on Site</span>
              <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

