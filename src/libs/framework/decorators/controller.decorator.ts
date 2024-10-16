const CONTROLLER_METADATA = 'controller:path';

export function Controller(path?: any): ClassDecorator {
  return (target: any) => {
    Reflect.defineMetadata(CONTROLLER_METADATA, path, target);
  };
}
