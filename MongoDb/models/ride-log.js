var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// set up a mongoose model
//users eventually will replace to, because we might have a group text feature in the future
let rideLogSchema = new Schema({
  deleted: { type: Boolean, default: false },
  updated: { type: Boolean, default: false },
  date: { type: Date, default: Date.now() },
  resource: { type: String, default: "ride-log" },
  from: { type: Schema.Types.ObjectId, ref: "User" },
  to: { type: Schema.Types.ObjectId, ref: "User" },
  pickupLat: Number,
  pickupLong: Number,
  dropoffLat: Number,
  dropoffLong: Number,
  distance: Number,
  price: Number,
  createdAt: { type: Date, default: Date.now },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }]
});
// rideLogSchema.plugin(autoIncrement.plugin, {
//   model: "ChatLog",
//   field: "rideId"
// });
module.exports = mongoose.model("RideLog", rideLogSchema);
