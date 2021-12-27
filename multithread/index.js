/*
*  File Name: index.js from https://javascript.plainenglish.io/how-to-do-multithreading-with-node-js-207aabdaddfb
*  Description: This is the main thread
*/
const express = require("express");
const { Worker } = require("worker_threads"); const app = express();
const port = 3000; const getSum = (limit) => {
    let sum = 1;
    for (let i = 1; i < limit; i++) {
        sum = sum + i;
    }
    return sum;
}; app.get("/", (req, res) => {
    const result = getSum(100);
    res.send(`Processed function getSum on main thread and result: ${result}`);
});
app.get("/seprate-thread", (req, res) => {
    const seprateThread = new Worker(__dirname + "/seprateThread.js");
    seprateThread.on("message", (result) => {
        res.send(`Processed function getSum on seprate thread: ${result}`);
    });
    seprateThread.postMessage(100000);
}); app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});