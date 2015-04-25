var serverService = require('../services/serverService').server;

/**
 *
 * serverService.VERB(URL, Controller.ACTION );
 *
*/

var templatesCtrl = require('../controllers/templatesCtrl');
serverService.get('/templates/:id*', templatesCtrl.show);
