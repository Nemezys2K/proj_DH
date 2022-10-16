const controladorProduto = {
    index:"camisa",
    show:"imagem da camisa",
    create:"colocar no carrinho"
}

const controladorHome = {
    index: (req,res)=>{
        res.redirect('paginda de produtos');
    }
}


module.exports = controladorProduto;