const config = {
  appwriteEndpoint : String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  appwriteDatabaseId : String(import.meta.env.VITE_DATABASE_ID),
  appwriteCollectionId : String(import.meta.env.VITE_COLLECTION_ID),
  appwriteProjectId : String(import.meta.env.VITE_PROJECT_ID),
  appwriteBUCKETID : String(import.meta.env.VITE_BUCKET_ID),
}

export default config