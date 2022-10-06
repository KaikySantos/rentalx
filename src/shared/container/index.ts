/* eslint-disable prettier/prettier */
import { container } from "tsyringe";

import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

container.registerSingleton<CategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)
