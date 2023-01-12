import { Controller, Get, Post, Body, Param } from '@nestjs/common';

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
  async findAll() {
    return await this.customersService.findAll();
  }

  @Get(':cpf')
  async findOne(@Param('cpf') cpf: string): Promise<Customer> {
    return await this.customersService.findOne(cpf);
  }
}
