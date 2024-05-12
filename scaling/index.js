import express from "express";
const app = express()
const port = 3000;

app.get('/heavy',(req,res) => {

    let total = 0;

    for(let i=0;i < 50_000_000;i++) {
        total++;
    }

    res.send(`The result of the CPU intensive task is ${total}\n`);

})

app.listen(port,() => {

    console.log(`App listening on port ${port}`);
    console.log(`worker pid=${process.pid}`);

})