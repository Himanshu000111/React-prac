import React from 'react'
import bucket_service from '../appwrite/Bucket_Service'
import { Link } from 'react-router-dom'

function PostCard({
    $id,
    title,
    featuredImage
}) {
  return (
    <div>
       <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
            <img src={bucket_service.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
        </div>
        <h2 className='text-xl font-bold'>
            {title}
            </h2>
        </div>
       </Link> 
    </div>
  )
}

export default PostCard