import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorsService } from 'src/common/services/errors/errors.service';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly errorService: ErrorsService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      // eslint-disable-next-line prefer-const
      let { name, status, ...CreateProductDto } = createProductDto;
      const product = this.productRepository.create({
        name,
        status,
        ...CreateProductDto,
      });
      await this.productRepository.save(product);
      return { product };
    } catch (error) {
      return this.errorService.handlignError(error);
    }
  }

  findAll() {
    const products = this.productRepository.find({});
    return products;
  }

  async findToKey(key: string) {
    let products: Product[];
    const QueryBuilder = this.productRepository.createQueryBuilder('prod');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
    products = await QueryBuilder.where(
      'prod.name = :name or prod.status = :status',
      {
        name: key.replace(' ', '_').toLowerCase(),
        status: key.replace(' ', '_').toLowerCase(),
      },
    ).getMany();
    return products;
  }

  // eslint-disable-next-line
  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
