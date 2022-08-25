const express = express('express');
const app = express()
const router = express.Router()

app.use('/home', (req,res)=>{
    res.send("Bem vindo a King-Style");
})

app.listen(3000,()=>{console.log("Servidor do Projeto está operando!")})