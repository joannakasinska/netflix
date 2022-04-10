import { HttpModule } from '@nestjs/axios';
import { Module, ModuleMetadata } from '@nestjs/common';
import { HelloService } from '../../modules/hello/hello.service';
import { StartController } from './start.controller';
import { StartService } from './start.service';

export const Metadata: ModuleMetadata = {
  providers: [StartService, HelloService],
  imports: [HttpModule],
  controllers: [StartController],
};

@Module(Metadata)
export class StartModule {}
