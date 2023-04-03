const express = require('express');
const app = express();

app.get('/getPdf1', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.sendFile(`${__dirname}/1.pdf`);
})
app.listen(8000, () => {
  console.log("服务已启动，8000端口监听中...")
})