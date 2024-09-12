import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController, CatsController, DataCatsController, GatoController, GatosController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController,GatosController,GatoController,AdminController, DataCatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
