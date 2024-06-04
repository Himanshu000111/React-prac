import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from './Button';
import Input from './Input';
import RTE from './RTE';
import Select from './Select';
import database_service from '../appwrite/Database_Service';
import bucket_service from '../appwrite/Bucket_Service';

function PostForm({post}) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const Navigate = useNavigate()
    const UserData = useSelector((state) => state.auth.UserData);

    const Submit = async(data) => {
        if(post) {
            const file = data.image[0] ? await bucket_service.uploadFile(data.image[0]) : null;

            if(file) {
                bucket_service.deleteFile(post.featuredImage);
            }

            const dbPost = await database_service.updatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if(dbPost) {
                Navigate(`/post/$(dbPost.$id)`)
            }
        }
        else {
            const file = data.image[0] ? await bucket_service.uploadFile(data.image[0]) : "undefined"
            if(file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await database_service.createPost({...data, userId: UserData.$id});
                if(dbPost) {
                    Navigate(`post/${dbPost.$id}`);
                }
            } 
        }
    }
  return (
    <div>

    </div>
  )
}

export default PostForm