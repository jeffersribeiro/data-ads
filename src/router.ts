import { Routes } from '@/libs/framework/server/routes';
import { UserModule } from '@/app/modules/user/user.module';

export const routes: Routes = [
  {
    path: '/api/users',
    module: UserModule,
  },
];
