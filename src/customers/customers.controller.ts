import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return await this.customersService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':cpf')
  async findOne(@Param('cpf') cpf: string) {
    return await this.customersService.findOne(cpf);
  }
}
