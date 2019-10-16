import express from 'express';
let app = express(); //新增一个实例
app.get('/',(req,res) => {  //建立路由 访问6060没有指定任何路径接入 ./跟目录
    res.send("提示: 没有指定任何路径接入, 此处为./跟目录");
})
app.listen(6060, ()=>console.log('接入成功, Running on localhost: 6060'));  //app 监听端口, 接入端口