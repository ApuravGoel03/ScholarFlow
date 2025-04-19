import Form from 'next/form'
import React from 'react'
import { Search } from 'lucide-react'

export const SearchBar = ({query} : {query?: string}) => {
    return (
      <Form action='/search' scroll={false} className='flex items-center justify-center gap-5 bg-white rounded-full p-4 lg:p-6'>
          <input name='query' defaultValue={query} className='min-w-3 font-semibold text-sm lg:text-lg lg:min-w-2xl flex items-center gap-2 outline-none' placeholder='Search Articles' />
          <div className='flex gap-2 text-black'>
              <button type='submit' className=''>
                  <Search className='size-5 sm:size-8'/>
              </button>
          </div>
      </Form>
    )
  }
