const express = require('express');
const app = express();
const router = express.Router();

app.get('/home',(req,res)=>{
    res.send("Pagina inicial");
})

router.post('/cadastro/usuario',(req,res)=>{
    res.redirect('usuario.ejs')
})

module.exports = router;