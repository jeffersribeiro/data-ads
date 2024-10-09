export class DynamicFileOrmModule {
  forRootAsync(options: any) {
    console.log(options);
  }
}
export const FileOrmModule = new DynamicFileOrmModule();
