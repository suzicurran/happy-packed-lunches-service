const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
      username:{
        type: String,
        required: true
      },
      password:{
        type: String,
        required: true
      },
      streak:{
        type: Number,
        default: 0
      },
      dateUpdated:{
        type: Date,
        default: Date.now
      }
});

userSchema.methods.incrementStreak = function incrementStreak() {
  this.streak = this.streak + 1;
}

userSchema.methods.resetStreak = function resetStreak() {
  this.streak = 0;
}

module.exports = mongoose.model('user', userSchema);