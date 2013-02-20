var mongoose = require('mongoose') , Schema = mongoose.Schema;

var FeModelSchema = new Schema({
  name : {type : String, default : '', trim : true},
  url : {type : String, default : '', trim : true},
  _absPath : {type : String, default : '', trim : true},
  extname : {type : String, default : '', trim : true},
  size : {type : Number}, 
  createdAt  : {type : Date, default : Date.now},
  lastModifiedDate : {type : Date, default : Date.now},
  lastViewedDate : {type : Date, default : Date.now},
  shared : {type : Boolean, default : true},
  from : {type : String},
  owner : {type : Schema.ObjectId, ref : 'User'}
});

mongoose.model('FeModel', FeModelSchema);
module.exports = exports = FeModelSchema;
