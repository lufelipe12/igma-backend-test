import { ApiProperty } from '@nestjs/swagger';

import { CustomerEntityDoc } from '../entities/customer.entity.doc';

export class GetAllCustomersPaginatedDoc {
  @ApiProperty({
    type: 'number',
    example: 5,
    description: 'Total of customers in page.',
  })
  count: number;

  @ApiProperty({
    type: 'number',
    example: 1,
    description: 'Current page',
  })
  page: number;

  @ApiProperty({
    type: 'number',
    example: 10,
    description: 'Total pages',
  })
  totalPages: number;

  @ApiProperty({
    type: CustomerEntityDoc,
    isArray: true,
    description: 'Customers found',
  })
  customers: CustomerEntityDoc[];
}
