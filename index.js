const express = require('express')
const app = express()

app.get("/home", (req, res)=>{
    res.send("Hello")
})

const port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`Listening to Port ${port}`)
})