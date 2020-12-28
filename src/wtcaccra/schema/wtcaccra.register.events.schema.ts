import * as mongoose from 'mongoose';

export const WtcaccraRegisterEventsSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
  subject: String,
  company: String,
  role: String,
  message: String,
  isConfirmed: { type: Boolean, default: false },
  status: { type: String, default: 'PENDING' },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
