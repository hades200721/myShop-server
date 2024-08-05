import process from 'process';

export default () => ({
  historicalForecast: {
    baseUrl: process.env.HISTORICAL_FORECAST_API_BASE_URL || 'https://fakestoreapi.com',
    version: process.env.HISTORICAL_FORECAST_API_VERSION || 'v1',
  },
});