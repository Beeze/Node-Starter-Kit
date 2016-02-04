var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My webpage', name: 'marc' });
});

router.get('/sedcash', function(req, res, next) {
  res.render('sedcash', { title: 'My webpage', name: 'Sedrick' });
});

router.get('/omari', function(req, res, next) {
  res.render('omari', { title: 'My webpage', name: 'Omari' });
});
module.exports = router;
