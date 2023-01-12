import { Transform } from 'class-transformer';
import { IsString, Length, IsDate, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(11, 14)
  cpf: string;

  @Transform(({ value }) => (value instanceof Date ? value : new Date(value)))
  @IsDate({ message: 'Date format invalid' })
  @IsNotEmpty()
  birthDate: Date;
}
