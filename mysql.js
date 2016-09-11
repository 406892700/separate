const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '123456',
  database        : 'node'
});

module.exports = (callback)=>{
	pool.getConnection((err,connection)=>{
		if(err){
			console.log(err);
		}else{
			callback(connection);
		}
		
	});
}

