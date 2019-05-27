const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const streakSchema = new Schema({
      user:{
        type: String,
        required: true
      },
      streakCount:{
        type: Number,
        default: 0
      },
      dateUpdated:{
        type: Date,
        default: Date.now
      }
});
module.exports = mongoose.model('streak', streakSchema);