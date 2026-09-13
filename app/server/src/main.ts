import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { observeOptions } from './observe.config.js';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    observeOptions ? { instrument: ObserveInstrument } : {},
  );
  await app.listen(process.env.PORT ?? 3001, '127.0.0.1');
}
await bootstrap();
