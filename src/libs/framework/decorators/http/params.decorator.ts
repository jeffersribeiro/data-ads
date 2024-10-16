const PARAMS_METADATA = 'params';

export function Params(paramName?: string): ParameterDecorator {
  return (target: any, propertyKey: any, parameterIndex: any) => {
    const existingParams =
      Reflect.getMetadata(PARAMS_METADATA, target, propertyKey) || [];

    existingParams.push({ index: parameterIndex, name: paramName });

    Reflect.defineMetadata(
      PARAMS_METADATA,
      existingParams,
      target,
      propertyKey,
    );
  };
}
