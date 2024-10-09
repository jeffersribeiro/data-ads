import 'dotenv/config';
import express from 'express';
import { ConfigService } from './libs/config';

export default function bootstrap() {
  const app = express();

  app.use(express.json());

  const config = new ConfigService();

  const port = config.getOrThrow('PORT');

  const startMessage = `Project started successfully at http://localhost:${port}`;

  app.listen(port, () => console.log(startMessage));
}
bootstrap();
