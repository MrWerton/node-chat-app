import { User } from "../entities/user";

export interface UserRepository{
    getAll(): Promise<User[]>
    create(user:User): Promise<void>
    getByEmail(email:string): Promise<User | null>
}