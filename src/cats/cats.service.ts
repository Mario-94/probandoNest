import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  helloCat()  :string{
    return "Hello cats of services"
  }
}
