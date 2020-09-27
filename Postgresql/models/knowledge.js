var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");

// set up a mongoose model
let knowledgeSchema = new Schema({
  title: String,
  body: { type: Object, default: {} },
  tags: { type: Array, default: [] },
  status: String,
  gallery: Array,
  image: String,
  isASeed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  resource: { type: String, default: "knowledge" }
});
knowledgeSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Knowledge", knowledgeSchema);
