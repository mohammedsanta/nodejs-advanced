const express = require('express')
const app = express()
const { Worker } = require('worker_threads')

const THREAD_COUNT = 4;

app.get('/non-blocking',(req,res) => {

    res.send('non blocking')

})

// Multithread with Optimizing

function createWorker() {

    // Promise which process the functionality of Worker

    return new Promise((resolve,reject) => {

        // Make new class of Worker and select the file js which have the code

        const worker = new Worker('./four-workers.js',{
            workerData: { thread_count: THREAD_COUNT }
        })

        // case if code work wothout any error occurred

        worker.on("message",(data) => {
            resolve(data)
        })

        // case if code work with error occurred 

        worker.on("error",(error) => {
            reject(`An error occurred ${error}`)
        })

    })

}

// end point of code

app.get('/blocking', async (req,res) => {
    
    // declare array for all promises

    const workerPromises = [];

    // make loop depends on count of threads which you have set

    for(i = 0;i < THREAD_COUNT;i++) {
        workerPromises.push(createWorker());
    }

    // run the workers inside the promise

    const thread_result = await Promise.all(workerPromises);

    // Collect all data

    const total = 
        thread_result[0] +
        thread_result[1] +
        thread_result[2] +
        thread_result[3]
    ;

    // the response with result

    res.status(200).send(`result is ${total}`);

})


app.listen(3000,() => {
    console.log('server has runed')
})