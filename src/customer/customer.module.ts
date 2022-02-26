import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  controllers: [CustomerController],
  providers:[{
    provide:"CUSTOMER_SERVICE",
    useClass:CustomerService,
  }]
})
export class CustomerModule {}
