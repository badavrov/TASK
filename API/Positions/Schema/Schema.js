const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PositionSchema = new Schema({
  title:{
    type:String,
    required:[true,'Title field is required']
  },
  deleted:{
    type: Boolean,
    required: true, 
    default: false 
  }
});

const Positions = mongoose.model('position', PositionSchema);
module.exports = Positions;
