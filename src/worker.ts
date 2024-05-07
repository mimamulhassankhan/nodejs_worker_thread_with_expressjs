import { parentPort, isMainThread } from 'worker_threads';

// worker thread error handling
// throw new Error('This is an error from worker thread');

let sum = 0;
for (let i = 0; i < 10_000_000_000; i++) {
    sum += i;
}

parentPort?.postMessage(sum);