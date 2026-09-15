const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Online", "Offline"],
    required: true,
  },
  thumbnail: String,
  date: String,
  time: String,
  speaker: String,
  topic: String,
  description: String,
  venue: String,
  address: String,
  price: Number,
  dressCode: String,
  ageRestriction: String,
  tags: [String],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;