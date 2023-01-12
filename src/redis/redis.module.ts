import { Module, CacheModule } from '@nestjs/common';

import redisConfigAsync from './redis.config';

@Module({
  imports: [CacheModule.registerAsync(redisConfigAsync)],
  exports: [CacheModule],
})
export class RedisModule {}
