var SerialPort = require('serialport');
var status= require('../routs/status')

var port = new SerialPort('/dev/ttyACM0',{ //포트확인
baudrate: 9600,
parser: SerialPort.parsers.readline('\n')
});


port.on('open', function() {
console.log('opened')
});

// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})


port.on('data', function (data) {

  switch (data.substring(0,3)) {
    case DHT: //DHT:temp10.00hum30.00
      status.temperature=Number(data.substring(8,13))
      status.humidity=Number(data.substring(16,21))
      break;
    case Soi://Soi:0~300~700~1024
      status.Soil=Number(data.substring(4))
      break;
    case Rad://Rad:0~1024
     status.Light=Number(data.substring(4))
      break;

  }
  console.log('Read and Send Data : ' + data);
});

module.exports.motion.waterOn=function(){
  port.write('W1', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}
module.exports.motion.waterOff=function(){
  port.write('W0', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });

}
module.exports.motion.heaterOn=function(){
  port.write('H1', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });

}
module.exports.motion.heaterOff=function(){
  port.write('H0', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}
module.exports.motion.humidifierOn=function(){
  port.write('U1', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}
module.exports.motion.humidifierOff=function(){
  port.write('U0', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}
module.exports.motion.LEDOn=function(){
  port.write('L1', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}
module.exports.motion.LEDOff=function(){
  port.write('L0', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}
/* 센서를 위해서 껐다켰다가 필요하다고 함.
var SoilOn=function(){
  port.write('L0', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}

var SoilOff=function(){
  port.write('L0', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
}
*/
var DHT=function(){
  port.write('DHT', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });

  //return {temp : 11.2, hum : 10.0}
}
var Soil=function(){
  port.write('Soi', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
  //return {soilHum : 10.0}
}
var Radiation=function(){
  port.write('Rad', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
  });
  //return {Light : 10.0}
}

setInterval(DHT, 5000);
setInterval(Soil, 5000);
setInterval(Radiation, 5000);

/*


*/
