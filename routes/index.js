var express = require('express');
var router = express.Router();
var Product = require('../models/product');




/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChunks = [];
    var chunkSize = 3;
    for (let i = 0; i < docs.lenght; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize))
    }
  })
  res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
});


router.post('user/signup', function(req, res, next){
  res.redirect('/');
})

module.exports = router;
