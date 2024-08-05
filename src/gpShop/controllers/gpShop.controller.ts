import { Controller, Get, UsePipes } from '@nestjs/common';
import { GpShopProvider } from '../providers/gpShop.provider';
import { JoiValidationPipe } from '../../pipe/joi.validation.pipe';
import { ForeCastInputValidationSchema } from '../types';

@Controller('gpShop')
export class GpShopController {
  constructor(private readonly gpShopProvider: GpShopProvider) {}

  @Get('/products')
  @UsePipes(new JoiValidationPipe(ForeCastInputValidationSchema))
  async getProducts() {
    return this.gpShopProvider.getProducts();
  }
}
