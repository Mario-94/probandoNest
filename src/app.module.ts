import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController, GatosController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController,GatosController],
  providers: [AppService],
})
export class AppModule {}
