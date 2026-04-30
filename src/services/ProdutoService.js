const ProdutoRepository = require('../repositories/ProdutoRepository')

class ProdutoService{
    async listarProdutos(){
        const produtos = await ProdutoRepository.listarProdutos()
        return{
            sucesso: true,
            dadso: produtos,
            total: produtos.length
        }
    }
    async buscarProdutoPorId(id){
        if(!id || isNan(id)){
            throw{status: 400,
                mensagem: 'ID invalido'
            }//devolvendo erros para todas as validações, não deixa o codigo ir pra frente
        }
        const produto = await ProdutoRepository.buscarProdutoPorId(id)
        if(!produto){
            throw{
                status: 404,
                mensagem: 'Produto não encontrado'
            }
        }
        return{
            sucesso: true,
            dados: produto
        }
    }// Transformar a validação em uma função
    
}