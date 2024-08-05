import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(input: any) {
    const { error, value } = this.schema.validate(input, {
      abortEarly: false,
      allowUnknown: true,
    });
    if (error) {
      throw new BadRequestException(error.message);
    }
    return value;
  }
}
