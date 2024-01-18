require('dotenv').config();
const express = require('express');
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('Twitter-Sonking11');
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login karo<h1/>');
})

app.get('/samosa',(req,res)=>{
    res.send('Bhai chalo samosa khalete');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log('testingggg....');