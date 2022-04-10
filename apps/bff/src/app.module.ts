import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './modules/hello/hello.module';
import { StartModule } from './views/start/start.module';

@Module({
  imports: [
    HelloModule,
    StartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
