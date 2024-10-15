import 'reflect-metadata';
import { User } from '@/app/database/entities';
import { Controller } from '@/libs/framework/decorators';
import { Params } from '@/libs/framework/decorators/http';
import { Get } from '@/libs/framework/decorators/http/methods';

import { UserService } from '../services/user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/find-by-email')
  async findOneByEmail(@Params('email') email: string): Promise<User> {
    const result = await this.service.findOneByEmail(email);
    return result;
  }
}
