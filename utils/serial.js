var SerialPort = require('serialport');
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

  console.log('Read and Send Data : ' + data);
});


/*
  port.write('1', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    //console.log('1 written');
  });

*/
