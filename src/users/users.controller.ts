import { Controller, Get,Param, Res, ParseIntPipe,Req, HttpStatus, Post,HttpException, Body, UsePipes, ValidationPipe} from '@nestjs/common';
import { createUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    //GettingAll Users
    @Get()
    getAllUser(){
        return this.userService.findAllUser()
    }
    //Getting Users by Id
    // 1 Express Way 

    @Get(':id')
    getCusomer(@Param('id',ParseIntPipe) id:number,@Res() res){
        const user = this.userService.finduserById(id);
        if(user){
            res.send(user)
        }else{
            res.status(400).send({"message":"Customer Not Found !!!"})
        }
         
    }
    
    //Nest Js Way
    @Get('/search/:id')
    searchCustomerById(
        @Param('id',ParseIntPipe) id:number){
            const user = this.userService.finduserById(id)
            if(user) return user;
            else throw new HttpException("User not Found",HttpStatus.BAD_REQUEST)
    }


    //Post Request 
    @Post("create")
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto:createUserDto){
        return this.userService.createUser(createUserDto)
    }
}
