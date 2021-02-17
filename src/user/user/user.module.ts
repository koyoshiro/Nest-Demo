import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {LoggerMiddleware} from '../logger.middleware';

@Module({
    imports:[LoggerMiddleware],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule {
    configure(consumer:MiddlewareConsumer){
        consumer.apply(LoggerMiddleware).forRoutes({path:'user/users',method:RequestMethod.GET})
    }
}
