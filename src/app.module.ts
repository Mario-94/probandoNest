import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController, CatsController, GatoController, GatosController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController,GatosController,GatoController,AdminController],
  providers: [AppService],
})
export class AppModule {}
