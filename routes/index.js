var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOLA ESTO ES UN MENSAJE PARA EL INGE :)' });
});

module.exports = router;
