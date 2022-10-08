const fs = require('fs');

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Bem vindo a KING-STYLE")
})

app.listen(5000,()=>{console.log("servidor rodando da porta")});

//npm init
//npm install express
//npm install nodemon -g
//npm i ejs