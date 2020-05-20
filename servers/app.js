var express = require('express');
var router = require('./router');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
app.use(router);


app.listen(8888,function(){
    console.log("8888端口已启动");
})

