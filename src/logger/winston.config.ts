import {
  utilities as nestWinstonModuleUtilities,
  WinstonModuleOptions,
} from 'nest-winston';
import * as winston from 'winston';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const winstonAsyncConfigOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],

  useFactory: (configService: ConfigService): WinstonModuleOptions => {
    return {
      levels: winston.config.npm.levels,
      level: 'verbose',
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        new winston.transports.File({
          level: 'verbose',
          filename: 'application.log',
          dirname: 'logs',
        }),
        new winston.transports.File({
          level: 'error',
          filename: 'error.log',
          dirname: 'logs',
          format: winston.format.json(),
        }),
      ],
    };
  },
};
