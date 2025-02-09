'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function Select({ items }: { items: string[] }) {
  const [selectedItem, setSelectedItem] = useState<null | string>(null)
  const [isActiveSelect, setIsActiveSelect] = useState(false)

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName)
    setIsActiveSelect(false)
  }

  return (
    <div className="relative" role="combobox" aria-expanded={isActiveSelect}>
      <button
        onClick={() => {
          setIsActiveSelect(!isActiveSelect)
        }}
        aria-haspopup="listbox"
        aria-labelledby="select-label"
        className="flex w-[200px] cursor-pointer items-center rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      >
        <div className="mx-auto flex items-center">
          {selectedItem === null ? 'Select' : selectedItem}
          <FaChevronDown
            style={{ transform: `rotate(${isActiveSelect ? '180deg' : '0'})` }}
            className={'ml-3 h-4 w-4 transition-transform ease-in-out'}
          />
        </div>
      </button>
      <div
        style={{
          top: isActiveSelect ? '80px' : '50px',
          opacity: isActiveSelect ? '1' : '0',
          visibility: isActiveSelect ? 'visible' : 'hidden',
        }}
        role="listbox"
        aria-labelledby="select-label"
        className="absolute left-0 top-[70px] w-[200px] rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
      >
        {items.map((item, index) => {
          let borderRadius = ''

          if (index === 0) {
            borderRadius = 'rounded-t-[5px]'
          } else if (index === items.length - 1) {
            borderRadius = 'rounded-b-[5px]'
          }

          return (
            <button
              key={index}
              onClick={() => {
                handleItemClick(item)
              }}
              aria-selected={selectedItem === item}
              className={`bg-[#bc95d4] ${borderRadius} block w-full border-b-2 border-black px-5 py-3 hover:bg-[#b482d3]`}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}
