import * as mongoose from 'mongoose';

export interface WtcaccraRegisterEventsInterface extends mongoose.Document {
  readonly fullName: string;
  readonly email: string;
  readonly phoneNumber: string;
  subject?: string;
  eSubject?: string;
  company?: string;
  role?: string;
  message?: string;
  isConfirmed?: boolean;
  status?: string;
  updatedAt?: string;
}
