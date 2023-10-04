const express = require('express');
const port = 8000;
const app = express();

app.get('/',(req,res) => {
    res.send('First step towards learning Express framework of Node.js');
})

app.listen(port , (err) => {
    if(err){
        console.log("Error in running the server");
    }
    console.log(`Server is up and running on port ::::${port}`);
})