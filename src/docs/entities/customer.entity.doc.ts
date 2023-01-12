import { ApiProperty } from '@nestjs/swagger';

export class CustomerEntityDoc {
  @ApiProperty({
    type: Number,
    example: 12,
  })
  id: number;

  @ApiProperty({
    type: String,
    example: 'Customer Name',
  })
  name: string;

  @ApiProperty({
    type: String,
    example: '234.616.390-28',
  })
  cpf: string;

  @ApiProperty({
    example: '2020-01-01T00:00:00.000Z',
    description: 'Customer date of birth',
  })
  birthDate: Date;
}
