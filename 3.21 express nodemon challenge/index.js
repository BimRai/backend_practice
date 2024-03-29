import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Bims Domain</h1>");
});

app.get('/about', (req, res) => {
    res.send("<h2>About Page</h2><p>I love games</p>");
});


app.get('/contact', (req, res) => {
    res.send("<h1>Contact Page</h1>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})