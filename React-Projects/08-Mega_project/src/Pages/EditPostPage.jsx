import React, {useState, useEffect} from 'react'
import { Container, PostForm } from '../components'
import { useParams, useNavigate } from 'react-router-dom'
import database_service from '../appwrite/Database_Service'

function EditPostPage() {

    const [post, setPost] = useState()
    const {slug} = useParams()
    const Navigate = useNavigate()

    useEffect(() => {database_service.getPost(slug).then((post)=> {
        if(post){
            setPost(post)
        }
        else {
            Navigate(`/`)
        }
    })}, [slug, Navigate])

  return post ? (
    <div>
        <Container>
            <PostForm post= {post}/>
        </Container>
    </div>
  ) : null
}

export default EditPostPage