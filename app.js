const http=require('http');
const express = require('express');
const app = express();

const port=process.env.PORT||3000;



app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error')
  })


const server=http.createServer(app);
server.listen(port);
