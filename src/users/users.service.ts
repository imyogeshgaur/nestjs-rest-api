import { Injectable } from '@nestjs/common';
import { createUserDto } from './dtos/createUser.dto';
import { User } from './model/User';

@Injectable()
export class UsersService {
//Using DTO(DATA TYPE OBJECT)

  users=[
    {
     id:1,
     email:"yogeshgaur@gmail.com",
     name:"Yogesh Gaur"
    },
    {
     id:2,
     email:"rameshgaur@gmail.com",
     name:"Ramesh Gaur"
    },
    {
     id:3,
     email:"hiteshgaur@gmail.com",
     name:"Hitesh Gaur"
    }
]

//Using Interface (used while connecting DB)
//   private users:User[]=[
//     {
//      id:1,
//      email:"yogeshgaur@gmail.com",
//      name:"Yogesh Gaur"
//     },
//     {
//      id:2,
//      email:"rameshgaur@gmail.com",
//      name:"Ramesh Gaur"
//     },
//     {
//      id:3,
//      email:"hiteshgaur@gmail.com",
//      name:"Hitesh Gaur"
//     }
// ]
    findAllUser(){
      return this.users
    }
    finduserById(id:number){
      return this.users.find((user)=>
        user.id === id)
    }
    createUser(userDto:createUserDto){
      this.users.push(userDto)
    }
}
