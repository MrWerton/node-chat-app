import { PrismaClient } from "prisma/prisma-client";
import { prisma } from "../../../core/database/prisma_client";
import { User } from "../entities/user";
import { UserRepository } from "./user_repository";

export class UserRepositoryImp implements UserRepository{
    private _client: PrismaClient;
    constructor(){
        this._client = prisma
    }
    async getByEmail(email: string): Promise<User | null> {
        const user = await this._client.user.findFirst({where:{
            email: email
        }})

        if(user){
            const {email, id, name, password, photo_url} = user;

            const userToEntity = User.create({email, name, password,photo_url}, id);
            return userToEntity;
        }
        return null;
    }
   
  
   async getAll(): Promise<User[]> {
        const users = await this._client.user.findMany();

        const usersToEntity = users.map(user => {
            const {email, id, name, password, photo_url} = user;
            return User.create({email, name, password, photo_url}, id)
        })

        return usersToEntity;
    }
    async create(user: User): Promise<void> {
        const {email,name, password,photo_url} = user.data;
        const id = user.id;
        
        await this._client.user.create({
            data: {
                email, name,password,photo_url,id
            }
        })
    }
}