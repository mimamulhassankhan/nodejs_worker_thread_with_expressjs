import express from 'express';
import { Worker, isMainThread } from 'worker_threads';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send("Hello From Express and Typescirpt")
})

app.get('/heavy', (req, res) => {
    const worker = new Worker(__dirname + '/worker.js');

    worker.on('message', (sum) => {
        res.send(`Sum is ${sum}`);
    });

    worker.on('error', (err) => {
        console.error('Gracefully handled error:', err);
        res.status(500).send('Something went wrong');
    });

})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})