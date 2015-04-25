var fs = require('fs');
var winston = require('winston');

var logFile = './logs/app.log';
fs.open(logFile, 'a', null, function(){});

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ timestamp: true }),
    new (winston.transports.File)({
      timestamp: true,
      filename: logFile
    })
  ],
  exitOnError: false
});

module.exports = logger;
