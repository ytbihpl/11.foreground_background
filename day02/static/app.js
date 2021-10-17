//用于创建网站服务器的模块
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
//app对象就是网站服务器对象
const app = http.createServer();
//当客户端有请求来的时候
app.on('request', (req, res) => {
    //获取用户的请求路径
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname;
    //将用户的请求路径转换为实际的服务器硬盘路径
    let realpath = path.join(__dirname, 'public' + pathname);
    let type = mime.getType(realpath);
    //console.log(realpath);
    //读取文件
    fs.readFile(realpath, (error, result) => {
        //如果文件读取失败
        if (error != null) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            });
            res.end('文件读取失败');
            return;

        }
        res.writeHead(200, {
            'content-type': type
        })
        res.end(result)
    });
});
//监听窗口
app.listen(3000);
console.log('网站服务器启动成功');