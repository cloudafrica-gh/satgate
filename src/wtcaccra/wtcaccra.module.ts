import { Module } from '@nestjs/common';
import { WtcaccraService } from './wtcaccra.service';
import { WtcaccraController } from './wtcaccra.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WtcaccraEventsSchema } from './schema/wtcaccra.events.schema';
import { WtcaccraRegisterEventsSchema } from './schema/wtcaccra.register.events.schema';
import { WtcaccraRegisterEventsService } from './wtcaccra.register.events.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'WtcEvents', schema: WtcaccraEventsSchema },
      { name: 'WtcRegisterEvents', schema: WtcaccraRegisterEventsSchema },
    ]),
  ],
  providers: [WtcaccraService, WtcaccraRegisterEventsService],
  controllers: [WtcaccraController],
})
export class WtcaccraModule {}
