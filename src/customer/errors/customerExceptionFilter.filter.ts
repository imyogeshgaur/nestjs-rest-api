import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";


export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception:HttpException,host:ArgumentsHost){
        console.log(exception.getResponse());
        console.log(exception.getStatus());
        console.log(exception);

        const context  = host.switchToHttp();
        
        
    }
}