'use client'
import { services } from "@/libs/utils/constants"
import { RootState } from "@/store"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { Button } from "../UI/Button"
import { useLocale, useTranslations } from "next-intl"

export function OrderSummary() {
  const t = useTranslations()
  const locale=useLocale()

  const {selectedServices, slot} = useSelector((state: RootState)=>state.booking)

  const totalPrice = useMemo(() => {
    return services?.filter(item => selectedServices?.find(service => service === item.id))?.reduce((acc, curr) => {
      return acc + curr?.priceAfter
    }, 0)
  }, [selectedServices])
    return (
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}  className="p-5 md:p-8 bg-white w-full md:h-screen mt-4 md:mb-24 md:mt-0 rounded-lg md:rounded-none">
        <h2 className="text-lg font-semibold mb-6 text-black">{t('Order Summary')}</h2>
        
        <div className="space-y-4">
          {services?.filter(item => selectedServices?.find(service => service === item.id))?.map((item, index) => (
            <div className="flex justify-between items-start" key={index}>
              <div>
                <h3 className="font-bold text-[15px]">{item?.serviceType}</h3>
              <p className="text-sm text-gray-500">{item?.serviceName}</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium">{item?.priceAfter}</span>
              <span className="text-sm text-gray-500">{t('SAR')}</span>
            </div>
          </div>
          ))}
  
          <div className="space-y-3">
            <div className="flex justify-between mt-4">
              <p className="text-sm text-gray-600">{t('Date')}</p>
              <p className="font-medium">{new Date(slot.date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} {slot.time}</p>
            </div>
  
            <div className="space-y-3 pt-10 border-t relative">
              <input
                type="text"
                placeholder={t('Enter Voucher Code')}
                className="w-full p-2.5 border rounded-lg text-sm pr-16 outline-none"
              />
              <Button className="text-sm font-bold absolute right-[1px] top-[29px]">{t('Apply')}</Button>
            </div>
  
            <div className="space-y-3 pt-3">
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-gray-600">{t('Subtotal')}</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-medium">{totalPrice}</span>
                  <span className="text-gray-500">{t('SAR')}</span>
                </div>
              </div>
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-gray-600">{t('Tax')}</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-medium">50</span>
                  <span className="text-gray-500">{t('SAR')}</span>
                </div>
              </div>
              <div className="flex justify-between text-[15px] pt-1">
                <span className="font-medium">{t('Total')}</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-semibold">{totalPrice + 50}</span>
                  <span className="text-sm text-gray-500">{t('SAR')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  