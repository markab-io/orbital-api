var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Joi = require("joi");
const mongoosePaginate = require("mongoose-paginate");

const productsJoiSchema = Joi.object()
  .keys({
    title: Joi.string().required(),
    price: Joi.number().required()
  })
  .unknown();

// set up a mongoose model
// options is a dynamic object with different properties describing the product
let productsSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  quantity: { type: Number, default: 0 },
  image: String,
  sizes: Array,
  colors: [
    {
      title: String,
      src: String,
      description: String
    }
  ],
  gallery: Array,
  categories: [{ type: Schema.Types.ObjectId, ref: "Categories" }],
  isASeed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  resource: { type: String, default: "products" }
});

productsSchema.plugin(mongoosePaginate);

productsSchema.methods.joiValidate = function(obj) {
  return Joi.validate(obj, productsJoiSchema);
};

productsSchema.statics.joiValidate = function(obj) {
  return Joi.validate(obj, productsJoiSchema);
};
module.exports = mongoose.model("Product", productsSchema);
