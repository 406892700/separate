
var path = require('path');
var request = require(path.join($APP_PATH, 'request'));
var T = require(path.join($APP_PATH, 'tool'));

module.exports = function(router) {

  /**
   * user页面路由
   */
  router.get('/login', (req, res, next)=> {
    console.log(req.session);
    res.render('user/login', {tab: 'activity'});
  });

  router.get('/reg', (req, res, next)=> {
    res.render('user/register', {tab: 'activity'});
  });

  router.get('/findPsw', (req, res, next)=> {
    res.render('user/findPsw', {tab: 'activity'});
  });


  /**
   * user接口路由
   */
  router.post('/loginByPassword',(req,res,next)=>{

    request({
      url: 'loginByPassword',
      method:'POST',
      data: req.body
    }, function (err, data) {
      //res.render('invest/list', {list: data.result.list, tab: 'inverst'});
      req.session.user = data.result;
      req.session.user.OS = req.body.OS;
      //console.log(req.session.user);

      const jRedis = T.getRedisClient();
      //console.log('-------'+data.result.uid+''+req.body.OS+'_OBJ');
      jRedis.HMSET(data.result.uid+''+req.body.OS+'_OBJ',req.session.user);
      res.json(data);
    });
  });

};
