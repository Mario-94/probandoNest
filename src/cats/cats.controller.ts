import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly appService:AppService){}
    @Get()
    getHelloCat(): string{
        return "Este es el controlador para getHelloCats";
    }

}

@Controller('gatos')
export class GatosController{
constructor(private readonly appServices:AppService){}
@Get()
getHolaGatos():string{
    return "esta es la ruta de getHolaGatos";
}
}
