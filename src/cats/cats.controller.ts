import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from 'src/app.service';
// ruta creada con el comando de cli de nest
@Controller('cats')
export class CatsController {
    constructor(private readonly appService:AppService){}
    @Get()
    getHelloCat(): string{
        return "Este es el controlador para getHelloCats";
    }

}
// ruta creada manualmente
@Controller('gatos')
export class GatosController{
constructor(private readonly appServices:AppService){}
@Get()
getHolaGatos():string{
    return "esta es la ruta de getHolaGatos";
}
}
// La diferencia entre crear una ruta manual o con el comando es que estas se agregan directamente en el app module

@Controller('gato')
export class GatoController {
  constructor(private readonly appServices: AppService) {}

  @Get(':id/:texto')  
  getHolaGato(@Param('id') id: string,  @Param('texto') texto: string): string {

    return `Este es el gato: ${id} el texto es ${texto}`;
  }
}

