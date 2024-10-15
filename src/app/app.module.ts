import { routes } from '@/router';
import { Module } from '@/libs/framework/decorators';
import { AuthModule } from '@/app/modules/auth/auth.module';
import { RouterModule } from '@/libs/framework/server/routes';

import { fileDataSourceConfig } from './configs/data-source';
import { FileOrmModule } from '@/libs/database/orm/files/file.module';

@Module({
  imports: [
    RouterModule.register(routes),
    FileOrmModule.forRootAsync(fileDataSourceConfig),
    AuthModule,
  ],
})
export class AppModule {}
