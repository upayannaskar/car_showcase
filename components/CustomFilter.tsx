'use client'

import {Fragment, useState} from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Listbox, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'

const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="w-fit">
      <Listbox
      value={selected}
      onChange={(e) => {
        setSelected(e)
        setFilter(e.value)
      }}
      >
        <div className="relative w-fit z-10">          
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image 
              width={20}
              height={20}
              alt='chevron up down'
              src="/chevron-up-down.svg"
              className='ml-4 object-contain'
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in-duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) => `relative py-2 px-4 cursor-default select-none ${
                    active ? "bg-primary-blue text-white" : "text-gray-900"
                  }`}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${ selected ? "font-medium" : "font-normal" }`}>{option.title}</span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter