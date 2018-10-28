var SerialPort = require('serialport');
var status  =  require('./status');

var port = new SerialPort('/dev/ttyACM0',{ //포트확인
  baudRate: 9600,
parser: new SerialPort.parsers.Readline('\n')
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

module.exports={
  
  waterOn : function(){
    port.write('W1', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
    });
  },
  waterOff : function(){
    port.write('W0', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
    });

  },
  heaterOn : function(){
    port.write('H1', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
    });
  },
  heaterOff : function(){
    port.write('H0', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
    });
  },
  humidifierOn : function(){
    port.write('U1', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
    });
  },
  humidifierOff : function(){
    port.write('U0', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
    });
  },
  LEDOn : function(){
    port.write('L1', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
    });
  },
  LEDOff : function(){
    port.write('L0', function(err) {
      if (err) {
        return console.log('Error on write: ', err.message);
      }
    });
  }
}

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
