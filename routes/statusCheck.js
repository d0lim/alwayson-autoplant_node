var express = require('express');
var router = express.Router();
var status=  require('../utils/status');


router.get('/',(req, res)=>{

  console.log(
  "temperature : " + status.temperature +
  "\n humidity : " + status.humidity+
  "\n Soil :" + status.Soil+
  "\n Light : " + status.Light)

  res.render('status', { 
    temperature: status.temperature,
    humidity:status.humidity,
    Soil: status.Soil,
    Light:status.Light
  });
})


module.exports = router;
