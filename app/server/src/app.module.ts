import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { observeOptions } from './observe.config.js';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: observeOptions ? [ObserveModule.forRoot(observeOptions)] : [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
