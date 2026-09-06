require('dotenv').config();

const express = require('express')
const app = express()   
const port = 4000;
app.get('/', (req,res) => {
    res.send("hello, World!")
})

app.get('/vishnu', (req,res) => {
    res.send("Vishnu Shankar Tripathi.");
})

app.get('/login', (req,res) => {
    app.sendFile()
})
app.listen(process.env.PORT, () => {
     console.log(`example app listening on port ${port}`)
})