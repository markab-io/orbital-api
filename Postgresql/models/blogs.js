var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");

// set up a mongoose model
let blogSchema = new Schema({
  title: String,
  description: String,
  body: String,
  status: String,
  gallery: Array,
  image: String,
  tags: { type: Array, default: [] },
  comments: [
    {
      id: String,
      title: String,
      name: String,
      parent: String,
      children: Array
    }
  ],
  isASeed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  resource: { type: String, default: "blogs" }
});
blogSchema.plugin(mongoosePaginate);
module.exports = blogSchema;
