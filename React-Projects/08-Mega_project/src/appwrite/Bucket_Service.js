import config from "../config/Config";
import { Client, ID, Storage } from "appwrite";

export class Bucket_service{
 
    client = new Client();
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectId)
        this.bucket = new Storage(this.client)
    }

    async uploadFile (file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBUCKETID,
                ID.unique,
                file,
            )
        } catch (error) {
            console.log("Appwrite Services :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile (fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBUCKETID,
                fileId,
            )
            return true
        } catch (error) {
            console.log("Appwrite Services :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        this.bucket.getFilePreview(
            config.appwriteBUCKETID,
            fileId
        )
    }

}

const bucket_service = new Bucket_service
export default bucket_service