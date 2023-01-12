import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customer } from '../database/entities/customer.entity';
import { CpfHandler } from '../utils/cpfHandler';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), RedisModule],
  controllers: [CustomersController],
  providers: [CustomersService, CpfHandler],
})
export class CustomersModule {}
