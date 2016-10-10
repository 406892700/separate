/**
 * 工程配置文件，一些常用的配置
 */



$APP_PATH = __dirname;//工程根路径
$DEV = true;//是否开发环境
$CFG = {
	/**
	 * 数据相关配置
	 */
	REDIS_HOST:'114.55.90.27',//redis host
	REDIS_PORT:6379,//redis 端口号
	DB_HOST:'localhost', //数据库 host
	DB_PORT:3306, //数据库 端口号
	DB_USER:'root',//数据库 用户名
	DB_PSW:'123456',//数据库 密码
	DB:'node',//数据库
	DB_POOL_LIMIT:10,//连接池连接上限

	/**
	 * 接口相关配置
	 */
	//API_HOST:'api.lrtzi.com',//接口地址
	//API_PROTOCOL:'https',//请求协议
	//API_PORT:443,//接口端口号
	API_HOST:'wap.p2pv5.com',//接口地址
	API_PROTOCOL:'http',//请求协议
	API_PORT:9991,//接口端口号
	API_PATH:'/AppApi/v1.0.0/'//公用地址
};
module.exports = {};