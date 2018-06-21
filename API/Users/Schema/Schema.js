const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:{
    type:String,
    required:[true,'Name field is required']
  },
  picture:{
    type:String
  },
  big:{
    type:Boolean
  },
  deleted:{
    type: Boolean,
    required: true, 
    default: false 
  }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
