import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FarmersModule } from './farmers/farmers.module';

@Module({
  imports: [
    FarmersModule
  ],
  controllers: [
    AppController
  ],
})
export class AppModule {}
