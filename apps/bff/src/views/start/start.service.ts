import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { forkJoin, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LayoutDto } from '../../modules/layout/dto/layout.dto';
import { LayoutService } from '../../modules/layout/layout.service';
import { StartDto } from './dto/start.dto';

@Injectable()
export class StartService {
    public constructor(
        protected httpClient: HttpService,
        private readonly layoutService: LayoutService
    ) {
    }

    public getStartPage(): Observable<StartDto> {
        const layoutStream = this.layoutService.getLayout();

        // layoutStream.subscribe(a => console.log('tup:', a));

        return from(layoutStream).pipe(
            map(({ header }) => {
                return {
                    layout: {
                        header
                    }
                };
            })
        );
    }
}
