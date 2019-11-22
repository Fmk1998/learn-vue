const express = require('express');

const app = express();


app.get('/',(req,res)=>{
  res.send({
    list: [1,2,3,4,5]
  });
});

app.listen(3000,()=>{
  console.log('服务启动在3000端口');
});
