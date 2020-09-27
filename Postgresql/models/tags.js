var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");

let tagsSchema = new Schema({
  title: String,
  name: String,
  isASeed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  resource: { type: String, default: "tags" }
});

tagsSchema.plugin(mongoosePaginate);

module.exports = tagsSchema