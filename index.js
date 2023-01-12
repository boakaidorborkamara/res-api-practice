// require('dotenv/config');
const express = require('express');

let PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.listen(PORT, ()=>{
    console.log("Example app is running on " + PORT);
})