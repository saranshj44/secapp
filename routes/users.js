const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/secapp');

var postschema=mongoose.Schema({
  post:String
})

module.exports=mongoose.model('post',postschema);