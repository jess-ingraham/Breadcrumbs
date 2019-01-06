var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname , '..', 'public', 'html' ,'index.html'));
});

router.get('/home', function(req, res, next){
	res.redirect(301, '/')
});

router.get('/signup', function(req, res, next){
	res.sendFile(path.join(__dirname , '..', 'public', 'html' ,'signup.html'));

});

router.get('/login', function(req, res, next){
	res.sendFile(path.join(__dirname , '..', 'public', 'html' ,'login.html'));
});

module.exports = router;
