var express = require('express');
var router = express.Router();
var temperature;
var humidity;
var Soil;
var Light;

router.get('/',(req, res)=>{
  console.log('status!')
})

module.exports = router;
module.exports.temperature=temperature;
module.exports.humidity=humidity;
module.exports.Soil=Soil;
module.exports.Light=Light;