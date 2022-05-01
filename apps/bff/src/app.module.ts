import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './modules/hello/hello.module';
import { LayoutModule } from './modules/layout/layout.module';
import { StrapiModule } from './modules/strapi/strapi.module';
import { StartModule } from './views/start/start.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: process.env.NODE_ENV === 'production',
            envFilePath: ['.env.development', '.env.production'],
            validationSchema: Joi.object({
                NODE_ENV: Joi.string().valid('local', 'development', 'production').required(),
                PORT: Joi.number().required()
            })
        }),
        HelloModule,
        StrapiModule,
        StartModule,
        LayoutModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
