import express, { Express } from 'express';

const server: Express = express();

class Server {
  listen(port: number) {
    const startMessage = `Project started successfully at http://localhost:${port}`;

    server.listen(port, () => console.log(startMessage));
  }

  use(handler: any) {
    server.use(handler);
  }

  get(service: any) {
    return new service();
  }
}

export class AppFactory {
  constructor() {}

  static async create(module: any): Promise<Server> {
    console.log('Initializing application with module:', module.name);

    // Acesse os imports e outras propriedades do módulo através de metadados (similar ao NestJS)
    const moduleMetadata = Reflect.getMetadata('module', module);
    if (moduleMetadata?.imports) {
      console.log('Loading imports:', moduleMetadata.imports);

      // Inicializar os módulos importados
      for (const importedModule of moduleMetadata.imports) {
        await this.initializeModule(importedModule);
      }
    }

    // Inicializa o módulo principal (AppModule)
    const appInstance = new module();
    await appInstance.init?.(); // Chame o método init() caso ele exista
    return new Server();
  }

  private static async initializeModule(module: any) {
    const moduleMetadata = Reflect.getMetadata('module', module);
    if (moduleMetadata) {
      console.log(`Inicializing ${module.name}`);
      const instance = new module();
      await instance.init?.();
    }
  }
}
