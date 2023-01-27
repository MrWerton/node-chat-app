import { User } from "../entities/user";

export interface UserRepository{
    get(id: string): Promise<User | null>
    getAll(): Promise<User[]>
    create(user:User): Promise<void>
    getByEmail(email:string): Promise<User | null>
}