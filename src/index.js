const express = require('express');
const app = express();
app.listen(3030,()=>{
    console.log("App listening to port: 3030...");
})
app.get('/',(req,res)=>{
    res.send('Auto update');
})