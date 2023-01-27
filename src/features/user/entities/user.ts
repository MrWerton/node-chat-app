import {randomUUID} from 'node:crypto'

export class User{
    id: string;
    name: string;
    email: string;
    password: string;
    photo_url: string;

    constructor(){
        if(!this.id){
            this.id = randomUUID()
        }
    }
}
