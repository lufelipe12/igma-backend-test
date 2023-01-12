import { UnprocessableEntityException } from '@nestjs/common';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';

import { CpfHandler } from '../../utils/cpfHandler';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Index({ unique: true })
  @Column({
    nullable: false,
  })
  cpf: string;

  @Column('date', { nullable: false })
  birthDate: Date;

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @BeforeInsert()
  public cpfChecker(): void {
    const cpfHandler = new CpfHandler();
    const cpfFormatted = cpfHandler.cpfFormatter(this.cpf);

    if (!cpfFormatted || cpfFormatted.length !== 11) {
      throw new UnprocessableEntityException('Invalid CPF.');
    }

    const isValidCpf = cpfHandler.isValidCpf(cpfFormatted);

    if (!isValidCpf) {
      throw new UnprocessableEntityException('Invalid CPF.');
    }

    this.cpf = cpfFormatted;
  }
}
