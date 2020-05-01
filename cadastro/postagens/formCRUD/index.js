const express = require('express') 
const app = express() 
const handlebars = require('express-handlebars') 
const bodyParser = require('body-parser')
const post = require('./models/postagens')

/* Definindo o handlebars como template engine do projeto.
O main é o template padrão da aplicação e deve está dentro 
da pasta layouts, pois a mesma é chamada por default*/

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

// para usar o arquivo CSS
app.use('/css',express.static(__dirname +'/css'))

/* Configurando body parser para podermos pegar dados do formulario */
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

/* Pega todos os valores do banco de dados e envia para o home exibir.
Postagens é o array com os valores do banco.*/
app.get('/', (request, response) => {
    post.findAll({
        order: [['id', 'DESC']]
    }).then((postagens) => {
        response.render(__dirname+'/views/home', {
            posts: postagens
        })    
    })
})

// GET: envia os dados pela URL
app.get('/cadastrar', (request, response) => {
    response.render(__dirname+'/views/formulario')   
})

/* POST: não passa os dados para URL.
O request.body.titulo é o nome do campo do form ao qual queremos pegar o conteúdo digitado.
create cria uma nova linha no banco de dados com a informação que foi digitada.
*/
app.post('/enviar', (request, response) => {
    post.create ({                            
        titulo: request.body.titulo,
        conteudo: request.body.conteudo
    }).then(() => {
        response.redirect('/')   // redireciona para a pagina home
    }).catch((erro) => {
        response.send('Houve um erro: ' + erro)        
    })
})

app.get('/deletar/:id', (request, response) => {
    post.destroy({
        where: {
            'id': request.params.id
        }
    }).then(() => {
        response.redirect('/')   
    }).catch((erro) => {
        response.send('Esta postagem não existe'+erro)
    })
})

let id
app.get('/editar/:id', (request, response) => {
    id = request.params.id
    response.render(__dirname+'/views/editar')   
})

app.post('/edit', (request, response) => {
    post.update({
        titulo: request.body.titulo,
        conteudo: request.body.conteudo
    }, {
        where: {
            id: id
        }
    }).then(() => {
        response.redirect('/')
    })
})

app.listen(8081, function () {
    console.log('Servidor rodando na URL http://localhost:8081')
}) 

