import Link from 'next/link'
import React from 'react'

const PostCard = ({paper_id, title, index} : {paper_id?: string, title: string, index?: number}) => {
  return (
    <div>
      <Link href={`/article/${paper_id}`}>
        <div className='flex'>
            <div>
                {index && <p className='text-2xl sm:text-5xl font-bold text-gray-500'>{index }</p> }
            </div>
            <div className='flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4 m-2 hover:shadow-lg transition-shadow duration-300'>
            <h2 className=' text-sm sm:text-lg font-bold'>{title}</h2>
            {paper_id && <p className='text-gray-600 text-lg'>Paper ID: {paper_id}</p>}
            </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
