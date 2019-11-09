const {Schema, model} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const StudentSchema = new Schema({
  code: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  vp1: {
    type: Number,
    required: false
  },
  vp2: {
    type: Number,
    required: false
  },
  vf: {
    type: Number,
    required: false
  },
}, {
  timestamps: true
});

StudentSchema.plugin(mongoosePaginate);
module.exports = model('Student', StudentSchema);