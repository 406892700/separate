/*----------------------------------------------------
*
*                  路由配置文件
*
*----------------------------------------------------
*/

var path = './constrollers/';//相对路径
module.exports = [
	{route:'/',controller:require(path+'index')},
	{route:'/invest',controller:require(path+'invest')},
	{route:'/my',controller:require(path+'my')},
	{route:'/act',controller:require(path+'activity')}
];