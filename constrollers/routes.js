/*
*---------------------------------
*
*      页面跳转路由
*
*---------------------------------
*/

var path = require('path');
var request = require(path.join($APP_PATH, 'request'));
var T = require(path.join($APP_PATH, 'tool'));
var query = require(path.join($APP_PATH, 'mysql'));
module.exports = function(router){

	/*router.get('/',(req,res,next)=>{
		T.sync(function *gen(callback){
			const bannerList = yield request({url: 'getBannerList', data: req.params}, callback);//获取banner
			const project = yield request({url:'getProjectById',data:req.params},callback);//获取首页推荐项目
			res.render('index',{bannerList:bannerList[1].result,project:project[1].result,tab: 'home'});
		});
	});*/


	/*router.get('/aa', function(req, res, next) {
		var  redis = require('redis');
		/!*var client = redis.createClient({
			host:$CFG.REDIS_HOST,
			port:$CFG.REDIS_PORT	
		});

		client.HMSET('xhy',{name:'xhy',age:12,'weight':82.5},function(a,b){
			console.log(arguments);
		});
		client.quit();*!/

		query((connection)=>{
			T.sync(function *gen(callback){
				const ret = yield connection.query('insert into user (name,age,password) values ("xhy","25","xhy1236")', callback);
				console.log(ret);
			});

		});

	  res.send('respond with a resource');
	});*/

	//底部导航栏
	/*router.get('/footer/:tab',(req,res,next)=>{
		console.log(req.params.tab);
		res.render('template/navBar',{tab:req.params.tab});
	});*/
};
