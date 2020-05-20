var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studentmanger'
});
con.connect();






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