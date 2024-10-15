import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';

import { AppModule } from '@/app/app.module';
import { ConfigService } from '@/libs/config';
import { AppFactory } from '@/libs/framework/core';

export default async function bootstrap() {
  const app = await AppFactory.create(AppModule);

  const config = app.get(ConfigService);

  app.use(express.json());

  const port = config.getOrThrow('PORT');

  app.listen(port);
}

bootstrap();
