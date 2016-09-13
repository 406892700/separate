
var path = require('path');
var request = require(path.join($APP_PATH, 'request'));
var T = require(path.join($APP_PATH, 'tool'));

module.exports = function(router) {

  /**
   * 活动列表
   */
  router.get('/activity', (req, res, next)=> {
    T.sync(function *gen(callback) {
      const activityList = yield request({url: 'getActivityList', data: req.params}, callback);//获取banner
      res.render('page/act/activity', {list: activityList[1].result.list, tab: 'activity'});
    });
  });

  /**
   * 公告列表
   */
  router.get('/notice', (req, res, next)=> {
    T.sync(function *gen(callback) {
      const activityList = yield request({url: 'getArticleList', data: req.params}, callback);//获取banner
      res.render('page/act/notice', {list: activityList[1].result.list, tab: 'activity'});
    });
  });

  /**
   * 公告列表
   */
  router.get('/notice/detail/:id', (req, res, next)=> {
    T.sync(function *gen(callback) {
      const activityList = yield request({url: 'getArticleDetail', data: req.params}, callback);//获取banner
      res.render('page/act/noticeDetail', {detail: activityList[1].result});
    });
  });
};
