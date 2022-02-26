import { HttpException, HttpStatus } from "@nestjs/common";


export class customerException extends HttpException{
    constructor(msg?:string,status?:HttpStatus){
        super(msg||"User not Found!!",status||HttpStatus.BAD_REQUEST)
    }
}