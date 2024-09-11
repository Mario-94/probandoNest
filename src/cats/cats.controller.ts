import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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


//Esto me permite tener ultiples dominios o subdominios en la misma aplicacion de nest
@Controller({host:'admin.example.com'})
export class  AdminController {
    @Get()
    index():string{
        return "Admin page";
    }
}

// Realizando una peticion post, utilizando una estructura para mi clasecon createCatDto, es como tipar la informacion o darle los parametros que necesito y el tipo de dato que espero
export  class createCatDto{
    name:string;
    age:number;
    bread:string;

}
@Controller('cats')
export class DataCatsController {
    @Post()
    createCat(@Body() createCatDto: createCatDto): string {
        return `Hola ${createCatDto.name} tienes ${createCatDto.age} años`;
    }
}