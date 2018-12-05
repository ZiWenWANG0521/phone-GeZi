//使用express构建web服务器 --11:25
/*const express = require('express');
const cors=require('cors');
const pool=require('./pool');

var app = express();
app.use(express.static(__dirname+'/public'));
app.listen(3000);
app.use(cors({
    origin:["http://127.0.0.1:3000","http://localhost:3001"],credentials:true
}))
app.get("/imagelist",(req,res)=>{
    var obj=[{id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
        {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
        {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
        {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"}
        ]
    res.send(obj)
})*/
//加载模块
const express = require("express");
const pool = require("./pool");
const bodyParser = require('body-parser');
const cors = require("cors")
const qs=require("querystring");
//创建express对象
var app = express();

//指定静态目录
//最好 在服务器指定目录为绝对路径
app.use(express.static(__dirname+"/public"));
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));

//解决跨域请求
app.use(cors({
    origin:["http://127.0.0.1:3000","http://127.0.0.1:3001"],
    credentials:true
}))

//绑定监听端口
app.listen(3000,function(){
    console.log("服务器已创建")
})

app.get("/imagelist",function(req,res){
    var obj = [
        {id:1,img_url:"http://127.0.0.1:3000/img/banner/5b7bb19d078fc.jpg"},
        {id:2,img_url:"http://127.0.0.1:3000/img/banner/5ba22f7bad1fa.jpg"},
        {id:3,img_url:"http://127.0.0.1:3000/img/banner/5ba33a832f934.jpg"},
        {id:4,img_url:"http://127.0.0.1:3000/img/banner/5ba232c5a648b.jpg"},
        {id:5,img_url:"http://127.0.0.1:3000/img/banner/5ba2170214280.jpg"},
        {id:6,img_url:"http://127.0.0.1:3000/img/banner/5bbc75d663b11.jpg"}
    ];
    res.send(obj);
})
app.get("/getrec",(req,res)=>{
    var sql="SELECT * FROM gz_rec_yx  where rid!=0 order by rid";
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        //res.send(result);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));
        res.end();
    })
})
app.get("/getmsg",(req,res)=>{
    var sql="SELECT * FROM gz_phone_ where iid!=0 order by iid";
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        //res.send(result);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));
        res.end();
    })
})
app.get("/getmsgs",(req,res)=>{
    var sql="SELECT * FROM gz_phone_1 where iid!=0 order by iid";
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        //res.send(result);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));
        res.end();
    })
})
app.get("/getsearch",(req,res)=>{
    var kwords=req.query.kwords;
    var pno = req.query.pno;
    var pageSize=req.query.pageSize;
    console.log(kwords,pno,pageSize);
    var obj = {};
    var arr=kwords.split(" ")
    for(var i=0;i<arr.length;i++){
        arr[i]=`title like '%${arr[i]}%'`
    }
    var offset=parseInt((pno-1)*pageSize);
    pageSize = parseInt(pageSize);
    var where=" where "+arr.join(" and ")
    where += " LIMIT ?,? ";
    var sql="SELECT * FROM gz_search";

     pool.query(sql+where,[offset,pageSize],(err,result)=>{
         if(err) throw err;
         var c = Math.ceil(result[0].c/pageSize);
         obj.pageCount = c;
         obj.data = result;
         res.send(obj.data)
     })
})
app.post("/signin",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    console.log(uname,upwd);
    pool.query(
        "select * from gz_user where uname=? and upwd=?",
        [uname,upwd],
        (err,result)=>{
            if(err) console.log(err);
            if(result.length>0){
                res.writeHead(200);

                res.write(JSON.stringify({
                    ok:1
                }))
            }else{
                res.write(JSON.stringify({
                    ok:0,
                    msg:"用户名或密码错误！"
                }))
            }
            res.end();
        }
    )
})
app.get("/searchpro",(req,res)=>{
    var sid=req.query.sid;
    var sql="SELECT * FROM gz_search WHERE sid=?";
    pool.query(sql,[sid],(err,result)=>{
        if(err) console.log(err);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        });
        res.write(JSON.stringify(result));
        res.end()
    })
});
app.get("/addCart",(req,res)=>{
    var product_id=req.query.id;
    var count=req.query.count;
    var price=req.query.price;
    var img_url=req.query.img_url;
    var title=req.query.title;
    var sql="INSERT INTO gz_phoneshopcart values(null,null,?,?,?,?,?)";
    pool.query(sql,[product_id,count,price,img_url,title],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1})
        }
    })
});
app.get("/searchCart",(req,res)=>{
    var sql="SELECT * FROM gz_phoneshopcart";
    pool.query(sql,(err,result)=>{
        if(err) throw  err;
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));
        res.end()
    })
})
app.get("/del",(req,res)=>{
    var product_id=req.query.id;
    console.log(product_id)
    var sql="DELETE FROM gz_phoneshopcart WHERE product_id=?"
    pool.query(sql,[product_id],(err,result)=>{
        if(err) throw  err
        if(result.affectedRows==1){
            res.send({code:1})
        }else{
            res.send({code:0})
        }
    })
})
/*
app.get("/newslist",(req,res)=>{
    //1:参数  当前页码  页大小(一页显示几行数据)
    var pno = req.query.pno;            //2
    var pageSize = req.query.pageSize;  //5
    //2:sql
    //2.1:查找总记录数->转换总页数  15->3
    var sql = "SELECT count(id) as c FROM xz_news";


    var obj = {};      //保存发送客户端数据
    var progress = 0;  //进度
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        var c = Math.ceil(result[0].c/pageSize);
        obj.pageCount = c;
        progress+=50;
        if(progress==100){
            res.send(obj);
        }
    });
    //2.2:查找当前页内容           中间5行
    var sql = " SELECT id,title,img_url,ctime,point";
    sql += " FROM xz_news";
    sql += " LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);   //计算分页偏移量
    pageSize = parseInt(pageSize)
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err)throw err;
        //console.log(result);
        obj.data = result;
        progress+=50;
        if(progress==100){
            res.send(obj);
        }
    })
    //3:结果格式
    //res.send({code:"ok"})
});
app.get("/newsinfo",(req,res)=>{
    var obj={
        title:"北京的房价下降了,白菜价",
        content:"16w/P"
    };
    res.send(obj)
});*/
/*向数据库插入评论*/
/*
app.post("/postcomment",(req,res)=>{
    req.on("data",(buf)=>{
        var str=buf.toString();
        var obj=JSON.parse(str);
        var msg=obj.msg;
        var nid=obj.nid;
        var sql="INSERT INTO xz_comment(content,user_name,ctime,nid) VALUES(?,'匿名',now(),?)";
        pool.query(sql,[msg,nid],(err,result)=>{
          if(err) throw err;
          res.send({code:1,msg:"添加成功"})
        })
    })
})

/*获取新闻评论
app.get("/getComment",function(req,res){
    var nid = parseInt(req.query.id);
    var pno = req.query.pno;
    var pageSize=req.query.pageSize;
    var obj = {};//保存客户端数据
    var progress = 0
    var sql="SELECT COUNT(id) AS c FROM xz_comment WHERE nid=? ";
    pool.query(sql,[nid],function(err,result){
        if(err) throw err;
        var c = Math.ceil(result[0].c/pageSize);
        //console.log(c);
        obj.pageCount = c;
        progress+=50;
        if(progress==100){
            res.send(obj);
        }
    })
    var sql = " SELECT id,content,ctime,user_name From xz_comment WHERE nid=? ORDER BY id DESC LIMIT ?,?";
    var offset=parseInt((pno-1)*pageSize);
    pageSize = parseInt(pageSize);
    pool.query(sql,[nid,offset,pageSize],function(err,result){
        if(err) throw err;
        obj.data = result;
        progress+=50;
        if(progress==100){
            res.send(obj);
        }
    })
});
app.get("/goodsinfo",(req,res)=>{
    var id=req.query.id;
    var obj={id:id,title:"华为2000",now:8888,old:9999,pid:"9527"}
    res.send(obj)
})

app.get("/shopCart",(req,res)=>{
    var obj=[];
    obj.push({id:1,title:"华为p10",price:3999,count:2})
    obj.push({id:2,title:"华为p11",price:4999,count:1})
    obj.push({id:3,title:"华为p12",price:5999,count:4})
    res.send(obj);
})

app.get("/addcart",(req,res)=>{
    var pid=req.query.pid;
    var count=req.query.count;

    var reg=/^[0-9]{1,}$/;
    if(!reg.test(pid)){
        res.send({code:-1,msg:"参数有误"});
        return;
    }
    if(!reg.test(count)){
        res.send({code:-2,msg:"商品数量参数有误"})
        return;
    }
    res.send({code:1,msg:"添加成功"})
});
app.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql="SELECT count(id) as c FROM xz_user1 WHERE uname=? AND upwd=md5(?)"
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result[0].c==0){
            res.send({code:-1,msg:"登录失败"})
        }else{
            res.send({code:1,msg:"登录成功"})
        }
    })
})*/