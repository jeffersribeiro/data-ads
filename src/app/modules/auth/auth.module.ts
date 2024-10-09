import { AxiosClient, HttpClient } from '@/libs/http';
import { Module } from '@/libs/framework/decorators';
import { UserRepository } from '@/app/database/repositories';

import { Oauth2Service } from './services';
import { Oauth2Controller } from './controllers';
import { Repository } from '@/libs/database/repositories';

@Module({
  controllers: [
    {
      provide: Oauth2Controller,
      useFactory: (service: Oauth2Service) => new Oauth2Controller(service),
      inject: [Oauth2Service],
    },
  ],
  providers: [
    {
      provide: Oauth2Service,
      useFactory: (
        httpClient: HttpClient,
        repository: Repository,
      ): Oauth2Service => new Oauth2Service(httpClient, repository),
      inject: [AxiosClient, UserRepository],
    },
  ],
})
export class AuthModule {}
