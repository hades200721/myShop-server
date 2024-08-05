import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { BaseForecastParams, ForecastResponse } from '../types';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class HistoricalForecast {
  private readonly url: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    const historicalForecastBasUrl = this.configService.get<string>(
      'historicalForecast.baseUrl',
    );
    this.url = `${historicalForecastBasUrl}/products`;
  }

  async fetchDailyHistoricalForecast(): Promise<ForecastResponse> {
    const response = await firstValueFrom(
      this.httpService.get(this.url).pipe(
        catchError((error: AxiosError) => {
          console.error(error);
          throw 'An error happened!';
        }),
      ),
    );
    return this.buildDailyResponse(response);
  }

  private buildDailyResponse = (response): ForecastResponse => {
    return response.data;
  };
}
