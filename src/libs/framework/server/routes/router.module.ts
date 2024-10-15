import { getModuleControllers } from '../../decorators';
import { Routes } from './router.interface';

const ROUTER_METADATA = 'router:routes';

export class RouterModule {
  static register(options: Routes) {
    Reflect.defineMetadata(ROUTER_METADATA, options, RouterModule);

    return {
      module: RouterModule,
      controllers: options.map((route) => getModuleControllers(route.module)),
      providers: [],
    };
  }

  static getRoutes() {
    return Reflect.getMetadata(ROUTER_METADATA, RouterModule) || [];
  }
}
