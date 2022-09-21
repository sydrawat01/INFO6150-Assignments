import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: String,
      required: 'Date is required',
    },
    dueTime: {
      type: String,
      required: 'Time is required',
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true, versionKey: false }
);

Schema.virtual('id', () => this._id.toHexString());
Schema.set('toJSON', { virtuals: true });

const model = mongoose.model('todo', Schema);
export default model;
