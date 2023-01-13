// require('dotenv/config');
const { v4: uuidv4 } = require('uuid');
const express = require('express');

let PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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
    return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
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

// messages routes
app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});

app.post('/messages', (req,res)=>{

    let id = uuidv4();

    let message = {
        id,
        text: req.body.text
    }

    messages[id] = message;
    return res.send(messages);
})

app.listen(PORT, ()=>{
    console.log("Example app is running on " + PORT);
})