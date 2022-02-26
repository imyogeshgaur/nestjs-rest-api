import { IsNotEmpty, IsNumber } from "class-validator";

export class createAdressDto{
    @IsNotEmpty()
    line1:string;

    line2:string;

    @IsNumber()
    zip:number;

    @IsNotEmpty()
    city:string
    
    @IsNotEmpty()
    state:string;
}