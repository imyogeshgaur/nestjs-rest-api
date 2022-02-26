import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, ValidateNested} from "class-validator";
import { createAdressDto } from "./createAdress.dto";

export class createUserDto{
    @IsEmail()
    email:string;

    @IsNumber()
    id:number;

    @IsNotEmpty()
    name:string;

    @ValidateNested()
    @Type(()=>createAdressDto)
    @IsNotEmpty()
    address:createAdressDto
}