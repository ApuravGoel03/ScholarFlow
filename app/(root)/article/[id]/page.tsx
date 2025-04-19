'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { handleThumbsDown } from '@/components/utils/handleThumbsDown';
import { handleThumbsUp } from '@/components/utils/handleThumbsUp';
import { Textarea } from "@/components/ui/textarea"
import { getUser } from '@/components/utils/getUser';
import PostCard from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { handleComment } from '@/components/utils/handleComment';

interface article{
    _id: string,
    title: string,
    abstract: string,
    authors: [{_id: string, name: string, org: string, orgid: string }],
    doi: string,
    fos: [string],
    keywords: [string],
    lang: string,
    n_citation: number,
    references: [string],
    venue: {
        _id: string,
        name: string,
        raw: string,
    },
    year: number,
}

interface recommendation{
    id: string,
    similarity: number,
    details : { id: string, title: string}
}

const Page = () => {
    const params = useParams();
    const id = params.id;


    const [article, setArticle] = useState<article>({
        _id: '', 
        title: '',
        abstract: '',
        authors: [{_id: '', name: '', org: '', orgid: ''}],
        doi: '',
        fos: [''],
        keywords: [''],
        lang: '',
        n_citation: 0,
        references: [''],
        venue: {
            _id: '',    
            name: '', 
            raw: '' 
        },
        year: 0, 
    }
        );
    const [recommendations, setRecommendations] = useState<recommendation[]>([]);
    const [comment, setComment] = useState<string>('');

    useEffect(() => {
        const fetchArticle = async() => {
            const user_id = await getUser();
            const guest_id = user_id?.guestId;
            const res = await fetch('/api/users/log-activity',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user_id: guest_id, paper_id: id, action: "CLICKED"}),
            })
            const data = await res.json();
            setArticle(data.article);
            setRecommendations(data.recommendations);
        }
        fetchArticle()
    },[])
    
    console.log(id)
    return(
    <div className='w-full p-8 font-work-sans flex flex-col sm:flex-row'>
        <div className='w-full sm:w-[75%] p-8 font-work-sans flex flex-col items-center'>
            <div className='font-bold sm:font-extrabold text-2xl sm:text-4xl text-center mb-4'>{article.title}</div>
            <div className='flex flex-col items-center justify-between w-full my-4'>
                <div className='text-lg sm:text-xl font-medium sm:font-semibold inline-flex gap-4'>
                    {article.authors.map((author) => {return (<span className='italic' key={author._id}>{author.name}</span>)})}
                </div>
            </div>
            <div className='font-light text-lg sm:text-2xl mb-4 text-justify'>{article.abstract}</div>
            <div className='font-bold text-lg sm:text-xl mb-2 w-full text-left' > Additional Information </div>
            <div className='inline-flex gap-4 w-full ml-0 text-wrap '>
                <div className='text-sm font-medium sm:text-lg sm:font-bold'>Published in {article.venue.name} ({article.year})</div>
                <div className='text-sm font-medium sm:text-lg sm:font-bold'>Doi {article.doi}</div>
                <div className='text-sm font-medium sm:text-lg sm:font-bold'>Citations {article.n_citation}</div>
            </div>
            <div className='text-sm sm:text-lg font-medium sm:font-semibold inline-flex w-full ml-0 gap-4'>
                    {article.keywords.map((keyword, index) => {return (<span className='underline' key={index}>#{keyword}</span>)})}
            </div>
            <div className='flex w-full my-4 gap-5' >
                <FontAwesomeIcon icon={faThumbsUp} className=' cursor-pointer text-lg sm:text-3xl' onClick={async () => {
                    await handleThumbsUp(id);
                }}/>
                <FontAwesomeIcon icon={faThumbsDown} className=' cursor-pointer text-lg sm:text-3xl' onClick={async () => {
                    await handleThumbsDown(id);
                } } />
            </div>
            <div className='w-full flex flex-col justify-start'>
                <Textarea value={comment} onChange={(e) => {setComment(e.target.value)}} className='w-full h-22 lg:max-w-[60%] lg:h-44 mb-4 bg-white' placeholder='Write your comment here...' />
                <Button className='w-full lg:max-w-[60%] mb-4' onClick={async() => {await handleComment(id, comment)
                    setComment('')
                }} type='submit'>Submit</Button>
                
            </div>
        </div>
        <div className='font-bold text-xl sm:text-2xl text-center mb-4 w-full sm:w-[25%] p-8 flex flex-col items-center'>
            Similar Reads You May Like
            <div className='flex flex-col items-center justify-between w-full my-4'>
                {recommendations.map((item) => {
                    return (
                        <PostCard key={item.id} title={item.details.title} />
                    )
                })}
             </div>   
        </div>
    </div>
  )
}

export default Page
