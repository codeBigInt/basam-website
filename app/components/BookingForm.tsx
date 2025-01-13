"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FormArray } from '../lib/array/FormArray';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const formSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  phone: z.number().min(10),
  project_type: z.string().min(3),
})

export type FormData = z.infer<typeof formSchema>

interface Props{
  className?: string;
}

const BookingForm = ({className}: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      username: '',
      email: '',
      project_type: ""
    },
    resolver: zodResolver(formSchema)
  })

  const handleSubmit = (data: FormData) => {
    // Handle form submission
    console.log(data)
  }

  return (
    <div className={`max-w-[50%] w-[50%] h-full flex justify-end items-center animate-slide-in ${className}`}>
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(handleSubmit)} 
          className="bg-white shadow-3xl -translate-y-8 flex flex-col gap-3 p-4 lg:p-6 rounded-lg min-h-[90%] w-full md:w-[85%]"
        >
          <h2 className="text-lg capitalize font-semibold">Reach us</h2>
          {FormArray.map((item, index) => (
            <FormField
              key={index}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <div className="w-full">
                  {index === 0 ? (
                    <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value as string}>
                      <FormControl>
                        <SelectTrigger className='h-12'>
                          <SelectValue placeholder="Select Project Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Project Mgmt.">Project Mgmt.</SelectItem>
                        <SelectItem value="Construction">Construction</SelectItem>
                        <SelectItem value="Real-Estate">Real-Estate</SelectItem>
                        <SelectItem value="Consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                  ) : index === 3 ? (
                    <FormItem>
                      <FormLabel className="text-gray-500 text-[14px] capitalize">
                        {item.label}
                      </FormLabel>
                      <div className="flex items-center border rounded-lg pl-3 border-gray-500">
                        <span>+234</span>
                        <input 
                          {...field} 
                          placeholder={item.placeholder} 
                          type={item.type}
                          className="p-3 flex-1 max-w-[80%] outline-none rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </div>
                    <FormMessage />
                    </FormItem>
                  ) : (
                    <FormItem className="flex flex-col gap-3">
                      <FormLabel className="text-gray-500 text-[14px] capitalize">
                        {item.label}
                      </FormLabel>
                      <input 
                        {...field} 
                        placeholder={item.placeholder} 
                        type={item.type}
                        className="p-3 w-full border border-gray-500 rounded-lg focus:ring-1"
                      />
                    <FormMessage />
                    </FormItem>
                  )}
                </div>
              )}
            />
          ))}
          <Button 
            type="submit" 
            className="w-full p-6 bg-[#45355f] hover:bg-[#362944] transition-colors text-white"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}



export default BookingForm;