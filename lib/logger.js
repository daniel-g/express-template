var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({ timestamp: true }),
    new (winston.transports.File)({
      timestamp: true,
      filename: '../logs/app.log'
    })
  ],
  exitOnError: false
});

module.exports = logger;
