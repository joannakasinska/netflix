import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { forkJoin, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelloDto } from '../../modules/hello/dto/hello.dto';
import { HelloService } from '../../modules/hello/hello.service';
import { Dto } from './dto/start.dto';

@Injectable()
export class StartService {
  public constructor(
    protected httpClient: HttpService,
    private readonly helloService: HelloService,
  ) {}

  public getStartPage(): Observable<Dto> {
    const helloStream = this.helloService.getData();

    return forkJoin({ data: from(helloStream).pipe(map(({ data }: HelloDto) => data))});
  }
}
