import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WtcaccraRegisterEventsInterface } from './interface/wtcaccra.register.events.interface';

@Injectable()
export class WtcaccraRegisterEventsService {
  private logger = new Logger('WtcaccraRegisterEventsService');

  constructor(
    @InjectModel('WtcRegisterEvents')
    private readonly wtcaccraRegisterEventsModel: Model<WtcaccraRegisterEventsInterface>,
  ) {}

  public async findRegisteredUserById(eventRegisteredId: string): Promise<any> {
    const fru = await this.wtcaccraRegisterEventsModel
      .findById({ _id: eventRegisteredId })
      .exec();
    return fru;
  }

  public async allRegisteredAttendants(): Promise<any> {
    const ara = await this.wtcaccraRegisterEventsModel.find().exec();
    const totalCount = await this.wtcaccraRegisterEventsModel.countDocuments();
    return { ara, totalCount };
  }

  public async registerNewEvent(
    attendantData: WtcaccraRegisterEventsInterface,
  ): Promise<WtcaccraRegisterEventsInterface> {
    const attendant = await this.wtcaccraRegisterEventsModel.findOne({
      $or: [
        { email: attendantData.email },
        { phoneNumber: attendantData.phoneNumber },
      ],
    });

    if (attendant) {
      throw new UnauthorizedException(
        `Event attendant already registered with this: ${attendantData.email} || ${attendantData}`,
      );
    }

    const payload: any = {
      fullName: attendantData.fullName,
      email: attendantData.email,
      phoneNumber: attendantData.phoneNumber,
      subject: attendantData.subject || attendantData.eSubject,
      message: attendantData.message,
    };

    const saveEvent = await new this.wtcaccraRegisterEventsModel(payload);
    try {
      await saveEvent.save();
    } catch (e) {
      this.logger.error(`error registering event: ${e}`);
    }
    return saveEvent;
  }

  public async updateRegisteredEvent(
    eventRegisterId: string,
    changes: WtcaccraRegisterEventsInterface,
  ): Promise<any> {
    const ure = await this.wtcaccraRegisterEventsModel.findOneAndUpdate(
      { _id: eventRegisterId },
      changes,
      { new: true },
    );
    return ure;
  }

  public async deleteEventRegistration(
    eventRegisteredId: string,
  ): Promise<any> {
    const der = await this.wtcaccraRegisterEventsModel.findByIdAndDelete({
      _id: eventRegisteredId,
    });
    return der;
  }
}
