import React from "react";
import PostCard from "./PostCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Trending = async () => {
  const res = await fetch(
    "http://localhost:8000/api/trending/recommendations",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return (
    <Carousel className="w-[70%] sm:w-[90%] flex items-center justify-center mx-auto">
      <CarouselContent>
        {data.map(
          (
            item: { title: string; paper_id: string; trending_score: number },
            index: number
          ) => (
            <CarouselItem
              key={item.paper_id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <PostCard
                title={item.title}
                paper_id={item.paper_id}
                index={index + 1}
              />
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Trending;
