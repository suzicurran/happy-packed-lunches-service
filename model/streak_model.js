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

streakSchema.methods.incrementStreak = function incrementStreak() {
  this.streakCount = this.streakCount + 1;
}

streakSchema.methods.resetStreak = function resetStreak() {
  this.streakCount = 0;
}

module.exports = mongoose.model('streak', streakSchema);