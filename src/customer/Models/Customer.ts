import { Exclude } from "class-transformer"

export interface Customer{

    id:number;
    name:string;
    password:string
}

//Excluded serialized class

export class SerializeCustomer{
    id:number;
    name:string;
    
    @Exclude()
    password:string;

    constructor (partial: SerializeCustomer){
        Object.assign(this,partial)
    }
}