import { ApiProperty } from '@nestjs/swagger';

export class CustomerCreatedResponseDoc {
  @ApiProperty({
    type: 'number',
    example: 1,
    description: 'Customer id.',
  })
  id: number;

  @ApiProperty({
    type: 'string',
    example: 'Carlos',
    description: 'Customer name',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    example: '680.891.160-60',
    description: 'Customer cpf',
  })
  cpf: string;

  @ApiProperty({
    type: 'date',
    example: '2020-01-01T00:00:00.000Z',
  })
  birthDate: Date;
}
