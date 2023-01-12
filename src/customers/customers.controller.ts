import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';

import { Customer } from '../database/entities/customer.entity';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return await this.customersService.create(createCustomerDto);
  }

  @Get()
  async findAllPaginated(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return await this.customersService.findAllPaginated(page, limit);
  }

  @Get(':cpf')
  async findOne(@Param('cpf') cpf: string): Promise<Customer> {
    return await this.customersService.findOne(cpf);
  }
}
