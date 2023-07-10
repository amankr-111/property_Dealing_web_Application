const dotenv= require('dotenv')
const mongoose = require('mongoose')
const express = require('express')

dotenv.config({path:'./config.env'})
require('./DB/conn')

// const User= require('./model/userSchema')
const app = express();
app.use(express.json())
app.use(require('./router/auth'))


const PORT = process.env.PORT


const middleware =(req, res, next)=>{
        console.log('middleware')
        next()
}

app.get('/sell',middleware,(req,res)=>{
   res.send("sell Page")
})

app.listen(PORT,()=>{
    console.log('listening on port 5000')
})