const MODULE_METADATA = {
  IMPORTS: 'imports',
  CONTROLLERS: 'controllers',
  PROVDIERS: 'providers',
};

export function Module(metadata: {
  imports?: any[];
  controllers?: any[];
  providers?: any[];
}): ClassDecorator {
  return (target: any) => {
    Reflect.defineMetadata(
      MODULE_METADATA.IMPORTS,
      metadata.imports || [],
      target,
    );
    Reflect.defineMetadata(
      MODULE_METADATA.CONTROLLERS,
      metadata.controllers || [],
      target,
    );
    Reflect.defineMetadata(
      MODULE_METADATA.PROVDIERS,
      metadata.providers || [],
      target,
    );
  };
}

export function getModuleImports(target: any) {
  return Reflect.getMetadata(MODULE_METADATA.IMPORTS, target) || [];
}

export function getModuleControllers(target: any) {
  return Reflect.getMetadata(MODULE_METADATA.CONTROLLERS, target) || [];
}

export function getModuleProviders(target: any) {
  return Reflect.getMetadata(MODULE_METADATA.PROVDIERS, target) || [];
}
