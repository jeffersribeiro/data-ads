import { Repository } from '@/libs/database/repositories';
import { Injectable } from '@/libs/framework/decorators';

import { User } from '../entities';

@Injectable()
export class UserRepository extends Repository {
  async findOneByEmail(email: string): Promise<User | null> {
    const user = await this.findOne({ where: { email } });
    return user;
  }
}
