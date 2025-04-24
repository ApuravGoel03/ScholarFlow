import { SearchBar } from "@/components/SearchBar";
import { cookies } from "next/headers";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface article {
  _id: string;
  title: string;
  abstract: string;
  authors: [{ _id: string; name: string; org: string; orgid: string }];
  doi: string;
  fos: [string];
  keywords: [string];
  lang: string;
  n_citation: number;
  references: [string];
  venue: {
    _id: string;
    name: string;
    raw: string;
  };
  year: number;
}

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  console.log(query);
  const cookieStorage = await cookies();
  const guestId = cookieStorage.get("guest_id")?.value;
  const res = await fetch("http://localhost:8000/api/query/hybrid", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ guest_id: guestId, query: query, top_k: 10 }),
  });
  const data = await res.json();
  return (
    <div className="w-full font-work-sans">
      <div className="max-h-28 w-full p-8 flex items-center bg-gray-300">
        <Link href="/" className="flex left-0">
          <Image
            src="/ScholarFlowLOGO.png"
            alt="logo"
            height={30}
            width={144}
          />
        </Link>
        <div className="mx-auto">
          <SearchBar query={query} />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center text-left px-16 mt-10 font-work-sans">
        {data.data.map((item: article) => {
          return (
            <Link
              href={{ pathname: `/article/${item["_id"]}` }}
              key={item["_id"]}
            >
              <div className="max-w-4xl flex flex-col justify-center my-3">
                <p className="text-xl lg:text-3xl font-bold">{item["title"]}</p>
                <p className="text-lg sm:text-xl font-semibold grid grid-cols-4 lg:grid-cols-6 w-full">
                  {item["authors"].map((author) => {
                    return (
                      <span className="italic mx-3" key={author._id}>
                        {author.name}
                      </span>
                    );
                  })}
                </p>
                <p className="text-sm lg:text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  {item["abstract"]}
                </p>
                <p className="text-sm lg:text-lg font-semibold grid grid-cols-4 sm:grid-cols-6">
                  {item["keywords"].map((keyword, index) => {
                    return (
                      <span className="underline m-1" key={index}>
                        #{keyword}
                      </span>
                    );
                  })}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
