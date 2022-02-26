import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import {SerializeCustomer, Customer } from './Models/Customer';

@Injectable()
export class CustomerService {
   private customers:Customer[] =[
       {
        id:1,
       name:"Yogesh",
       password:"yogesh"
       },
       {
        id:2,
       name:"Mukesh",
       password:"mukesh"
       },
       {
        id:3,
       name:"Ramesh",
       password:"ramesh"
       }
   ]
   getCustomer(){
       return this.customers;
   }

   //To Exclude the password
   getCustomerExclude(){
       return this.customers.map((customer)=>plainToClass(SerializeCustomer,customer))
   }
   
    getCustomerByName(name:string){
        return this.customers.find((customer)=>customer.name ===  name)
   }

   getCustomerById(id:number){
       return this.customers.find((user)=>user.id === id)
   }
}
