var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Matt, Victoria, & Mimi\'s Node App', name: 'Mimi' });

module.exports = router;
