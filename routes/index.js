var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thankyou', (req, res, next) => {
  res.render('ThankYou')
});

router.get('/admin', function(req, res, next){
  res.render('admin')
})

router.get('/admin/login', function(req, res, next){
  res.render('adminlogin')
})

module.exports = router;
