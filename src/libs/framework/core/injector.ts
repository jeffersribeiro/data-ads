export class Injector {
  private static providers = new Map();

  static registerProviders(providers: any[]) {
    providers.forEach((provider) => {
      const instance = new provider();
      this.providers.set(provider, instance);
    });
  }

  static getProvider(provider: any) {
    return this.providers.get(provider);
  }
}
