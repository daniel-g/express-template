var nconf  = require('nconf')
var Logger = require('./lib/logger');

nconf.argv().env().file({ file: './config/server.json' });

var serverService = require('./services/serverService').server;

// Configure middleware
serverService.use(function(req, res, next){
  Logger.info('[Middleware] incomming request ' + req.url);
  return next();
});

require('./config/routes');
