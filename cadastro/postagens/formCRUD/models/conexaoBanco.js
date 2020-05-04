// conexão com o banco de dados

const Sequelize = require('sequelize')

const sequelize = new Sequelize('cadastro', 'root', '', {
    host:'localhost',
    dialect:'mariadb'
})

// verifica se conseguiu se conectar com o banco de dados
sequelize.authenticate().then(function () {
    console.log('Conectado com sucesso')

}).catch(function (erro) {
    console.log('Falha ao se conectar ' + erro)  
})

// vai exportar as duas variáveis para usar em outros arquivos
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}


