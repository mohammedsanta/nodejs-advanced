const { workerData,parentPort } = require('worker_threads')

// Multithread with Optimizing

let counter = 0;

//                       the number of thread which is you set 
//                                        ^
for(i = 0;i < 10_000_000_000 / workerData.thread_count;i++) {
    counter++;
}

parentPort.postMessage(counter)