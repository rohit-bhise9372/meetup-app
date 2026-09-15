require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const { initializeDatabase } = require("../db/db.connect");
const Event = require("../models/event.model");

initializeDatabase();

// CORS Configuration
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Meetup API is running successfully.",
  });
});

// Get All Events + Search + Filter
app.get("/events", async (req, res) => {
  try {
    const { type, search } = req.query;

    let filter = {};

    if (type && type !== "Both") {
      filter.type = type;
    }

    let events = await Event.find(filter);

    if (search) {
      const keyword = search.toLowerCase();

      events = events.filter(
        (event) =>
          event.title.toLowerCase().includes(keyword) ||
          event.tags.some((tag) => tag.toLowerCase().includes(keyword))
      );
    }

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events." });
  }
});

// Get Single Event
app.get("/events/:eventId", async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found." });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch event." });
  }
});

if (require.main === module) {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
}

module.exports = app;