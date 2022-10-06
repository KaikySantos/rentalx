import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";

// DTO => Data transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private repository: Repository<Category>;

  private static INSTANCE: CategoriesRepository;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
