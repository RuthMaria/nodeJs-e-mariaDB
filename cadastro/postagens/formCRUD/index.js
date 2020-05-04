const express = require('express') 
const app = express() 
const handlebars = require('express-handlebars') 
const bodyParser = require('body-parser')
const post = require('./models/postagens')

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

app.use('/css',express.static(__dirname +'/css'))

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get('/', (request, response) => {
    post.findAll({
        order: [['id', 'DESC']]
    }).then((postagens) => {
        response.render(__dirname+'/views/home', {
            posts: postagens
        })    
    })
})

app.get('/cadastrar', (request, response) => {
    response.render(__dirname+'/views/formulario')   
})

app.post('/enviar', (request, response) => {
    post.create ({                            
        titulo: request.body.titulo,
        conteudo: request.body.conteudo
    }).then(() => {
        response.redirect('/')   
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

