import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GpShopController } from '../controllers/gpShop.controller';
import { GpShopProvider } from '../providers/gpShop.provider';
import { HistoricalForecast } from '../api/historical.forecast';

@Module({
  controllers: [GpShopController],
  providers: [GpShopProvider, HistoricalForecast],
  imports: [HttpModule],
})
export class GpShopModule {}
