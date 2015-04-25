var serverService = require('../services/serverService').server;

/**
 *
 * serverService.VERB(URL, Controller.ACTION );
 *
*/

serverService.get('/', function(req, res){
  res.render('./index');
});

var templatesCtrl = require('../controllers/templatesCtrl');
serverService.get('/templates/:id*', templatesCtrl.show);
