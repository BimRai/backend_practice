import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Bims Domain</h1>");
});

app.listen(port, () => {
    console.log(`Server has successfully started on port ${port}`)
});