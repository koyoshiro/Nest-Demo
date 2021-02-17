import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findAll():string {
        return "All User's Info New"; // [All User's Info] 暂时代替所有用户的信息
      }
}
