# RESTful API

## Descrição
<p align="center">
  API desenvolvida durante os estudos do Hackathon Dev da Stefanini seguindo modelo de arquitetura REST. 
</p>
<p align="center">
  O objetivo do estudo é apresentar o básico da utilização e configuração de rotas e middlewares.
<p>

## Índice
<p align="center"> - 
 <a href="#status">Status</a> - 
 <a href="#requisistos">Requisitos</a> - 
 <a href="#executando">Executando</a> - 
 <a href="#testes">Testes</a> - 
 <a href="#tecnologias">Tecnologias</a> - 
 <a href="#autor">Autor</a> - 
 <a href="#licença">Licença</a> - 
</p>

## Status 

<p align="center">Em desenvolvimento...</p>

## Funcionalidades
- [x] CRUD de usuário
- [x] CRUD de curso para usuário
- [ ] CRUD de curso
- [ ] Integração com BD

## Requisitos

### Ferramentas necessárias

Instale essas ferramnetas em sua máquina (caso não as tenha)

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Isomnia](https://insomnia.rest/) (Opcional)
- [VSCode](https://code.visualstudio.com/) (Opcional)

### Clone o repositório

No terminal ou prompt de comando 

$ git clone <https://github.com/vinidesenvolve/Hackathon_Stefanini_API_REST>

### Configure o ambiente

Acesse a pasta do projeto

$ cd HackatonStefanini

Inicie o NPM

$ npm init

Instale as dependências 

$ npm install express

## Executando

### Suba o servidor

Execute a aplicação 

$ node index.js

//Server is running at 8000

## Testes

### CRUD usuário

POST - http://localhost:8000/user
{
	"name":"Cobolson"
}

GET - http://localhost:8000/user

GET - http://localhost:8000/user/:id

PUT - http://localhost:8000/user/:id
{
	"name":"Javinha"
}

DELETE - http://localhost:8000/user/:id

### CRUD curso

POST - http://localhost:8000/user/:id/course
{
	"course":"NodeJS"
}

GET - http://localhost:8000/user/:id/course

PUT - http://localhost:8000/user/:id/course/:courseId
{
	"course":"Java"
}

DELETE - http://localhost:8000/user/:id/course/:courseId

## Tecnologias
- [Node.js](https://nodejs.org/en/)
- [Javascript](https://www.javascript.com/)
- [Express](https://expressjs.com/)

## Autor
<p> <a href="https://github.com/vinidesenvolve">Vinicius Alves Rodrigues</a> </p>
<p> <a href="https://www.linkedin.com/in/vinidesenvolve/">Likedin</a> </p>
<p> <a href="vinidesenvolve@gmail.com">Email</a> </p>

## Licença
<p align="center">
MIT License

Copyright (c) 2021 Vinicius A. Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</p>
