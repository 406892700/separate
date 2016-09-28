
const path = require('path');
const request = require(path.join($APP_PATH, 'request'));
const T = require(path.join($APP_PATH, 'tool'));
module.exports = function(router) {

  const getCommonArgs = (req)=>{
    const user = req.session.user;
    const data = {
      OS:user.OS,
      apiUid:user.uid,
      accessToken:user.accessToken
    };

    return data;
  };

  //个人中心拦截器
  router.use((req, res, next) => {
    if(/((^\/my\/)|(^\/my$))/.test(req.url)){//如果是/my开头，或者/my
      //console.log('需要被拦截');
      var oldUrl = encodeURIComponent(req.url);
      const user = req.session.user;
      //console.log(req.session.user);
      if(user){//session存在
        //获取redis中的登录状态
        const jRedis = T.getRedisClient();
        jRedis.get(user.uid+''+user.OS,(err,data)=>{
          //console.log(data);

          if(!data){//没有登录状态
            res.redirect('/user/login?urlTo='+oldUrl);
          }else{
            next();
          }
        });
      }else{
        res.redirect('/user/login?urlTo='+oldUrl );
      }
    }else{
      next();
    }

  });

  /**
   * 首页
   */
  router.get('/index', (req, res, next)=> {
    const jRedis = T.getRedisClient();
    const user = req.session.user;
    const data = getCommonArgs(req);

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


      res.render('my/index', {tab: 'my',userObj:userObj[1],accountObj:userAccount[1].result.accountObj});
    });
  });


  /**
   * 菜单
   */
  router.get('/menu',(req,res,next)=>{
    res.render('my/menu',{tab: 'my'});
  });

  /**
   * 资产
   */
  router.get('/asset',(req,res,next)=>{
    const data = getCommonArgs(req);
    request({
      url:'getAccountInfo',
      data:data
    },(err,data)=>{
      if(err)
          throw err;
      else
        res.render('my/asset',{tab: 'my',accountObj:data.result.accountObj});
    });

  });


  /**
   * 资产-记录
   */
  router.get('/asset/record',(req,res,next)=>{
    const data = getCommonArgs(req);
    request({
      url:'getAccountLogList',
      data:data
    },(err,data)=>{
      if(err)
          throw err;
      else
        res.render('my/assetRecord',{tab: 'my',list:data.result.list});
    });

  });

  /**
   * 余额
   */
  router.get('/cash',(req,res,next)=>{
    const data = getCommonArgs(req);
    request({
      url:'getAccountInfo',
      data:data
    },(err,data)=>{
      res.render('my/cash',{tab: 'my',accountObj:data.result.accountObj});
    });
  });

  /**
   * 余额-提现
   */
  router.get('/cash/setCash',(req,res,next)=>{
    const data = getCommonArgs(req);

    T.sync(function *gen(callback){
      const account = yield request({url:'getAccountInfo', data:data},callback);
      const count = yield request({url:'getFreeCashCount',data:data},callback);

      if(account[0])
        throw account[0];
      if(count[0]){
        throw count[0];
      }

      account[1].result.accountBank.count = count[1].result;

      res.render('my/setCash',{tab: 'my',account:account[1].result.accountBank});

    });

  });

  /**
   * 余额-充值
   */
  router.get('/cash/setRecharge',(req,res,next)=>{
    const data = getCommonArgs(req);

    T.sync(function *gen(callback){
      const account = yield request({url:'getAccountInfo', data:data},callback);
      if(account[0])
        throw account[0];

      res.render('my/setRecharge',{tab: 'my',account:account[1].result.accountBank});

    });

  });

  /**
   * 余额-银行卡列表
   */
  router.get('/cash/cardList',(req,res,next)=>{
    const data = getCommonArgs(req);

    T.sync(function *gen(callback){
      const account = yield request({url:'myBankCard', data:data},callback);
      if(account[0])
        throw account[0];

      res.render('my/cardList',{tab: 'my',data:account[1].result});

    });

  });


  /**
   * 余额-管理银行卡
   */
  router.get('/cash/manageCard/:type',(req,res,next)=>{
    const data = getCommonArgs(req);
    const user = req.session.user;
    res.render('my/manageCard',{tab: 'my',user:user});

  });

  /**
   * 充值取现记录
   */
  router.get('/cash/record',(req,res,next)=>{
    const data = getCommonArgs(req);
    request({
      url:'getRechargeCashList',
      data:data
    },(err,data)=>{
      res.render('my/rechargeCash',{tab: 'my',list:data.result.list});
    });
  });

  /**
   * 投资记录
   */
  router.get('/invest',(req,res,next)=>{
    const data = getCommonArgs(req);
    request({
      url:'getIncomeInfo',
      data:data
    },(err,data)=>{
      if(err){
        throw err;
      }else{
        res.render('my/invest',{tab: 'my',income:data.result});
      }
    });

  });

  /**
   * 福利
   */
  router.get('/welfare',(req,res,next)=>{
    const data = getCommonArgs(req);
    data.type = 0;
    request({
      url:'getWelfareList',
      data:data
    },(err,data)=>{
      if(err){
        throw err;
      }else{
        res.render('my/welfare',{tab: 'my',list:data.result.list});
      }

    });

  });

  /**
   * 帮助中心
   */
  router.get('/help',(req,res,next)=>{
    res.render('my/help',{tab: 'my'});
  });

  /**
   * 关于懒人
   */
  router.get('/aboutus',(req,res,next)=>{
    res.render('my/aboutus',{tab: 'my'});
  });

  /**
   * 汇款日历
   */
  router.get('/calendar',(req,res,next)=>{
    res.render('my/calendar',{tab: 'my'});
  });

  /**
   * 我的邀请
   */
  router.get('/invite',(req,res,next)=>{
    res.render('my/invite',{tab: 'my'});
  });

  /**
   * 账户设置-菜单
   */
  router.get('/account/setting',(req,res,next)=>{
    const user = req.session.user;
    const data = getCommonArgs(req);

    request({
      url:'getQuickInverstState',
      data:data
    },(err,data)=>{
      if(err){
        throw err;
      }else{
        const account = user;
        account.quickInverst = data.result;
        res.render('my/accountSetting',{tab:'my',account:account});
      }

    });
  });

  /**
   * 账户设置-实名认证
   */
  router.get('/account/realname',(req,res,next)=>{
    /*const user = req.seesion.user;
    const data = getCommonArgs(req);*/
    res.render('my/realname',{tab:'my'});
  });


  /**
   * 账户设置-绑定手机
   */
  router.get('/account/bindPhone',(req,res,next)=>{
    const user = req.session.user;
    res.render('my/bindPhone',{tab:'my',user:user});
  });

  /**
   * 账户设置-快捷支付
   */
  router.get('/account/quick/index',(req,res,next)=>{
    const user = req.session.user;
    const data = getCommonArgs(req);
    request({
      url:'getQuickInverstState',
      data:data
    },(err,data)=>{
      if(err){
        throw err;
      }else{
        const account = user;
        account.quickInverst = data.result;
        res.render('my/quick/quickIndex',{tab:'my',account:account});
      }

    });
    //res.render('my/quick/quickIndex',{tab:'my',user:user});
  });

  /**
   * 账户设置-快捷支付-设置快捷密码
   */
  router.get('/account/quick/setPsw',(req,res,next)=>{
    const user = req.session.user;
    res.render('my/quick/setPsw',{tab:'my',user:user});
  });

  /**
   * 账户设置-快捷支付-修改快捷密码
   */
  router.get('/account/quick/modifyPsw',(req,res,next)=>{
    const user = req.session.user;
    res.render('my/quick/modifyPsw',{tab:'my',user:user});
  });

  /**
   * 账户设置-快捷支付-找回快捷密码
   */
  router.get('/account/quick/findPsw',(req,res,next)=>{
    const user = req.session.user;
    res.render('my/quick/findPsw',{tab:'my',user:user});
  });

};