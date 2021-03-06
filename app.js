var express = require('express');
var router = express.Router();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var ejs = require('ejs');

var app = express();

//全局配置对象
require('./config');//全局配置对象

// view engine setup
//模板引擎ejs
app.set('views', path.join(__dirname, 'views/page'));//页面文件路径
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));//开发级别的日志
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views/static')));//静态资源路径

app.use(session({
  secret: ((Math.random()+'').slice(2)*1).toString(36), // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 * 30 }
}));
//配置session


var routes = require('./routes');//路由配置文件



/*app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});*/



//设置跨域访问
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

router.get('/getListx',(req,res,next)=>{
    var fc = req.query.callback;
    var list = {list:[{text:'念鑫',key:'1'}, {text:'钱鑫',key:'2'}, {text:'安鑫',key:'3'}]};


    var callback = fc+'('+JSON.stringify(list)+');';

    res.end(callback);
});

//读取路由配置
routes.map((v)=>{
  v.controller(router);
  app.use(v.route,router);
});

var proxy = require('http-proxy-middleware');

app.use('/api', proxy({
      target: 'https://m.nianqa.com',
      changeOrigin: true,
      headers: {
        Referer: 'https://m.nianqa.com/'
      }
    }
));

app.use('/Mobile2', proxy({
      target: 'https://m.nianqa.com',
      changeOrigin: true,
      headers: {
        Referer: 'https://m.nianqa.com/'
      }
    }
));



// catch 404 and forward to error handler
//404处理文件
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers


// development error handler
// will print stacktrace
//开发环境
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
//生产环境
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});







module.exports = app;
