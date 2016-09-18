/**
 * Created by xhy-pc on 2016/9/18.
 */
define(['zepto'],function($){
    var $username = $('[name="mobile"]'),
        $psw = $('[name="password"]'),
        $btn = $('#submitBtn');

    $btn.bind('click',function(){
        if($username.val() == ''){
            alert('用户名不能为空');
            return;
        }

        if($psw.val() == ''){
            alert('密码不能为空');
            return;
        }

        $.ajax({
            url:'/user/loginByPassword',
            type:'post',
            data:{
                mobile:$username.val(),
                password:$psw.val(),
                OS:'HTML'
            },
            success:function(){
                alert('登录成功！');
            }
        })


    });
});