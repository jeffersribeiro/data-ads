import { Module } from '@/libs/framework/decorators';
import { AuthModule } from '@/app/modules/auth/auth.module';

@Module({ imports: [AuthModule] })
export class AppModule {}
