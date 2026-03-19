const express=require('express');
const app=express();
app.get('/',(req,res)=>res.send('patient service running'));
app.listen(3000);
