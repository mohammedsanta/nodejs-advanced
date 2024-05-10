const express = require('express')
const app = express()

const { Worker } = require('worker_threads')

// Multithread

app.get('/non-blocking',(req,res) => {

    res.send('non blocking')

})

app.get('/blocking',(req,res) => {
    
    const worker = new Worker('./worker.js')

    worker.on("message",(data) => {
        res.status(200).send(`result is ${data}`)
    })

    worker.on("error",(error) => {
        res.status(404).send(`An error occurred ${error}`)
    })

})


app.listen(3000,() => {
    console.log('server has runed')
})