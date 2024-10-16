import { Routes } from '@/libs/framework/server/routes';

import { UserModule } from '@/app/modules/user/user.module';
import { AuthModule } from './app/modules/auth/auth.module';

export const routes: Routes = [
  {
    path: '/auth',
    module: AuthModule,
  },
  {
    path: '/users',
    module: UserModule,
  },
];
