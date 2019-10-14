var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// set up a mongoose model
//users eventually will replace to, because we might have a group text feature in the future
let notificationSchema = new Schema({
  title: String,
  type: String,
  deleted: { type: Boolean, default: false },
  updated: { type: Boolean, default: false },
  date: { type: Date, default: Date.now() },
  modelId: String,
  resource: { type: String, default: "notifications" },
  to: String,
  translations: Object,
  createdAt: { type: Date, default: Date.now }
});
// notificationSchema.plugin(autoIncrement.plugin, {
//   model: "ChatLog",
//   field: "chatId"
// });
module.exports = notificationSchema;
