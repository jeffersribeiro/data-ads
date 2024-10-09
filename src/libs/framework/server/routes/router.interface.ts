export interface RouteTree {
  path: string;
  module?: any;
  children?: RouteTree[];
}
export type Routes = RouteTree[];
