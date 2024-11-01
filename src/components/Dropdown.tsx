'use client'

import { Car } from '@/types/CarType';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react';

interface FIlterType {
  Cars?: Car[];
  years?: string[];
  dropdownTitle: string | number;
  setCarYear?: React.Dispatch<React.SetStateAction<string | number>>;
  setCarMakeId?: React.Dispatch<React.SetStateAction<string | number>>
}

const Dropdown: React.FC<FIlterType> = ({ Cars, years, dropdownTitle, setCarYear,setCarMakeId }) => {

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {Cars && (
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {dropdownTitle}
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
        )}
        {years && (
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {dropdownTitle}
            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
        )}
      </div>

      <MenuItems
        transition
        className="w-full absolute right-0 z-10 mt-2 w-56 max-h-40 overflow-y-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >

        {Cars && setCarMakeId && Cars.map(car => (
          <div className="py-1" key={car.MakeId}>
            <MenuItem>
              <a
                href="#"
                onClick={() => setCarMakeId((car.MakeId).toString())}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
              >
                {car.MakeName}
              </a>
            </MenuItem>
          </div>
        ))}
        
        {years && setCarYear &&  years.map(year => (
          <div className="py-1" key={year}>
          <MenuItem>
            <a
              href="#"
              onClick={() => setCarYear(year)}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:forced-color-adjust-none data-[focus]:forced-colors:bg-[Highlight] data-[focus]:forced-colors:text-[HighlightText]"
            >
              {year}
            </a>
          </MenuItem>
        </div>
        ))}
      </MenuItems>
    </Menu>
  )
}

export default Dropdown;