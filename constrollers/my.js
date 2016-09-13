
var path = require('path');
var request = require(path.join($APP_PATH, 'request'));
module.exports = function(router) {
  router.get('/listx', (req, res, next)=> {
    request({
      url: 'getProjectList',
      data: req.params
    }, function (err, data) {
      res.render('index', {list: data.result.list, tab: 'my'});
    });
  });
};