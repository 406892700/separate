/**
 * Created by xhy-pc on 2016/12/28.
 */
module.exports = function(router) {

    /**---------------------------------首页相关接口---------------------------------------**/
    /**
     * 首页banner
     */
    router.get('/getBanner',(req,res,next) =>{
        //console.log(req);
        const banner ={
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:[
                {
                    url:'http://www.baidu.com',//跳转地址
                    picUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',//图片地址
                    title:'banner1',//banner标题,
                    id:'1'//bannerid
                },
                {
                    url:'http://www.baidu.com',//跳转地址
                    picUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',//图片地址
                    title:'banner1',//banner标题,
                    id:'1'//bannerid
                },
                {
                    url:'http://www.baidu.com',//跳转地址
                    picUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2629118994,3992948045&fm=170&s=2FC49B46CC41125D1CC8FDA203006015&w=639&h=426&img.JPG',//图片地址
                    title:'banner1',//banner标题,
                    id:'1'//bannerid
                },
                {
                    url:'http://www.baidu.com',//跳转地址
                    picUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2711642290,4156733883&fm=170&s=5A2328C44902A15B5EC71D9303005088&w=639&h=426&img.JPG',//图片地址
                    title:'banner1',//banner标题,
                    id:'1'//bannerid
                }
            ]
        };
        res.json(banner);
    });

    /**
     * 首页标的
     */
    router.get('/getIndexProject',(req,res,next)=>{
        var indexProject ={
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:{
                pType:'1',//标的大类别
                pTypeName:'1',//大类别名称
                pSubType:'1',//小类别
                pSubTypeName:'初心',//小类别名称
                pName:'的角度看家分店',//标的名称
                state:-1,//(-1-> 倒计时 0 ->正常 1->售罄)
                showType:1,//(1->新客 2->推荐)
                countTime:2232,//倒计时时间
                scale:0.5,//项目进度
                yearRate:12.00,//年化率
                investNum:12,//投资笔数
                days:12,//投资期限
                dateType:1,//期限单位名称
                minInvest:1200,//起投金额
                aIconUrl:'',//活动图片地址(没有就不显示)
                addRate:0.1//购后加息(大于0则显示)
            }
        };
        res.json(indexProject)
    });

    /**
     * 首页导航
     */
    router.get('/getNavigation',(req,res,next)=>{
        var indexProject ={
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:{
                pType:'1',//标的大类别
                pTypeName:'1',//大类别名称
                pSubType:'1',//小类别
                pSubTypeName:'初心',//小类别名称
                pName:'的角度看家分店',//标的名称
                state:-1,//(-1-> 倒计时 0 ->正常 1->售罄)
                showType:1,//(1->新客 2->推荐)
                countTime:2232,//倒计时时间
                scale:0.5,//项目进度
                yearRate:12.00,//年化率
                investNum:12,//投资笔数
                days:12,//投资期限
                dateType:1,//期限单位名称
                minInvest:1200,//起投金额
                aIconUrl:'',//活动图片地址(没有就不显示)
                addRate:0.1//购后加息(大于0则显示)
            }
        };

        res.json(indexProject);
    });

    /**
     * 获取通知消息
     */
    router.get('/getNotice',(req,res,next)=>{
        var notice = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result: {
                'index':3,//首页
                'invest':4,//投资
                'account':0,//账户
                'info':0//发现
            }

        };

        res.json(notice);
    });

    /**---------------------------------投资相关接口---------------------------------------**/
    /**
     * 获取标的列表
     * args sortId ->当前请求到的数据列表中最后一个数据对象的id
     */
    router.get('/getProjectList',(req,res,next)=>{
        var projectList = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result: {
                list:[
                    {
                        pId:'udfd133434',//项目uuid
                        pType:'1',//标的大类别
                        pTypeName:'1',//大类别名称
                        pSubType:'1',//小类别
                        pSubTypeName:'初心',//小类别名称
                        state:-1,//(-1-> 倒计时 0 ->正常 1->售罄 2->已截标 3->待回款 4->已回款)
                        countTime:2232,//倒计时时间
                        showType:1,//(1->新客 2->推荐)
                        scale:0.5,//项目进度
                        pName:'测试标的1',//标的名称
                        yearRate:12.00,//年化率
                        investNum:12,//投资笔数
                        days:12,//投资期限
                        dateType:1,//期限单位名称
                        minInvest:1200,//起投金额
                        aIconUrl:'',//活动图片地址(没有就不显示)
                        addRate:0.1,//购后加息(大于0则显示)
                        payType:'到期还本付息'
                    },
                    {
                        pId:'udfd133434',//项目uuid
                        pType:'1',//标的大类别
                        pTypeName:'1',//大类别名称
                        pSubType:'1',//小类别
                        pSubTypeName:'嘎嘎',//小类别名称
                        state:0,//(-1-> 倒计时 0 ->正常 1->售罄 2->已截标 3->待回款 4->已回款)
                        countTime:22323,//倒计时时间
                        pName:'测试标的2',//标的名称
                        showType:1,//(1->新客 2->推荐)
                        scale:0.5,//项目进度
                        yearRate:12.00,//年化率
                        investNum:12,//投资笔数
                        days:12,//投资期限
                        dateType:1,//期限单位名称
                        minInvest:120,//起投金额
                        aIconUrl:'',//活动图片地址(没有就不显示)
                        addRate:0,//购后加息(大于0则显示)
                        payType:'到期还本呵呵'
                    },
                    {
                        pId:'udfd133434',//项目uuid
                        pType:'1',//标的大类别
                        pTypeName:'1',//大类别名称
                        pSubType:'1',//小类别
                        pSubTypeName:'嘎嘎',//小类别名称
                        state:0,//(-1-> 倒计时 0 ->正常 1->售罄 2->已截标 3->待回款 4->已回款)
                        countTime:22323,//倒计时时间
                        pName:'测试标的3',//标的名称
                        showType:1,//(1->新客 2->推荐)
                        scale:0.5,//项目进度
                        yearRate:15.00,//年化率
                        investNum:1,//投资笔数
                        days:12,//投资期限
                        dateType:1,//期限单位名称
                        minInvest:1200,//起投金额
                        aIconUrl:'',//活动图片地址(没有就不显示)
                        addRate:0.1,//购后加息(大于0则显示)
                        payType:'到期还本呵呵'
                    }
                ],
                lastSortId:1,//当前数据集的最后一个对象的id
                isHasNext:0
            }
        };

        res.json(projectList);
    });

    /**
     * 获取标的信息
     * args pId ->标的id
     */
    router.get('/getProject',(req,res,next)=>{
        var projectInfo = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:{
                pId:'udfd133434',//项目uuid
                pType:'1',//标的大类别
                pTypeName:'1',//大类别名称
                pSubType:'1',//小类别
                pSubTypeName:'初心',//小类别名称
                pName:'的角度看家分店',//标的名称
                state:-1,//(-1-> 倒计时 0 ->正常 1->售罄 2->已截标 3->待回款 4->已回款)
                countTime:2232,//倒计时时间
                showType:1,//(1->新客 2->推荐)
                scale:0.5,//项目进度
                yearRate:12.00,//年化率
                investNum:12,//投资笔数
                days:12,//投资期限
                dateType:1,//期限单位名称
                minInvest:1200,//起投金额
                aIconUrl:'',//活动图片地址(没有就不显示)
                addRate:0.1,//购后加息(大于0则显示)
                payType:'到期还本付息',
                remain:222323,//剩余可投
                example:{//示例
                    num:100000,
                    interest:1000344
                },
                maxInvest:343433,//最高投资金额
                endCountTime:444444//截止投资倒计时
            }
        };

        res.json(projectInfo);
    });

    /**
     * 获取标的详情
     * args pId ->标的id
     */
    router.get('/getProjectDetail',(req,res,next)=>{
        var projectInfo = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result: {
                amount: '10.00万',//项目总额
                interestTime: '投资后一日',//气息时间
                advanceEnd: 1,//提前结束投资
                expand: 1,//展期
                advancePayBack: 1,//提前还款
                content: '',//项目简介(小区别原生和H5)
                borrowerInfo: {
                    type: 1//1->个人 2->企业
                },
                captialInfo: {
                    purpose: '嘎嘎嘎',
                    source: '呵呵呵额呵呵'
                },
                materials: [
                    {
                        pic:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',//展示图
                        originalPic:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',//原图
                        title:'图片1'//标题
                    },
                    {
                        pic:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',//展示图
                        originalPic:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',//原图
                        title:'图片2'//标题
                    },
                    {
                        pic:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',//展示图
                        originalPic:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',//原图
                        title:'图片3'//标题
                    }
                ]
            }
        };

        res.json(projectInfo);
    });

    /**
     * 获取标的用户投资列表
     * args pId ->标的id
     * args sortId ->当前请求到的数据列表中最后一个数据对象的id
     */
    router.get('/getProjectInvestList',(req,res,next)=>{
        var investList = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:[
                {
                    userId:'',
                    userName:'mzy',
                    amount:3343,
                    datetime:'2017-12-23 12:33:44'
                },
                {
                    userId:'',
                    userName:'yz',
                    amount:3343,
                    datetime:'2017-12-23 12:33:44'
                },
                {
                    userId:'',
                    userName:'yw',
                    amount:23333,
                    datetime:'2017-12-26 12:33:44'
                },
                {
                    userId:'',
                    userName:'xhy',
                    amount:3343333,
                    datetime:'2017-12-23 12:33:44'
                }
            ]
        };

        res.json(investList);
    });

    /**
     * 获取标的回款计划
     * args pId ->标的id
     * args recordId -> 单独指定那一笔投资记录(如不传入，则显示该标的所有回款计划)
     * args sortId ->当前请求到的数据列表中最后一个数据对象的id
     */
    router.get('/getProjectPayBackRecord',(req,res,next)=>{

        var payBackList = {
            result:{
                accessToken : "",
                code : "0",
                errmsg : "",
                errorPram : "",
                list:[
                    {
                        payBackNum:3434,
                        capitalNum:344,
                        interest:3343,
                        remainNum:3434,
                        date:'2016-12-3',
                        dateExplain:'募集利息回款日'
                    },
                    {
                        payBackNum:343433,
                        capitalNum:4343,
                        interest:3343,
                        remainNum:3434,
                        date:'2016-12-3',
                        dateExplain:'正常回款日'
                    },
                    {
                        payBackNum:3343433434,
                        capitalNum:34343,
                        interest:3343,
                        remainNum:334343434,
                        date:'2016-12-3',
                        dateExplain:'募集利息回款日'
                    },
                    {
                        payBackNum:3434,
                        capitalNum:344,
                        interest:3343,
                        remainNum:3434,
                        date:'2016-12-3',
                        dateExplain:'募集利息回款日'
                    }
                ],
                example:{//示例
                    num:450000,
                    days:123
                },
                payBackList:{
                    payBackNum:3434,
                    capitalNum:344,
                    interest:3343,
                    remainNum:3434
                }
            }

        };

        res.json(payBackList);
    });

    /**---------------------------------活动相关接口---------------------------------------**/
    /**
     * 获取热门活动列表
     */
    router.get('/getActivityList',(req,res,next)=>{
        var activity = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:[
                {
                    picUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',
                    aId:'dfsd',//活动id
                    url:'',
                    title:'dfdfd',
                    state:0,//(0->正常 1->活动结束)
                    type:'1',//交互方式(h5还是跳转原生页面)
                    msg:0//活动消息（非0表示存在新消息）
                },
                {
                    picUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',
                    aId:'dfsd',//活动id
                    url:'',
                    title:'dfdfd',
                    state:0,//(0->正常 1->活动结束)
                    type:0,//交互方式(h5还是跳转原生页面)
                    msg:0//活动消息（非0表示存在新消息）
                },
                {
                    picUrl:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2739245707,4118749066&fm=170&s=B6A3E0A40B63864142E7E8910300908F&w=639&h=426&img.JPG',
                    aId:'dfsd',//活动id
                    url:'',
                    title:'dfdfd',
                    state:0,//(0->正常 1->活动结束)
                    type:'1',//交互方式(h5还是跳转原生页面)
                    msg:1//活动消息（非0表示存在新消息）
                }
            ]
        };

        res.json(activity);
    });

    /**
     * 消除新消息的提示
     * args aId -> 活动id
     */
    router.get('/readNewNotice',(req,res,next)=>{
        var readNotice = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:[]
        };

        res.json(readNotice);
    });

    var a = {
        accessToken : "",
        code : "0",
        errmsg : "",
        errorPram : ""
    };

    /**---------------------------------账户相关接口---------------------------------------**/
    /**
     * 体验金提现接口
     */
    router.get('/cashExperienceToAccount',(req,res,next)=>{
        var readNotice = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:'提现成功'
        };

        res.json(readNotice);
    });

    /**
     * 获取账户信息
     */
    router.get('/getAccountInfo',(req,res,next)=>{
        var accountInfo = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:{
                usable:34344,//可用余额
                investNum:3434,//投资中金额
                expectInterest:3434,//预期收益
                expectAllInterest:34343,//预期总收益
                netAsset:3343,//用户净资产
                currentMonthPayBack:3434,
                currentMonth:3
            }
        };

        res.json(accountInfo);
    });

    /**
     * 体验金获取列表接口
     * args sortId ->当前请求到的数据列表中最后一个数据对象的id
     */
    router.get('/getAchieveExperience',(req,res,next)=>{
        var achieveRecord = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            isHasNext:1,
            lastSortId:1,
            list:[
                {
                    source:'新用户注册',//体验金来源
                    date:'2017-05-10 00:00:00',//获取时间
                    info:"已使用",//是否已经使用的文本
                    amount:100000,
                    expireDate:'2017-05-10 00:00:00'
                }
            ]
        };

        res.json(achieveRecord);
    });

    /**
     * TODO://逻辑不明确，暂时先保留
     * 资金记录接口
     * args -> type:1//(0->全部 1->充值 2->投资 3->回款 4->提现 5->奖励)
     * args sortId ->当前请求到的数据列表中最后一个数据对象的id
     */
    router.get('/getCaptialRecord',(req,res,next)=>{
        var captialRecords = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            list:[
                {
                    usable:"886,689.78",//可用余额
                    cTime: "2017-03-16 18:07",
                    moneChange: "+1,014.78",//资金变化
                    proName: "琳琅17011803期",
                    recordNo: "ACR20170316000000186",
                    remark: "17011803期” 项目回款回款",
                    showType: 1,
                    status: 3
                },
                {
                    usable:"886,689.78",//可用余额
                    cTime: "2017-03-16 18:07",
                    moneChange: "+1,014.78",//资金变化
                    proName: "琳琅17011803期",
                    recordNo: "ACR20170316000000186",
                    remark: "17011803期” 项目回款回款完成",
                    showType: 1,
                    status: 3
                },
                {
                    usable:"886,689.78",//可用余额
                    cTime: "2017-03-16 18:07",
                    moneChange: "+1,014.78",//资金变化
                    proName: "琳琅17011803期2",
                    recordNo: "ACR20170316000000186",
                    remark: "17011803期” 项目回款回款完成",
                    showType: 0,
                    status: 3
                },
                {
                    usable:"886,689.78",//可用余额
                    cTime: "2017-03-16 18:07",
                    moneChange: "+1,014.78",//资金变化
                    proName: "琳琅17011803期2222",
                    recordNo: "ACR20170316000000186",
                    remark: "17011803期” 项目回款回款完成",
                    showType: 2,
                    status: 3
                }
            ],
            isHasNext:1,
            lastSortId:2323
        };

        res.json(captialRecords);
    });

    /**
     * 体验金接口
     */
    router.get('/getExperienceInfo',(req,res,next)=>{
        var experience = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:{
                canCash:1,//是否可提现
                interest:2.87,//体验金收益
                myExperience: 0.00,//我的体验金
                myYield: 0.00//不知道什么意思(你看着写吧)
            }
        };

        res.json(experience);
    });

    /**
     * 获取消息列表
     * args sortId ->当前请求到的数据列表中最后一个数据对象的id
     */
    router.get('/getMsgList',(req,res,next)=>{
        var MsgList = {
            result:{
                accessToken : "",
                code : "0",
                errmsg : "",
                errorPram : "",
                list:[
                    {
                        id: "12124832",
                        remindTitle: "回款提醒",
                        remindMessage: "念钱安温馨提醒：您向17011803期项目出借的本金和收益共计1,014.78元已成功转入您的念钱安账户，请您查收。其中本金1,000.00元，利息10.68元，募集期资金占用费4.10元。",
                        remindType: "34",
                        isRead: "0",
                        showTime: "2017/03/16 18:05"
                    },
                    {
                        id: "12124832",
                        remindTitle: "回款提醒",
                        remindMessage: "念钱安温馨提醒：您向17011803期项目出借的本金和收益共计1,014.78元已成功转入您的念钱安账户，请您查收。其中本金1,000.00元，利息10.68元，募集期资金占用费4.10元。",
                        remindType: "34",
                        isRead: "0",
                        showTime: "2017/03/16 18:05"
                    },
                    {
                        id: "12124832",
                        remindTitle: "回款提醒",
                        remindMessage: "念钱安温馨提醒：您向17011803期项目出借的本金和收益共计1,014.78元已成功转入您的念钱安账户，请您查收。其中本金1,000.00元，利息10.68元，募集期资金占用费4.10元。",
                        remindType: "34",
                        isRead: "1",
                        showTime: "2017/03/16 18:05"
                    },
                    {
                        id: "12124832",
                        remindTitle: "回款提醒",
                        remindMessage: "念钱安温馨提醒：您向17011803期项目出借的本金和收益共计1,014.78元已成功转入您的念钱安账户，请您查收。其中本金1,000.00元，利息10.68元，募集期资金占用费4.10元。",
                        remindType: "34",
                        isRead: "1",
                        showTime: "2017/03/16 18:05"
                    }
                ],
                isHasNext:1,
                lastSortId:3
            }
        };

        res.json(MsgList);
    });

    /**
     * 获取我的投资记录列表
     * args sortId ->当前请求到的数据列表中最后一个数据对象的id
     */
    router.get('/getMyInvestRecordList',(req,res,next)=>{
        var InvestRecordsList = {
            accessToken : "",
            code : "0",
            errmsg : "",
            errorPram : "",
            result:{
                moneyInvest:113336.00,//代收本金
                willProfitView: 6.03,//预期代收收益
                investTimes:12,//投资笔数
                isHasNext:1,//是否有下一页
                lastSortId:12,//当前记录最后一个id
                list:[
                    {
                        payDate:'2017-03-12(16:00-24:00)',
                        pId:'udfd133434',//项目uuid
                        pType:'1',//标的大类别
                        pTypeName:'1',//大类别名称
                        pSubType:'1',//小类别
                        pSubTypeName:'初心',//小类别名称
                        yearRate:12,//年化率
                        addRate:0.1,//加息
                        days:'12天',//日期
                        payType:'到期还本付息',//回款方式
                        aIconUrl:'',//活动图片地址(没有就不显示)
                        investAmount:232332,//投资金额
                        expectAmount:343434,//到期后的总金额
                        couponInfo:'',//优惠券相关使用信息(字符串给过来)
                        dealDate:'2017-03-18(16:00-24:00)'//成交时间
                    },
                    {
                        payDate:'2017-03-12(16:00-24:00)',
                        pId:'udfd133434',//项目uuid
                        pType:'1',//标的大类别
                        pTypeName:'1',//大类别名称
                        pSubType:'1',//小类别
                        pSubTypeName:'初心',//小类别名称
                        yearRate:12,//年化率
                        addRate:0.1,//加息
                        days:'12天',//日期
                        payType:'到期还本付息',//回款方式
                        aIconUrl:'',//活动图片地址(没有就不显示)
                        investAmount:232332,//投资金额
                        expectAmount:343434,//到期后的总金额
                        couponInfo:'',//优惠券相关使用信息(字符串给过来)
                        dealDate:'2017-03-18(16:00-24:00)'//成交时间
                    },
                    {
                        payDate:'2017-03-12(16:00-24:00)',
                        pId:'udfd133434',//项目uuid
                        pType:'1',//标的大类别
                        pTypeName:'1',//大类别名称
                        pSubType:'1',//小类别
                        pSubTypeName:'初心',//小类别名称
                        yearRate:12,//年化率
                        addRate:0.1,//加息
                        days:'12天',//日期
                        payType:'到期还本付息',//回款方式
                        aIconUrl:'',//活动图片地址(没有就不显示)
                        investAmount:232332,//投资金额
                        expectAmount:343434,//到期后的总金额
                        couponInfo:'',//优惠券相关使用信息(字符串给过来)
                        dealDate:'2017-03-18(16:00-24:00)'//成交时间
                    },
                    {
                        payDate:'2017-03-12(16:00-24:00)',
                        pId:'udfd133434',//项目uuid
                        pType:'1',//标的大类别
                        pTypeName:'1',//大类别名称
                        pSubType:'1',//小类别
                        pSubTypeName:'初心',//小类别名称
                        yearRate:12,//年化率
                        addRate:0.1,//加息
                        days:'12天',//日期
                        payType:'到期还本付息',//回款方式
                        aIconUrl:'',//活动图片地址(没有就不显示)
                        investAmount:232332,//投资金额
                        expectAmount:343434,//到期后的总金额
                        couponInfo:'',//优惠券相关使用信息(字符串给过来)
                        dealDate:'2017-03-18(16:00-24:00)'//成交时间
                    }
                ]
            }
        };

        res.json(InvestRecordsList);
    });  
};