const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(__dirname+'/public'));
app.use('/view', express.static(__dirname+'/views'));

app.listen(process.env.PORT || 3000,()=>{
})

app.get("/",(req,res)=>{
    pathHtml=path.join(__dirname,"/views/home.html");
    res.sendFile(pathHtml);
})