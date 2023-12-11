require('dotenv').config()
const express=require('express')
const app=express()
const port=4000

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/twitter',(req,res)=>{
    res.send('yuvistweet')
})
app.get('/login',(req,res)=>{
    res.send('<h1>he you wassup!</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on a ${port}`)
})