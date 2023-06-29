const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/login',(req, res)=>{
    res.send('Login Page')
})

app.get('/signup',(req,res)=>{
   res.send("Sign Up Page")
})

app.listen(5000,()=>{
    console.log('listening on port 5000')
})