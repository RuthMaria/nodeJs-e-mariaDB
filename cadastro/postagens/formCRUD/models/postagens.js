
const db = require('./conexaoBanco')

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
