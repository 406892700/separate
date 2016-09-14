
var path = require('path');
var request = require(path.join($APP_PATH, 'request'));
var T = require(path.join($APP_PATH, 'tool'));

module.exports = function(router) {

  /**
   * 活动列表
   */
  router.get('/login', (req, res, next)=> {
    T.sync(function *gen(callback) {
      const activityList = yield request({url: 'getActivityList', data: req.params}, callback);//获取banner
      res.render('user/login', {list: activityList[1].result.list, tab: 'activity'});
    });
  });

  router.get('/reg', (req, res, next)=> {
    T.sync(function *gen(callback) {
      const activityList = yield request({url: 'getActivityList', data: req.params}, callback);//获取banner
      res.render('user/register', {list: activityList[1].result.list, tab: 'activity'});
    });
  });

  router.get('/findPsw', (req, res, next)=> {
    T.sync(function *gen(callback) {
      const activityList = yield request({url: 'getActivityList', data: req.params}, callback);//获取banner
      res.render('user/findPsw', {list: activityList[1].result.list, tab: 'activity'});
    });
  });

};
