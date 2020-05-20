var express = require('express');
var querystring = require('querystring');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var router = express.Router();
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studentmanger'
});
con.connect();
//
router.post('/login',function(req,res){
    // console.log(req.body);
    var data = JSON.stringify(req.body);
    data = JSON.parse(data);
    var username = data.username;
    var password = data.password; 
    var sql = `select password from manger where username = "${username}"`;
    con.query(sql,function(err,result){
        if(err) {
            console.log("没有此用户");
            return res.sendStatus(600);
        }
        var dataString = JSON.stringify(result);
        var data = JSON.parse(dataString);
        var temp = data[0].password;
        if(temp!=password){
            console.log("密码错误");
            return res.sendStatus(400);
        }else{
            console.log("登录成功");
            res.sendStatus(200);
        }
    });
})
//查询所有学生
router.get('/',function(req,res){
    var sql = 'select * from student';
    con.query(sql,function(err,result){
        if(err){
          return  res.json({
                status:"400",
                msg:err
            });
            
        }else{
           
            res.send(result);
        }
    });
});

module.exports = router;