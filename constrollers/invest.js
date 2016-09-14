/**
 * Created by xhy-pc on 2016/9/13.
 * 投资相关
 */
var path = require('path');
var request = require(path.join($APP_PATH, 'request'));
module.exports = function(router) {
    router.get('/list', (req, res, next)=> {
        request({
            url: 'getProjectList',
            data: req.params
        }, function (err, data) {
            res.render('invest/list', {list: data.result.list, tab: 'inverst'});
        });
    });

    router.get('/export',(req,res,next)=>{
        var fs = require('fs');
        fs.readFile('e://LIST.TXT',function(err,data){
            console.log(data.toString());
            var str = data.toString();
            var arr = str.split('\n');
            arr.map(function(v,i){
                arr[i] = arr[i].trim();
            });


            res.json({a:arr});
        });
    });
};