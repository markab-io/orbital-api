var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");

let commentsSchema = new Schema({
  title: String,
  name: String,
  parent: { type: Schema.Types.ObjectId, ref: "Comments" },
  children: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
  isASeed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  resource: { type: String, default: "comments" }
});

commentsSchema.plugin(mongoosePaginate);

module.exports = commentsSchema