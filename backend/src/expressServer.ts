import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend läuft')
})

app.listen(PORT, () => {
    console.log(`Server läuft auf ${PORT}`)
})