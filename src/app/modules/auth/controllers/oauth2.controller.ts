import { Controller } from '@/libs/framework/decorators';
import { Get } from '@/libs/framework/decorators/http/methods';

import { Oauth2Service } from '../services';

@Controller('auth')
export class Oauth2Controller {
  constructor(private readonly service: Oauth2Service) {}

  @Get('google')
  async requestGoogleOauth2(): Promise<any> {
    const response = await this.service.requestGoogleOauth2();
    return response;
  }
}
