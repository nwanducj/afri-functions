const mongoose = require("mongoose");
const paginate = require("mongoose-paginate-v2");

const eventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: Object,
    default: {}
  },
  is_free: {
    type: Boolean,
    default: false,
  },
  price_tag: [{
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    number_of_tickets: {
      type: Number
    },
  }],
  address: {
    type: String,
    required: true
  },
  social_media: {
    type: [Object],
    required: false
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true,
});

eventSchema.plugin(paginate);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;