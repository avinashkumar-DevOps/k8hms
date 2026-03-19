const express=require('express');
const app=express();
app.get('/',(req,res)=>res.send('doctor service running'));
app.listen(3000);
