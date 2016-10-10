/**
 * 获取api数据的方法
 */

const https = $CFG.API_PROTOCOL === 'https'? require('https') : require('http');
const querystring = require('querystring');

const fetchSOAP = (obj,callback)=>{
	const d_obj = {
		data:null,
		url:'',
		ifRoot:false,
		method:'GET'
	};

	obj = Object.assign({},d_obj,obj);

	const dataString = querystring.stringify(obj.data);	

	var options = {
	  hostname: $CFG.API_HOST,
	  port: $CFG.API_PORT,
	  method: obj.method,
	  headers:{ 
		  'content-length': dataString.length,
		  'content-type': 'text/plain',
		  'connection': 'keep-alive',
		  'accept': '*/*' 
		}
	};

	if(!obj.ifRoot){
		options.path = '/AppApi/v1.0.0/'+obj.url+'?'+dataString;
	}else{
		options.path = obj.url+'?'+dataString;
	}

	var req = https.request(options, (res) => {
	  //console.info('----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
	  //console.info('请求状态码:', res.statusCode);
	  //console.info('请求头:', res.headers);
	  var chunk = '';
	  
	  res.on('data', (data) => {
	    chunk+=data.toString();
	  });

	  res.on('end', () => {
		callback(null,JSON.parse(chunk));
		  console.log('接口数据',JSON.parse(chunk));
		  console.log('----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
	  });
	});

	req.on('error', (e) => {
		console.error(e);
	  callback(e,null);
	});

	req.end();
};

module.exports = fetchSOAP;