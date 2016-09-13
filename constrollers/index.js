var path = require('path');
var request = require(path.join($APP_PATH, 'request'));
var T = require(path.join($APP_PATH, 'tool'));

module.exports = function(router) {

  router.get('/', (req, res, next)=> {
    T.sync(function *gen(callback) {
      const bannerList = yield request({url: 'getBannerList', data: req.params}, callback);//获取banner
      const project = yield request({url: 'getProjectById', data: req.params}, callback);//获取首页推荐项目
      res.render('index', {bannerList: bannerList[1].result, project: project[1].result, tab: 'home'});
    });
  });
};
