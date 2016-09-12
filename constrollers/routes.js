/*
*---------------------------------
*
*      页面跳转路由
*
*---------------------------------
*/

var path = require('path');
var query = require(path.join($APP_PATH, 'mysql'));
var request = require(path.join($APP_PATH, 'request'));
var T = require(path.join($APP_PATH, 'tool'));
module.exports = function(router){
	router.get('/', function(req, res, next) {
		var  redis = require('redis');
		var client = redis.createClient({
			host:$CFG.REDIS_HOST,
			port:$CFG.REDIS_PORT	
		});

		client.HMSET('xhy',{name:'xhy',age:12,'weight':82.5},function(a,b){
			console.log(arguments);
		})
		client.quit();

		query((connection)=>{
			connection.query('insert into user (name,age,password) values ("xhy","25","xhy123")', function(err, rows, fields) {
			  if (err) throw err;
			 
			  console.log('The solution is: ');
			});
		});

	  res.send('respond with a resource');
	});

	router.get('/testDemo',(req,res,next)=>{
		request({
			url:'getProjectList',
			data:req.param
		},function(err,data){
			console.log(data);
			res.render('index',data.result);
			//res.json(data);
		});
	});
}
