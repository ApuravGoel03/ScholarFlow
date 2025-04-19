import React from 'react'
import PostCard from './PostCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { getUser } from './utils/getUser';
  

const Personal = async () => {
    const user_id = await getUser();
    const guest_id = user_id?.guestId;
    const res = await fetch(`http:localhost:3000/api/user/recommend/${guest_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json();
  return (
    <Carousel className='w-[70%] sm:w-[90%] flex items-center justify-center mx-auto'>
    <CarouselContent >
        {data.recommendations.map((item: {title: string, _id: string},index : number) => (
            <CarouselItem key={item._id} className="md:basis-1/2 lg:basis-1/3"><PostCard  title={item.title} paper_id={item._id} index={index+1} /></CarouselItem>
        ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
    </Carousel>
  )
}

export default Personal
