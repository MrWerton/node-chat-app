import {randomUUID} from 'node:crypto'

export abstract class Entity<T>{
    public data: T
    public id?: string

    constructor(data: T, id?:string){
        this.id = id ?? randomUUID();
        this.data = data;
    }

}