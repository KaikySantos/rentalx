/* eslint-disable prettier/prettier */
import { container } from "tsyringe";

import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpectificationsRepository } from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<CategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpectificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)
