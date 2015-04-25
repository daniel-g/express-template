module.exports.show = function(req, res){
  res.render('./templates/' + req.params.id + req.params[0]);
};
