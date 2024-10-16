const INJECTABLE_METADATA = 'injectable';

export function Injectable(): ClassDecorator {
  return (target: any) => {
    Reflect.defineMetadata(INJECTABLE_METADATA, true, target);
  };
}
