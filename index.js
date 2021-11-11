const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

const vegetables = [
    {},
    {
        id: 1,
        name: 'Cabbage',
        color: 'green',
        price: 100
    },
    {
        id: 2,
        name: 'Carrot',
        color: 'red',
        price: 60
    },
    {
        id: 3,
        name: 'Tomato',
        color: 'red',
        price: 80
    },
    {
        id: 4,
        name: 'Potato',
        color: 'brown',
        price: 50
    },
    {
        id: 5,
        name: 'Onion',
        color: 'yellow',
        price: 40
    },
    {
        id: 6,
        name: 'Cucumber',
        color: 'green',
        price: 30
    },
]

app.get('/', (req, res) => res.send('Welcome to my Vegetable Shop!'))

// app.get('/vegetables/cabbage', (req, res) => {
//     const veg = {
//         id:1,
//         name: 'Cabbage',
//         color: 'green',
//         price:100
//     }
//   res.send(veg)
// })

// app.get('/vegetables/carrot', (req, res) => {
//     const veg = {
//         id:2,
//         name: 'Carrot',
//         color: 'red',
//         price:60
//     }
//   res.send(veg)
// })

// Get Method
app.get('/vegetables',(req, res)=>{
    res.send(vegetables)
})
app.get('/vegetables/:id', (req, res) => {
    const id = req.params.id
    const vegetable = vegetables[id];
    res.send(vegetable)
})

//  POST
app.post('/addVegetable', (req, res) => {
    console.log("Data received!", req.body)
    //  Saving to Database
    const vegetable = req.body;
    vegetable.id = 80;
    console.log(vegetable)
    res.send(vegetable);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})