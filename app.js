var express = require('express')
var ejs = require('ejs')

var app = express()


app.get('/log?date',(req,res)=>{
    var date = req.query.date
    date = new Date(date);
})

app.get('/status',(req, res)=>{
    console.log('status!')
})

app.listen(8080,()=>{
console.log('run!')
})