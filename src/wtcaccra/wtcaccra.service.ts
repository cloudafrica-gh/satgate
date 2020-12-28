import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WtcaccraEventsInterface } from './interface/wtcaccra.events.interface';

@Injectable()
export class WtcaccraService {
  private logger = new Logger('WtcaccraService');

  constructor(
    @InjectModel('WtcEvents')
    private readonly wtcaccraModel: Model<WtcaccraEventsInterface>,
  ) {}

  public async createNewEvent(
    eventData: WtcaccraEventsInterface,
  ): Promise<WtcaccraEventsInterface> {
    const {
      userId,
      eventTitle,
      imageUrl,
      dateOfEvent,
      beginTime,
      endTime,
      speakers,
    } = eventData;

    const payload: any = {
      userId,
      eventTitle,
      imageUrl,
      dateOfEvent,
      beginTime,
      endTime,
    };

    const newEvent = await new this.wtcaccraModel(payload);
    try {
      await newEvent.save();
    } catch (e) {
      this.logger.error('error save new event: ${e}');
    }
    return newEvent;
  }
}
