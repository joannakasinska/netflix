import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HelloService } from './hello.service';
import { HelloDto } from './dto/hello.dto';

@Controller('/api/hello')
export class HelloController {
  public constructor(private readonly helloService: HelloService) {}

  @Get()
  public getData(): Observable<HelloDto> {
    return this.helloService.getData();
  }
}
