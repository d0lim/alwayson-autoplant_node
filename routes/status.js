var express = require('express');
var serial = require('../utils/serial');
var router = express.Router();
var temperature;
var humidity;
var Soil;
var Light;

var mongoTemp;
var mongoHum;
var mongoSoil;
var mongoLight;

router.get('/',(req, res)=>{
  console.log('status!')
})

router.get('/handle', (req, res)=>{
  if (mongoTemp > temperature) {
    serial.motion.heaterOn;
  }
  else if (mongoTemp < temperature) {
    serial.motion.heaterOff;
  }
  else {
    serial.motion.heaterOff;
  }
  
})

module.exports = router;
module.exports.temperature=temperature;
module.exports.humidity=humidity;
module.exports.Soil=Soil;
module.exports.Light=Light;