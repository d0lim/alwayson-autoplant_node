var express = require('express');
var router = express.Router();

var temperature=0; //도씨
var humidity=0; //퍼센트
var Soil=0; //0 ~ 1024 0~300~700~1024 분기로 습도 단계라고 함
var Light=0; // 광량 0 ~ 1024
            //항상 갱신되는 변수들, serial.js 에서 5000ms 마다 인터벌

router.get('/',(req, res)=>{
  console.log('status!')
})

module.exports = router;
module.exports.temperature=temperature;
module.exports.humidity=humidity;
module.exports.Soil=Soil;
module.exports.Light=Light;