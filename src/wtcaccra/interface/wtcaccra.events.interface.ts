import * as mongoose from 'mongoose';

export interface WtcaccraEventsInterface extends mongoose.Document {
  readonly userId: string;
  eventTitle: string;
  content: string;
  imageUrl?: string;
  dateOfEvent: string;
  beginTime: string;
  endTime: string;
  speakers: any;
  status: string;
  updateAt: string;
}
