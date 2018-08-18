var express = require('express');
var router = express.Router();
router.get('/', function (req,res,next) {
  console.log('hiii we are going on right direction 2');3
  next();
})
module.exports = router;