import { routes } from '@/router';
import { Module } from '@/libs/framework/decorators';
import { RouterModule } from '@/libs/framework/server/routes';

import { fileDataSourceConfig } from './configs/data-source';
import { FileOrmModule } from '@/libs/database/orm/files/file.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    RouterModule.register(routes),
    FileOrmModule.forRootAsync(fileDataSourceConfig),

    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
