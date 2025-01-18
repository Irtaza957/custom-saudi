import Image from "next/image"
import { Label } from "@/components/UI/Label"
import { RadioGroup, RadioGroupItem } from "@/components/UI/RadioGroup"
import { Mada, Mastercard, Tabby, Tamara, Visa } from "@/assets"
import { useLocale, useTranslations } from "next-intl"

export default function Payment() {
  const t = useTranslations();
  const locale=useLocale();
  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'}  className="mx-auto px-6 pt-6 md:p-6 space-y-8 md:h-full no-scrollbar overflow-auto">
      {/* Data Entry Section */}

      {/* Payment Details Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-black">{t('Enter Payment Details')}</h2>
        <RadioGroup dir={locale === 'ar' ? 'rtl' : 'ltr'} defaultValue="card" className="space-y-1.5 md:space-y-4">
          {/* Credit/Debit Card Option */}
          <div className="flex items-center space-x-2 border rounded-lg p-4 bg-white">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex justify-between items-center w-full">
              <span>{t('Pay with Debit/Credit Card')}</span>
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
                <span>{t('Pay with Tamara')}</span>
                <Image 
                  src={Tabby}
                  alt="Tamara Logo"
                  width={80}
                  height={24}
                  className="h-6 object-contain"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {t('Pay part of the amount now and the rest according to the payment plan, without interest and hidden fees')}
              </p>
            </Label>
          </div>

          {/* Tabby Option */}
          <div className="flex items-start space-x-2 border rounded-lg p-4 bg-white">
            <RadioGroupItem value="tabby" id="tabby" className="mt-1" />
            <Label htmlFor="tabby" className="flex flex-col w-full">
              <div className="flex justify-between items-center w-full">
                <span>{t('Pay with Tabby')}</span>
                <Image 
                  src={Tamara}
                  alt="Tabby Logo"
                  width={80}
                  height={24}
                  className="h-6 object-contain"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {t('Divide it into four interest-free payments')}
              </p>
            </Label>
          </div>

          {/* Pay on Site Option */}
          <div className="flex items-center space-x-2 border rounded-lg p-4 bg-white">
            <RadioGroupItem value="onsite" id="onsite" />
            <Label htmlFor="onsite" className="flex justify-between items-center w-full">
              <span>{t('Pay on Site')}</span>
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

