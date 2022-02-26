import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { validateCustomerMiddleware } from './middleware/validate-user-middleware';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
    //Middleware For Full Controller
    // consumer.apply(validateCustomerMiddleware).forRoutes(UsersController)

    //Middleware For Full Controller excluding post request 
    // consumer.apply(validateCustomerMiddleware).exclude({
    //   path:"/api/users/create",
    //   method:RequestMethod.POST
    // }).forRoutes(UsersController)

    // Middleware For particular route
    consumer.apply(validateCustomerMiddleware).forRoutes({
      path:"/users/search/:id",
      method:RequestMethod.GET
    })
  }
}
