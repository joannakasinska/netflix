import { HttpModule } from '@nestjs/axios';
import { Module, ModuleMetadata } from '@nestjs/common';
import { LayoutService } from '../../modules/layout/layout.service';
import { StartController } from './start.controller';
import { StartService } from './start.service';

export const Metadata: ModuleMetadata = {
    providers: [StartService, LayoutService],
    imports: [HttpModule],
    controllers: [StartController]
};

@Module(Metadata)
export class StartModule {
}
