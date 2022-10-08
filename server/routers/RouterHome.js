const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    res.redirect("Pagina inicial");
})

module.exports = router;