'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/libs/utils'
import { useTranslations } from 'next-intl'

export function NavMenu() {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ['HOME', 'SERVICES', 'ABOUT US', 'CONTACT']

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 z-50 transition-opacity duration-300 lg:w-[25%]",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
        <nav className="flex flex-col items-start lg:items-center p-8 space-y-6">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-sm hover:text-gray-300 transition-colors"
            >
              {t(item)}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

