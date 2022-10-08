const express = require('express');
const app = express();
const router = express.Router();
const controler = require('../server/controllers/produtoController');

app.get('/', (req,res)=>{
    res.send("Bem vindo a King-Style");
});
app.use('/home',rotasHomePage);
app.use('/produtos', rotasProdutos);





app.listen(3000,()=>{console.log("Servidor do Projeto está operando!")});