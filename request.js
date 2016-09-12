/**
 * 获取api数据的方法
 */

const https = require('https');
const querystring = require('querystring');

const fetchSOAP = (obj,callback)=>{
	const d_obj = {
		data:null,
		url:'',
		ifRoot:false,
		method:'GET',
	}

	obj = Object.assign({},d_obj,obj);

	const dataString = querystring.stringify(obj.data);	

	var options = {
	  hostname: $CFG.API_HOST,
	  port: $CFG.API_PORT,
	  method: $CFG.method,
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
	  console.info('statusCode:', res.statusCode);
	  console.info('headers:', res.headers);
	  var chunk = '';
	  
	  res.on('data', (data) => {
	    
	    chunk+=data.toString();
	  });

	  res.on('end', () => {

		callback(null,JSON.parse(chunk));
	  });
	});

	req.on('error', (e) => {
		console.error(e);
	  callback(e,null);
	});

	req.end();
}

module.exports = fetchSOAP;