import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule, ConfigService } from '@nestjs/config';

export default {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<any> => {
    if (configService.get('APP_ENV') == 'prod') {
      return {
        store: redisStore,
        host: configService.get('REDIS_HOST'),
        port: parseInt(configService.get('REDIS_PORT')),
        username: configService.get('REDIS_USERNAME'),
        password: configService.get('REDIS_PASSWORD'),
        ssl: true,
      };
    }

    return {
      store: redisStore,
      name: configService.get('REDIS_CLIENT'),
      host: configService.get('REDIS_HOST'),
      port: parseInt(configService.get('REDIS_PORT')),
    };
  },
};
