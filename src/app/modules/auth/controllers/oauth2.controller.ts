import { Oauth2Service } from '../services';

export class Oauth2Controller {
  constructor(private readonly service: Oauth2Service) {}

  async requestGoogleOauth2(): Promise<any> {
    const response = await this.service.requestGoogleOauth2();
    return response;
  }
}
