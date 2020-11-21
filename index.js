const express = require('express');
const app = express();
const path = require('path')
const pathIndex = path.join(__dirname, 'index.html');

app.get('/', (req, res)=> {
   res.sendFile(pathIndex)
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server running on port " + port);
})
