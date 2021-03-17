const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  googleBookId: String
  // title: { type: String, required: true },
  // author: { type: String, required: true },
  // body: String,
  // date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
