import express, { Express } from 'express';

class ServerFactory {
  constructor(private readonly server: Express) {}

  listen(port: number) {
    const startMessage = `Project started successfully at http://localhost:${port}`;

    this.server.listen(port, () => console.log(startMessage));
  }

  use(handler: any) {
    this.server.use(handler);
  }

  get(service: any) {
    return new service();
  }
}

class AppFactory {
  private readonly app: Express;

  constructor() {
    this.app = express();
  }

  create(module: any): ServerFactory {
    console.log(module);
    return new ServerFactory(this.app);
  }
}

export const Factory = new AppFactory();
