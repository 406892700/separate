/**
 * require 配置文件
 */
requirejs.config({
    baseUrl:'/controllers/',
    paths:{
        zepto:'lib/zepto.min',
        fastclick:'lib/fastclick',
        text:'lib/require.text',
        ejs:'lib/ejs.min',
        qrcode:'lib/jquery.qrcode.min',
        weChatConfig:'lib/shareConfig',
        LrGallery:'lib/lrGallery'
    },
    shim:{

    },
    map:'',
    config:'',
    urlArgs:'v=123'+new Date().getTime(),//开发环境
    // urlArgs:'v=123',//正式环境
    scriptType:'text/javascript',//
    xhtml:false,//
    callback:function(){}//

});