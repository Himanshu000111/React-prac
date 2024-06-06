import React, {useState} from 'react'
import database_service from '../appwrite/Database_Service'
import { Container, PostCard } from '../components'

function AllPostsPage() {

    const [posts, setPosts] = useState([])
    database_service.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })

  return (
    <div className='w-full py-8'>
        <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => {
                <div className='p-2 w-1/4' key={post.$id}>
                    <PostCard {...post} />
                </div>
            })}
            </div>
        </Container>
    </div>
  )
}

export default AllPostsPage