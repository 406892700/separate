/**
 * Created by xhy-pc on 2016/12/28.
 */
module.exports = function(router) {

    router.get('/comment',(req,res,next) =>{
        const data = [
            {id: 1, author: "Pete Hunt", text: "``This is one comment``"},
            {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
        ];
        res.json(data);
    });

    router.post('/comment',(req,res,next) =>{
        console.log(req.body);
        const data = [
            {id: 1, author: "Pete Hunt", text: "``This is one comment``"},
            {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
        ];

        var comment = req.body;
        comment.id = 3;

        data.push(comment);

        res.json(data);
    });

    router.post('/submitComment',(req,res,next) =>{
        res.json({});
    });

    const list = [
        {name:'xhy1',age:32,id:1},
        {name:'xhy2',age:32,id:2},
        {name:'xhy3',age:32,id:3},
        {name:'xhy4',age:32,id:4},
        {name:'xhy5',age:32,id:5}
    ];

    router.get('/getUsersList',(req,res,next) =>{

        res.json({data:list});
    });

    router.get('/getUser/:id',(req,res,next) =>{
       /* console.log(req.params)*/
        list.map((v)=>{
           if(v.id == req.params.id){
               res.json({data:v});
           }
        });

    });

    router.get('/testxhy',(req,res,next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        setTimeout(function(){
            res.json({
                fuck:'you'
            })
        },200);

    });

    router.get('/testgrid',(req,res,next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        setTimeout(function(){
            res.json(
                {"accessToken":"","code":"0","errmsg":"","errorPram":"","result":{"hasNextPage":true,"hasPreviousPage":false,
                    "list":[
                        {"account":"250000.00","accountYes":"155570.0","addRate":"0.0","countdown":"-1","cycle":"90","cycleType":"1","id":"ca1cc17a0c684eaea6b8dc8a8c8de260","isNovice":"0","name":"福特探险者质押借款项目","scales":"62.23","state":"10","type":"1","yearRate":"12.8"},
                        {"account":"130000.00","accountYes":"28120.0","addRate":"0.0","countdown":"-1","cycle":"20","cycleType":"1","id":"74a9ecff3c8f41f8a8223e4fc5254b61","isNovice":"1","name":"凯迪拉克ATS质押借款项目","scales":"21.63","state":"10","type":"2","yearRate":"15.0"},
                        {"account":"190000.00","accountYes":"190000.0","addRate":"0.0","countdown":"-1","cycle":"60","cycleType":"1","id":"732dec5f98b64c5f982345db365d51cf","isNovice":"0","name":"奔驰E260L质押借款项目","scales":"100.0","state":"20","type":"2","yearRate":"11.8"},
                        {"account":"220000.00","accountYes":"220000.0","addRate":"0.0","countdown":"-1","cycle":"30","cycleType":"1","id":"ba218b19169b4423bff3d5f1bb2c8c7b","isNovice":"0","name":"奥迪A7质押借款项目","scales":"100.0","state":"20","type":"2","yearRate":"10.8"},
                        {"account":"650000.00","accountYes":"650000.0","addRate":"0.0","countdown":"-1","cycle":"60","cycleType":"1","id":"cd6ab82f7d814397b43616d958b74d2f","isNovice":"0","name":"路虎揽胜质押借款项目","scales":"100.0","state":"20","type":"2","yearRate":"11.8"},
                        {"account":"280000.00","accountYes":"280000.0","addRate":"0.0","countdown":"-1","cycle":"30","cycleType":"1","id":"80eabbe084df4a5eab62341f5a247b2a","isNovice":"0","name":"捷豹XJ质押借款项目","scales":"100.0","state":"20","type":"2","yearRate":"10.8"},
                        {"account":"220000.00","accountYes":"220000.0","addRate":"0.0","countdown":"-1","cycle":"30","cycleType":"1","id":"93f95af8b2ae4075a96808bb7a321f8a","isNovice":"0","name":"大众辉腾质押借款项目","scales":"100.0","state":"20","type":"2","yearRate":"10.8"},
                        {"account":"230000.00","accountYes":"230000.0","addRate":"0.0","countdown":"-1","cycle":"90","cycleType":"1","id":"5567b360050c402795b1df972b8f627b","isNovice":"0","name":"保时捷迈凯质押借款项目","scales":"100.0","state":"20","type":"1","yearRate":"12.8"}
                    ],
                    "navigatepageNums":[1,2,3,4,5,6,7,8],"nextPage":"2","pageNum":"1","pages":"413","prePage":"0"}})
            },5000);
        });

};