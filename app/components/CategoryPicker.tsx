"use client";
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { UseFormReturn } from 'react-hook-form'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Props {
  form: UseFormReturn<{
    username: string;
    email: string;
    phone: number;
    project_type: string;
  }, any, undefined>
}

const Dropdown = ({ form }: Props) => {
  const dropdownDetail = ["Construction", "Consultation", "Project Management", "Real Estate"];
  const [type, setType] = useState(dropdownDetail[0])
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex flex-col gap-3 w-full'>
      <label className='text-gray-500 text-[14px] capitalize' htmlFor="project_type">Select Project Category</label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button onClick={() => setIsOpen(true)} className='w-full p-3 py-5 flex items-center justify-between' variant="outline">
            <span>{type}</span>
            {isOpen === true ? <ChevronUp />: <ChevronDown />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={type} onValueChange={setType}>
            {
              dropdownDetail.map((index) => (
                <DropdownMenuRadioItem key={index} onClick={() => {
                  form.setValue("project_type", index)
                  setIsOpen(false)
                }} value={index}>{index}</DropdownMenuRadioItem>
              ))
            }
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default Dropdown
