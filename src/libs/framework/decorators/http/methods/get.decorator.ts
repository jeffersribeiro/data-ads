const ROUTE_METADATA = 'route:path';

export function Get(path?: string): any {
  return (target: any, propertyKey: string | symbol) => {
    Reflect.defineMetadata(ROUTE_METADATA, path, target, propertyKey);
  };
}
