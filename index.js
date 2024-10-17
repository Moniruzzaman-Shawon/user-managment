const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());

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

app.post('/users', (req, res) => {
    console.log("API");

    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Listening port ${port}`);

})