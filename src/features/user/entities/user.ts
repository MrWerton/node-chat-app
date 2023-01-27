import { Entity } from "../../../core/entity";

interface UserProps{
    name: string;
    email: string;
    password: string;
    photo_url: string;

}

export class User extends Entity<UserProps>{
   
    private constructor(data: UserProps, id?: string){
      super(data, id)
    }

    static create(data: UserProps, id?: string){
        const user = new User(data, id);

        return user;
    }
}
