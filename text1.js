const http = require('http');
const fs = require('fs');
const server = http.createServer((request,response)=>{
    let {pathname} = new URL(request.url,'http://127.0.0.1');
    let filepath = __dirname + pathname;
    fs.readFile(filepath,(err,data)=>{
        if (err){
            response.statusCode = 500;
            response.end('文件读取失败~')
            return;
        }
        response.end(data)
    })
    // response.statusCode =203;

    let html = fs.readFileSync(__dirname+'/text1.html')
    response.end(html)//有且只有一个end
})
server.listen(9000,()=>{
    console.log('监听已开启')
})