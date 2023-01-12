import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  LoggerService,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Repository } from 'typeorm';

import { Customer } from '../database/entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CpfHandler } from '../utils/cpfHandler';

@Injectable()
export class CustomersService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,

    private readonly cpfHandler: CpfHandler,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    try {
      const { cpf } = createCustomerDto;
      const customerExists = await this.findOneWithCpf(cpf);

      if (customerExists) {
        throw new BadRequestException(
          `Customer with this cpf: ${cpf} already exists.`,
        );
      }

      const newCustomer = this.customersRepository.create(createCustomerDto);
      await this.customersRepository.save(newCustomer);

      return await this.findOneWithCpf(newCustomer.cpf);
    } catch (error) {
      this.logger.error(error);

      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAllPaginated(page: number, limit: number) {
    try {
      const [customers, count] = await this.customersRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
      });

      const result = {
        count,
        page: page,
        totalPages: Math.ceil(count / limit),
        customers,
      };

      return result;
    } catch (error) {
      this.logger.error(error);

      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(cpf: string): Promise<Customer> {
    try {
      const customer = await this.findOneWithCpf(cpf);

      if (!customer) {
        throw new NotFoundException(
          `Customer with this cpf: ${cpf} not found.`,
        );
      }

      return customer;
    } catch (error) {
      this.logger.error(error);

      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOneWithCpf(cpf: string): Promise<Customer> {
    try {
      const customer = await this.customersRepository.findOne({
        where: { cpf },
      });

      return customer;
    } catch (error) {
      this.logger.error(error);

      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
