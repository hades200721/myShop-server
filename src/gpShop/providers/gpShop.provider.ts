import { Injectable } from '@nestjs/common';
import { HistoricalForecast } from '../api/historical.forecast';

@Injectable()
export class GpShopProvider {
  constructor(private historicalForecast: HistoricalForecast) {}

  async getProducts() {
    return this.historicalForecast.fetchDailyHistoricalForecast();
  }
}
