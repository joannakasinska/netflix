import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelloDto } from './dto/hello.dto';

@Injectable()
export class HelloService {
  constructor(protected httpClient: HttpService) {}

  getData(): Observable<HelloDto> {
    return this.httpClient.get('https://www.mecallapi.com/api/users').pipe(
      map((response) => ({
        data: response.data,
      })),
    );
  }
}
