// Chama o arquivo conexaoBanco.js que está no mesmo diretório
const db = require('./conexaoBanco')

// cria a tabela
const post = db.sequelize.define('postagens', {
    titulo:{
        type: db.Sequelize.STRING    
    },

    conteudo: {
        type: db.Sequelize.TEXT  
    }
})

//Post.sync({force: true})

module.exports = post
