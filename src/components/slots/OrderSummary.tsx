export function OrderSummary() {
    return (
      <div className="p-8 bg-white w-full md:h-screen mt-5 md:mt-0">
        <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-[15px]">Bright Polishing</h3>
              <p className="text-sm text-gray-500">Service Polishing</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium">250</span>
              <span className="text-sm text-gray-500">SAR</span>
            </div>
          </div>
  
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-[15px]">Protection Film</h3>
              <p className="text-sm text-gray-500">protection</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-medium">250</span>
              <span className="text-sm text-gray-500">SAR</span>
            </div>
          </div>
  
          <div className="pt-6 border-t space-y-6">
            <div className="flex justify-between">
              <p className="text-sm text-gray-600 mb-2">Date</p>
              <p className="font-medium">Wed 20 Nov 2024 12:30 AM</p>
            </div>
  
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter Voucher Code"
                className="w-full p-2.5 border rounded-lg text-sm"
              />
            </div>
  
            <div className="space-y-3 pt-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-medium">500</span>
                  <span className="text-gray-500">SAR</span>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-medium">50</span>
                  <span className="text-gray-500">SAR</span>
                </div>
              </div>
              <div className="flex justify-between text-[15px] pt-3">
                <span className="font-medium">Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-medium">550</span>
                  <span className="text-sm text-gray-500">SAR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  