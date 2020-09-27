var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");

let cartsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  isASeed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  resource: { type: String, default: "carts" }
});

cartsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Cart", cartsSchema);
