import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Dto } from './dto/start.dto';
import { StartService } from './start.service';

@Controller('/api/start')
export class StartController {
  public constructor(private readonly service: StartService) {}

  @Get()
  public getStartPage(): Observable<Dto> {
    return this.service.getStartPage();
  }
}
