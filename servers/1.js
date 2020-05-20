var mysql = require('mysql');
var Student = new Object();
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studentmanger'
})
con.connect();
Student.getAllStudent = function(callback){
    var sql = 'select * from student';
    con.query(sql,function(err,result){
        if(err)return callback("获取失败");
        callback(null, result);
        
    });
}
module.exports = Student;