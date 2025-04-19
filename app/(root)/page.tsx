import Personal from "@/components/Personal";
import { SearchBar } from "@/components/SearchBar";
import Trending from "@/components/Trending";


export default async function Home({searchParams} : {searchParams: Promise<{query: string}>}) {
  const query = (await searchParams).query;
  console.log(query)
  return (
    <>
      <div className="w-full min-h-[530px] bg-gray-800 flex flex-col items-center justify-center font-work-sans ">
      <p className="mx-auto my-10 text-3xl text-center text-white font-bold sm:text-6xl sm:font-extrabold">Research Smarter, Discover Faster.</p>
      <div className="my-4">
       <SearchBar query={query} />
      </div>
      </div>
      <div className='w-full flex flex-col p-7 font-work-sans'>
        <p className="text-3xl font-extrabold">Trending Articles</p>
        <div className="w-full my-5">
          <Trending/>
        </div>
      </div>
      <div className='w-full flex flex-col p-7 font-work-sans'>
        <p className="text-3xl font-extrabold">Articles For You</p>
        <div className="w-full my-5">
          <Personal/>
        </div>
      </div>
    </>
  );
}
