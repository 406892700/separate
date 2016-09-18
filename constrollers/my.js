
const path = require('path');
const request = require(path.join($APP_PATH, 'request'));
const T = require(path.join($APP_PATH, 'tool'));
module.exports = function(router) {

  //个人中心拦截器
  router.use((req, res, next) => {
    if(/((^\/my\/)|(^\/my$))/.test(req.url)){//如果是/my开头，或者/my
      //console.log('需要被拦截');
      const user = req.session.user;
      //console.log(req.session.user);
      if(user){//session存在
        //获取redis中的登录状态
        const jRedis = T.getRedisClient();
        jRedis.get(user.uid+''+user.OS,(err,data)=>{
          //console.log(data);
          if(!data){//没有登录状态
            res.redirect('/user/login');
          }else{
            next();
          }
        });
      }else{
        res.redirect('/user/login');
      }
    }else{
      next();
    }

  });


  router.get('/my', (req, res, next)=> {
    const jRedis = T.getRedisClient();
    const user = req.session.user;
    const data = {
      OS:user.OS,
      apiUid:user.uid,
      accessToken:user.accessToken
    };

    req.params = Object.assign({},req.params,data);
    T.sync(function *gen(callback) {
      const userObj = yield jRedis.hgetall(user.uid+''+user.OS+'_OBJ',callback);
      const userAccount = yield request({url: 'getAccountInfo', method:'GET', data: req.params},callback);

      //错误处理
      if(userObj[0] ){
        throw userObj[0];
      }
      //错误处理
      if(userAccount[0]){
        throw userAccount[0];
      }

      console.log(userAccount);

      res.render('my/index', {tab: 'my',userObj:userObj[1],accountObj:userAccount[1].result.accountObj});
    });
  });

};