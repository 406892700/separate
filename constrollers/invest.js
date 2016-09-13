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
            res.render('page/investDetail', {list: data.result.list, tab: 'inverst'});
        });
    });
};