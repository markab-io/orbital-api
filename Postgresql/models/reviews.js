var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");

let reviewsSchema = new Schema({
  title: String,
  description: String,
  gallery: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  isASeed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  resource: { type: String, default: "reviews" }
});

reviewsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Review", reviewsSchema);
