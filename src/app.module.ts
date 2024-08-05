import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GpShopModule } from './gpShop/modules/gpShop.module';
import configuration from './config/configuration';

const ENV_FILE_PATH = '';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // if variable found in multiple files the first one takes precedence
      envFilePath: ['.env', ENV_FILE_PATH, `.env.${process.env.ENV}`],
      load: [configuration],
    }),
    GpShopModule,
  ],
  controllers: [],
})
export class AppModule {}
