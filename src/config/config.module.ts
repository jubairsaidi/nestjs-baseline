import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Global()
@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: ConfigService.init()
    }
  ],
  exports: [ConfigService]
})
export class ConfigModule {}
