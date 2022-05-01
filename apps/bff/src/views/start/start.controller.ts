import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { StartDto } from './dto/start.dto';
import { StartService } from './start.service';

@Controller('/api/start')
export class StartController {
    public constructor(private readonly service: StartService) {
    }

    @Get()
    public getStartPage(): Observable<StartDto> {
        return this.service.getStartPage();
    }
}
