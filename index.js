// require('dotenv/config');
const express = require('express');

let PORT = 3000;

const app = express();


let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
};
  
  let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
};



app.get('/users', (req, res) => {
    return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
    return res.send('PUT method on user resource');
});
  
app.put('/users/:userId', (req, res) => {
    return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});
  
app.delete('/:userId', (req, res) => {
    return res.send(`DELETE HTTP methor on user/${req.params.userId} resource`);
});

app.listen(PORT, ()=>{
    console.log("Example app is running on " + PORT);
})