import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
} from 'typeorm';

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
}
