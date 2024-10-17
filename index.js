const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const users = [
    { id: 1, name: 'Alice', salary: 3000 },
    { id: 2, name: 'Bob', salary: 4000 },
    { id: 3, name: 'Jack', salary: 2000 },
    { id: 4, name: 'Mike', salary: 5600 }
]

app.get('/', (req, res) => {
    res.send("User server is running")

})

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Listening port ${port}`);

})