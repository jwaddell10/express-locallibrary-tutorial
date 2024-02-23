const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true,
    // enum: ["Fiction", "NonFiction"],
    minLength: 3,
    maxLength: 100,
  },
});

GenreSchema.virtual('url').get(function() {
    return `/catelog/genre/${this._id}`
})

module.exports = mongoose.model("GenreSchema", GenreSchema);
