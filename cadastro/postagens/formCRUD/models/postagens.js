
const db = require('./conexaoBanco')

const post = db.sequelize.define('postagens', {
    titulo:{
        type: db.Sequelize.STRING    
    },

    conteudo: {
        type: db.Sequelize.TEXT  
    }
})
//comentar essa linha após executar o projeto uma vez
Post.sync({force: true})

module.exports = post
