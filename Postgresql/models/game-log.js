var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// set up a mongoose model
let gameSchema = new Schema({
  title: String,
  level: Number,
  players: [
    {
      id: String,
      name: String,
      position: Object,
      action: Object
    }
  ],
  logs: [{ type: Schema.Types.ObjectId, ref: "game-log" }],
  isASeed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
  resource: { type: String, default: "game" }
});
module.exports = mongoose.model("Game", gameSchema);
