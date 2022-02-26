import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customerException } from './exceptions/exceptionsCustomer.exception';
import { SerializeCustomer } from './Models/Customer';

@Controller('customers')
export class CustomerController {
    constructor(@Inject('CUSTOMER_SERVICE') private readonly CustomerService:CustomerService){}
    @Get("")
    getCustomer(){
        return this.CustomerService.getCustomer()
    }

    //To exclude the password 
    @Get("/ex")
    getCustomerExc(){
        return this.CustomerService.getCustomerExclude()
    }
    @Get("/customerName/:name")
    getCustomerByName(@Param("name")name:string){
       const customer =  this.CustomerService.getCustomerByName(name)
       if(customer) return customer;
       else throw new HttpException("No Customer Found !!!",HttpStatus.BAD_REQUEST)
    }


    //Custom Exception
    @UseInterceptors(ClassSerializerInterceptor)
    @Get('customerId/:id')
    getById(
        @Param("id",ParseIntPipe) id:number
    ){
        const customer = this.CustomerService.getCustomerById(id)
        if(customer) return new SerializeCustomer(customer);
        else throw new customerException()
    }

}
