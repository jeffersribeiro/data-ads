import { Module } from '@/libs/framework/decorators';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { UserRepository } from '@/app/database/repositories';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
