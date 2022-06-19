import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LayoutDto } from './dto/layout.dto';
import { LayoutService } from './layout.service';

@Controller('/api/layout')
export class LayoutController {
    public constructor(private readonly layoutService: LayoutService) {
    }

    @Get()
    public getData(): Observable<LayoutDto> {
        return this.layoutService.getLayout();
    }
}
