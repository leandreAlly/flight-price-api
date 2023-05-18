import mongoose from "mongoose";

const { Schema, model } = mongoose;

const flightSchema = new Schema({
  source: {
    type: String,
    required: true,
    maxlength: 255,
  },
  destination: {
    type: String,
    required: true,
    maxlength: 255,
  },
  date: {
    type: Date,
    required: true,
    maxlength: 255,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  company: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Flight = mongoose.model("Flight", flightSchema);

export { Flight };
