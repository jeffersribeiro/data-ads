import { User } from '@/app/database/entities';
import { UserRepository } from '@/app/database/repositories';
import { HttpClient } from '@/libs/http';

export class Oauth2Service {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly repo: UserRepository,
  ) {}

  async requestGoogleOauth2(): Promise<void> {
    const response = await this.httpClient.request({
      method: 'GET',
      url: 'https://api.google.com/',
      body: {},
    });

    console.log(response);

    const user = new User();

    user.email = 'email@google.com';
    user.name = 'John';
    user.password = 'password';

    await this.repo.save(user);
  }
}
