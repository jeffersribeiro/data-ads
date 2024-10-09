import { ConfigService } from '@/libs/config';

export const fileDataSourceConfig = {
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    encriptType: config.getOrThrow('DATABASE_ENCRIPT_TYPE'),
    folderName: config.getOrThrow('DATABASE_FOLDER_NAME'),
    username: config.getOrThrow('DATABASE_USERNAME'),
    password: config.getOrThrow('DATABASE_PASSWORD'),
  }),
};
