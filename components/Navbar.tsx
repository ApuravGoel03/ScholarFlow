'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { v4 as uuidv4 } from 'uuid';

import { useEffect, useState } from 'react';


const Navbar = () => {
    const [guestUsername, setGuestUsername] = useState<string | null>(null);
    useEffect(() => {
      const initGuest = async () => {
            const uuid = uuidv4();
            const res = await fetch('/api/users/register-user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ uuid }),
            });
    
            const data = await res.json();
            if (data.guestUsername) {
              setGuestUsername(data.guestUsername);
            }
      };
  
      initGuest();
    }, []);
  return (
    <header className='px-5 py-3 bg-gray-300 text-black flex justify-between font-work-sans'>
      <div className='flex items-center'>
        <Link href='/'>
            <Image src='/ScholarFlowLOGO.png' alt='logo' height={30} width={144}/>
        </Link>
      </div>
        <div className='flex items-center text-sm font-bold sm:text-lg'>
            {guestUsername}
        </div>
    </header>
  )
}

export default Navbar
