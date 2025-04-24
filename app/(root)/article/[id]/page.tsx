"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { handleThumbsDown } from "@/components/utils/handleThumbsDown";
import { handleThumbsUp } from "@/components/utils/handleThumbsUp";
import { Textarea } from "@/components/ui/textarea";
import { getUser } from "@/components/utils/getUser";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { handleComment } from "@/components/utils/handleComment";

interface Author {
  _id: string;
  name: string;
  org: string;
  orgid: string;
}

interface Venue {
  _id: string;
  name: string;
  raw: string;
}

interface ArticleDetails {
  _id: string;
  title: string;
  abstract: string;
  n_citation: number;
  year: number;
  lang: string;
  doi: string;
  authors?: Author[];
  fos?: string[];
  keywords?: string[];
  references?: string[];
  venue?: Venue;
}

interface Recommendation {
  id: string;
  similarity: number;
  details: {
    id: string;
    title: string;
  };
}

interface ApiResponse {
  message: string;
  paper_id: string;
  paper_details: ArticleDetails;
  recommendations: Recommendation[];
}

const Page = () => {
  const params = useParams();
  const id = params.id;

  const [articleDetails, setArticleDetails] = useState<ArticleDetails>({
    _id: "",
    title: "",
    abstract: "",
    n_citation: 0,
    year: 0,
    lang: "",
    doi: "",
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    const fetchArticle = async () => {
      const user_id = await getUser();
      const guest_id = user_id?.guestId;
      const res = await fetch("http://localhost:8000/api/users/log_activity/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: guest_id,
          paper_id: id,
          action: "CLICKED",
        }),
      });
      const data: ApiResponse = await res.json();
      console.log(data);
      setArticleDetails(data.paper_details);
      setRecommendations(data.recommendations);
    };
    fetchArticle();
  }, [id]);

  console.log(id);
  return (
    <div className="w-full p-8 font-work-sans flex flex-col sm:flex-row">
      <div className="w-full sm:w-[75%] p-8 font-work-sans flex flex-col items-center">
        <div className="font-bold sm:font-extrabold text-2xl sm:text-4xl text-center mb-4">
          {articleDetails.title}
        </div>
        {articleDetails.authors && articleDetails.authors.length > 0 && (
          <div className="flex flex-col items-center justify-between w-full my-4">
            <div className="text-lg sm:text-xl font-medium sm:font-semibold inline-flex gap-4">
              {articleDetails.authors.map((author) => (
                <span className="italic" key={author._id}>
                  {author.name}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="font-light text-lg sm:text-2xl mb-4 text-justify">
          {articleDetails.abstract}
        </div>
        <div className="font-bold text-lg sm:text-xl mb-2 w-full text-left">
          Additional Information
        </div>
        <div className="inline-flex gap-4 w-full ml-0 text-wrap ">
          {articleDetails.venue &&
            articleDetails.venue.name &&
            articleDetails.year && (
              <div className="text-sm font-medium sm:text-lg sm:font-bold">
                Published in {articleDetails.venue.name} ({articleDetails.year})
              </div>
            )}
          {articleDetails.doi && (
            <div className="text-sm font-medium sm:text-lg sm:font-bold">
              Doi {articleDetails.doi}
            </div>
          )}
          <div className="text-sm font-medium sm:text-lg sm:font-bold">
            Citations {articleDetails.n_citation}
          </div>
        </div>
        {articleDetails.keywords && articleDetails.keywords.length > 0 && (
          <div className="text-sm sm:text-lg font-medium sm:font-semibold inline-flex w-full ml-0 gap-4">
            {articleDetails.keywords.map((keyword, index) => (
              <span className="underline" key={index}>
                #{keyword}
              </span>
            ))}
          </div>
        )}
        <div className="flex w-full my-4 gap-5">
          <FontAwesomeIcon
            icon={faThumbsUp}
            className=" cursor-pointer text-lg sm:text-3xl"
            onClick={async () => {
              await handleThumbsUp(id);
            }}
          />
          <FontAwesomeIcon
            icon={faThumbsDown}
            className=" cursor-pointer text-lg sm:text-3xl"
            onClick={async () => {
              await handleThumbsDown(id);
            }}
          />
        </div>
        <div className="w-full flex flex-col justify-start">
          <Textarea
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            className="w-full h-22 lg:max-w-[60%] lg:h-44 mb-4 bg-white"
            placeholder="Write your comment here..."
          />
          <Button
            className="w-full lg:max-w-[60%] mb-4"
            onClick={async () => {
              await handleComment(id, comment);
              setComment("");
            }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="font-bold text-xl sm:text-2xl text-center mb-4 w-full sm:w-[25%] p-8 flex flex-col items-center">
        Similar Reads You May Like
        <div className="flex flex-col items-center justify-between w-full my-4">
          {recommendations.map((item) => (
            <PostCard key={item.id} title={item.details.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
