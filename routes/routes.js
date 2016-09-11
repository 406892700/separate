/*
*---------------------------------
*
*      页面跳转路由
*
*---------------------------------
*/

var path = require('path');
var query = require(path.join(global.__cfg.APP_PATH, 'mysql'));
module.exports = function(router){
	router.get('/', function(req, res, next) {
		var  redis = require('redis');
		var client = redis.createClient({
			host:'localhost',
			port:6379	
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
}
