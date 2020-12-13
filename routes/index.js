const { response } = require('express');
var express = require('express');
var router = express.Router();
var postschema=require('./users')
/* GET home page. */
router.get('/', function(req, res) {
  postschema.find()
  .then(function(createdpost)
  {
    res.render('index',{allpost:createdpost});
  })
});

router.get('/write',function(req,res){
  res.render('write');
});

router.post('/post',function(req,res)
{
  postschema.create({
    post:req.body.post
  })
  .then(function(createdpost){
    res.redirect('/');
  })
});

router.get('/update/:id',function(req,res){
  postschema.findOne({
    _id:req.params.id
  })
  .then(function(posts)
  {
    res.render('update',{post:posts});
  })
});

router.post('/updatedpost/:id',function(req,res){
  postschema.findOneAndUpdate({_id:req.params.id},{post:req.body.post})
  .then(function(updated){
    res.redirect('/');
  })
});



router.get('/delete/:id',function(req,res){
  postschema.findOneAndDelete({
    _id:req.params.id
  })
  .then(function(deleted){
    res.redirect('/');
  })
});

module.exports = router;
