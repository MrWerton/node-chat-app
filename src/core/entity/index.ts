abstract class Entity<T>{
    public props: T
    public id?: string

    constructor(props: T, id?:string){
        this.id = id;
        this.props = props;
    }

}