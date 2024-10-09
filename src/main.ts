import 'dotenv/config';
import express from 'express';

import { AppModule } from '@/app/app.module';
import { ConfigService } from '@/libs/config';
import { Factory } from '@/libs/framework/core';

export default function bootstrap() {
  const app = Factory.create(AppModule);

  const config = app.get(ConfigService);

  app.use(express.json());

  const port = config.getOrThrow('PORT');

  app.listen(port);
}
bootstrap();
