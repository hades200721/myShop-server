import Joi from 'joi';

export type ForecastInput = BaseForecastParams;

export type BaseForecastParams = {
  startDate: string;
  endDate: string;
  latitude: number;
  longitude: number;
};

type RatingType = {
  rate: number;
  count: number;
};

export type ForecastResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
};

const dateFormatValidation = Joi.string()
  .strict()
  .optional()
  .pattern(/^\d{4}-\d{2}-\d{2}$/, { name: 'yyyy-mm-dd format' })
  .required();

export const ForeCastInputValidationSchema = Joi.object({
  startDate: dateFormatValidation,
  endDate: dateFormatValidation,
  latitude: Joi.number().required(),
  longitude: Joi.number(),
});
