import { ApiProperty } from '@nestjs/swagger';

export class CustomerCreateRequestDoc {
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
    example: 'MM/DD/YYYY',
  })
  birthDate: Date;
}
