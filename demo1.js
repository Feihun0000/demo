const express = require('express');
const  app = express();
const fs = require('fs')
const path = require('path')
app.get('/home',(req,res)=>{
   let {url,ip}=req;
   fs.appendFileSync(path.resolve(__dirname,'./access.log'),`${url}  ${ip}\r\n`)
   res.send('前台首页')
})
app.get('/',(req,res)=>{
    res.end('home')
})
app.all('*',(req,res)=>{
    res.end('404')
})
app.listen(9000,()=>{
    console.log("服务已经启动,端口 9000 正在启动中......")
})