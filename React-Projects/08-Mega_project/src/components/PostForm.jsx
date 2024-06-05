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
    };

    const slugTransform = useCallback((value) => {
            if (value && typeof value === "string") return value 
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

            return "";
    }, []);

    React.useEffect(()=> {
        const subscription = watch((value, {name})=> {
            if(name === "title") {
                setValue("slug",slugTransform(value.title),{
                    shouldValidate: true
                });
            }
        });

        return subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);


  return (
    <form onSubmit={handleSubmit(Submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">
        <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={bucket_service.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
  )
}

export default PostForm