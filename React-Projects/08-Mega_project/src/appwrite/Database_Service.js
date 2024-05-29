import config from "../config/Config";
import { Client, ID, Databases } from "appwrite";

export class Database_Service {

    client =  new Client();
    databases;

    constructor(){
        this.client
        .setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async createPost ({content, featuredImage, status, title, userId, slug}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            }
            catch (error) {
            console.log('Appwrite Service :: createPost :: error', error);
        }
    }

    async updatePost (slug, {content, featuredImage, status, title}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            }
            catch (error) {
            console.log('Appwrite Service :: updatePost :: error', error);
        }
    }

    async deletePost (slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
            }
            catch (error) {
            console.log('Appwrite Service :: deletePost :: error', error);
            return false
        }
    }

    async getPost (slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            }
            catch (error) {
            console.log('Appwrite Service :: getPost :: error', error);
            return false
        }
    }

    async getPosts (queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            )
            }
            catch (error) {
            console.log('Appwrite Service :: getPosts :: error', error);
            return false
        }
    }
}

const database_service = new Database_Service()
export default database_service