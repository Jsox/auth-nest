import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // app.use(csurf());

  app.use(helmet());

  app.use(cookieParser('qdew4gha'));

  await app.listen(process.env.PORT || 3400);
}
bootstrap();
