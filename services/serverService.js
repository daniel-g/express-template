var express    = require('express');
var nconf      = require('nconf')
var bodyParser = require('body-parser');
var Logger     = require('../lib/logger');

function ServerService(){
  Logger.info('[Service] Server: init');
  this.initialize();
}

ServerService.prototype.initialize = function(){
  this.server = express();
  this.server.set('view engine', 'jade');
  this.server.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencode
  this.server.use(bodyParser.json());                          // parse application/json
  this.server.use(express.static(process.cwd() + '/public'));
  this.server.listen(nconf.get('PORT'), function(){
    Logger.info('[Service] Server: Server started in port ' + nconf.get('PORT'));
  });
};

module.exports = new ServerService();
