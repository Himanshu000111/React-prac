import config from "../config/Config";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(config.appwriteEndpoint)
        .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount (email, password, name) {
        try {
            const createAcc = await this.account.create(ID.unique(), email, password, name);
            if(createAcc){
                //we can also call login method here
                return this.createLogIn(email, password)
            }
            else {
                return createAcc
            }
        }
        catch (error) {
            throw error;
        }

    }

    async createLogIn (email, password) {
        try{
            return await this.account.createEmailSessions(email, password)
        }
        catch(error){
            throw error
        }
    }

    async createLogOut () {
        try{
            return await this.account.deleteSessions()
        }
        catch(error){
            throw error
        }
    }

    async getUserAcc () {
        try{
            return await this.account.get();
        }
        catch(error) {
            throw error
        }

        return null;
    }
}


const authservice = new AuthService()
export default authservice 