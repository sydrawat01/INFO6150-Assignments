const mongoose = require('mongoose');

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
    createDate: {
      type: Date,
      default: Date.now,
    },
    modifiedDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Todo', Schema);
