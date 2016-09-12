const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : $CFG.DB_POOL_LIMIT,
  host            : $CFG.DB_HOST,
  port            : $CFG.DB_PORT,
  user            : $CFG.DB_USER,
  password        : $CFG.DB_PSW,
  database        : $CFG.DB
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

