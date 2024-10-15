export interface RouteTree {
  path: string;
  module?: any;
  children?: RouteTree[];
}

export interface RouterOptions {
  routes: { path: string; controller: any }[];
}

export type Routes = RouteTree[];
