import { User } from "../entities/user";

export interface UserRepository{
    get(): Promise<User | undefined>
    getAll(): Promise<User[]>
    create(user:User): Promise<void>
}