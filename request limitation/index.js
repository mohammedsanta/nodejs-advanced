const express = require('express')
const { loginLimit } = require('./middlewares/loginLimit')
const { postLimit } = require('./middlewares/postLimit')
const app = express()


app.use('/login',loginLimit)
app.use('/post',postLimit)

app.get('/',(req,res) => {

    res.send('home')

})

app.get('/login',(req,res) => {

    res.send('login')

})

app.post('/post',(req,res) => {

    res.send('post')

})

app.listen('3000',() => {
    console.log('server have been run')
})