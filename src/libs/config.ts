export class ConfigService {
  getOrThrow(path: keyof NodeJS.ProcessEnv): string {
    const env = process.env[path];

    if (!env) {
      console.error('environment not found: ' + path);
      process.exit(9);
    }
    return env;
  }

  get(path: keyof NodeJS.ProcessEnv): string | undefined {
    const env = process.env[path];

    return env;
  }
}
