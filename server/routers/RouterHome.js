const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    res.redirect("Pagina inicial");
})
router.get('/cadastro/usuario',(req,res)=>{
    res.redirect('usuario.ejs')
})

module.exports = router;