import { Controller } from '@/libs/framework/decorators';
import { Oauth2Service } from '../services';

@Controller()
export class Oauth2Controller {
  constructor(private readonly service: Oauth2Service) {}

  async requestGoogleOauth2(): Promise<any> {
    const response = await this.service.requestGoogleOauth2();
    return response;
  }
}
