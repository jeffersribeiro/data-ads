import { Routes } from './router.interface';

export class DynamicRouterModule {
  register(routes: Routes) {
    console.log(routes);
  }
}

export const RouterModule = new DynamicRouterModule();
