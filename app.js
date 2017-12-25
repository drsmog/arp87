var SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
var port = new SerialPort('COM3', {
    autoOpen: false,
    baudRate: 19200

});
const parser = new Readline();
port.pipe(parser);

port.open(function (err) {
    if (err) {
        return console.log('Error opening port: ', err.message);
    }

    // Because there's no callback to write, write errors will be emitted on the port:
    port.write('main screen turn on');
    
});

// The open event is always emitted
port.on('open', function () {
    console.log('Opened');
   
});
parser.on('data', function (data) {
    console.log('Recived data :',data);
    port.write('Test SOS DATA');
});



