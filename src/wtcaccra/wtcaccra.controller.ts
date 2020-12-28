import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { WtcaccraRegisterEventsService } from './wtcaccra.register.events.service';
import { WtcaccraRegisterEventsInterface } from './interface/wtcaccra.register.events.interface';
import { Response } from 'express';

@Controller('api/wtcaccra')
export class WtcaccraController {
  private logger = new Logger('WtcaccraController');

  constructor(private wtcRegisterEventService: WtcaccraRegisterEventsService) {}

  @Get('events')
  public async findAllRegisteredAttendants(@Res() res: Response): Promise<any> {
    const fra = await this.wtcRegisterEventService.allRegisteredAttendants();
    res.status(HttpStatus.OK).json(fra);
  }

  @Get('event/:eventRegisteredId')
  public async findRegisteredAttendantById(
    @Res() res: Response,
    @Param('eventRegisteredId') eventRegisteredId: string,
  ): Promise<any> {
    const frabi = await this.wtcRegisterEventService.findRegisteredUserById(
      eventRegisteredId,
    );
    res.status(HttpStatus.CREATED).json(frabi);
  }

  @Post('event')
  public async joinWtcEvent(
    @Res() res: Response,
    @Body() attendantData: WtcaccraRegisterEventsInterface,
  ): Promise<any> {
    const jwe = await this.wtcRegisterEventService.registerNewEvent(
      attendantData,
    );
    this.logger.log(`${JSON.stringify(attendantData)}`);
    res.status(HttpStatus.CREATED).json(jwe);
  }

  @Put('event/update/:eventRegisteredId')
  public async updateMerchantRecord(
    @Res() res: Response,
    @Param('eventRegisteredId') eventRegisteredId: string,
    @Body() changes: WtcaccraRegisterEventsInterface,
  ): Promise<any> {
    this.logger.log(`update merchant: ${JSON.stringify(changes)}`);
    const umr = await this.wtcRegisterEventService.updateRegisteredEvent(
      eventRegisteredId,
      changes,
    );
    res.status(HttpStatus.CREATED).json(umr);
  }

  @Delete('event/delete/:eventRegisteredId')
  public async removeMerchant(
    @Res() res: Response,
    @Param('eventRegisteredId') eventRegisteredId: string,
  ): Promise<any> {
    const rm = await this.wtcRegisterEventService.deleteEventRegistration(
      eventRegisteredId,
    );
    res.status(HttpStatus.CREATED).json(rm);
  }
}
