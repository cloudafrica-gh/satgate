import * as mongoose from 'mongoose';

export const WtcaccraEventsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  eventTitle: String,
  content: String,
  imageUrl: String,
  dateOfEvent: String,
  beginTime: String,
  endTime: String,
  speakers: { type: Array },
  status: { type: String, default: 'PENDING' },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
