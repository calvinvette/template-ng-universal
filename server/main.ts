import { enableProdMode } from '@angular/core';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import {Logger} from '@nestjs/common';

enableProdMode();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('api');
  await app.listen(PORT);
  Logger.log(`🚀 Listening on port ${PORT}`);
}
bootstrap();
