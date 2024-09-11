import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController, CatsController, DataCatsController, GatoController, GatosController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController,GatosController,GatoController,AdminController, DataCatsController],
  providers: [AppService],
})
export class AppModule {}
