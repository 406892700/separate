const generator = (gen)=>{//利用生成器来完成嵌套的回调函数
    const gen_obj = gen(resume);

    function resume() {//每次异步成功的时候，执行一次，并且把回调的参数放入协程对象中
        gen_obj.next(arguments);
        if(arguments[0]){
        	throw '错误~\n'+arguments[0];
        }
    }

    gen_obj.next();//先执行一次到达第一个异步操作的位置
};

const getRedisClient = ()=>{//获取redisClient
    var  redis = require('redis');
    return redis.createClient({
        host:$CFG.REDIS_HOST,
        port:$CFG.REDIS_PORT
    });
};


/*
 * 处理post请求（urlencoded类型的）
 *
 * */
const handlePost = () => {
    var bodyParser = require('body-parser'),
        urlencodedParser = bodyParser.urlencoded({ extended: false });

    return  urlencodedParser;
};
/*
const extends = Object.assign;*/

module.exports = {
	sync:generator,
	extends:Object.assign,
    getRedisClient:getRedisClient,
    handlePost:handlePost
};