const { parentPort } = require('worker_threads')

// Multithread

let counter = 0;

for(i = 0;i < 10_000_000_000;i++) {
    counter++;
}

parentPort.postMessage(counter)