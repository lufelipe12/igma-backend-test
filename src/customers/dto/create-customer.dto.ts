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

  @IsDate()
  @IsNotEmpty()
  birthDate: Date;
}
