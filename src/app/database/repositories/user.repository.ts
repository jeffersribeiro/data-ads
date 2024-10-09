import { Repository } from '@/libs/database/repositories';
import { User } from '../entities';

export class UserRepository extends Repository {
  async findOneByEmail(email: string): Promise<User | null> {
    const user = await this.findOne({ where: { email } });
    return user;
  }
}
