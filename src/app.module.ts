import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [UsersModule, CustomerModule],
})
export class AppModule {}
