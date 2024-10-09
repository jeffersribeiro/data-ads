import { User } from '@/app/database/entities';
import { UserRepository } from '@/app/database/repositories';

export class UserService {
  constructor(private readonly repo: UserRepository) {}

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.repo.findOneByEmail(email);

    if (!user) throw new Error('Usuario não encontrado');

    return user;
  }
}
