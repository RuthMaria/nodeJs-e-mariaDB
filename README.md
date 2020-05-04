# Postagens

Aplicação simples de cadastro (CRUD) com criação, leitura, atualização e exclusão de postagens. Onde cada postagem tem o seu título e a sua descrição. 

Este projeto faz parte dos meus estudos de nodeJS, baseado no curso do [Youtube](https://www.youtube.com/playlist?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B).

 
## Requisitos
- MariaDB
- NodeJS na sua versão LTS
- Visual Studio Code

## Comandos

- Clonar esse repositório
```
git clone https://github.com/RuthMaria/nodeJs-e-mariaDB.git
```

- Instalar dependências
```
npm install express --save
npm install --save sequelize
npm install --save mariadb
npm install --save express-handlebars
npm install --save body-parser
npm -D install nodemon
```

- Executar projeto

  Criar o banco de dados cadastro

  Rodar o comando
  ```
  nodemon index.js
  ```

- Acesso local
```
localhost:8081
```
 
## telas

- Adiciona uma nova postagem

![tela de cadastro](https://github.com/RuthMaria/nodeJs-e-mariaDB/blob/master/cadastro/postagens/formCRUD/images/cadastrarPostagem.png)

- Lista as postagens salvas

![home do site](https://github.com/RuthMaria/nodeJs-e-mariaDB/blob/master/cadastro/postagens/formCRUD/images/listarPostagens.png)

- Edita uma postagem

![tela de editar](https://github.com/RuthMaria/nodeJs-e-mariaDB/blob/master/cadastro/postagens/formCRUD/images/editarPostagem.png)

