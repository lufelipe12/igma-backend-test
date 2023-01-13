import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Customer } from '../database/entities/customer.entity';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomerCreatedResponseDoc } from '../docs/customers/customerCreatedResponse.doc';
import { CustomerCreateRequestDoc } from '../docs/customers/createCustomerRequest.doc';
import { CustomerEntityDoc } from '../docs/entities/customer.entity.doc';
import { GetAllCustomersPaginatedDoc } from '../docs/customers/getAllCustomersResponse.doc';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new customer.',
    description: 'Create a new customer with name, cpf and birth date.',
  })
  @ApiBody({
    type: CustomerCreateRequestDoc,
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CustomerCreatedResponseDoc,
  })
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return await this.customersService.create(createCustomerDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get all customers paginated.',
    description:
      'Get all customers with id, name, cpf and birth date paginated.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: GetAllCustomersPaginatedDoc,
  })
  async findAllPaginated(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return await this.customersService.findAllPaginated(page, limit);
  }

  @Get(':cpf')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get a customer by cpf.',
    description: 'Get a customer with id, name, cpf and birth date by cpf.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CustomerEntityDoc,
  })
  async findOne(@Param('cpf') cpf: string): Promise<Customer> {
    return await this.customersService.findOne(cpf);
  }
}
