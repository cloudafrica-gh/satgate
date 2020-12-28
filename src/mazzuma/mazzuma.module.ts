import { Module } from '@nestjs/common';
import { MazzumaService } from './mazzuma.service';
import { MazzumaController } from './mazzuma.controller';

@Module({
  providers: [MazzumaService],
  controllers: [MazzumaController],
})
export class MazzumaModule {}
