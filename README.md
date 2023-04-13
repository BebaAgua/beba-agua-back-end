# Projeto Beba Água (Back End)

![GitHub top language](https://img.shields.io/github/languages/top/BebaAgua/beba-agua-back-end)
![GitHub repo size](https://img.shields.io/github/repo-size/BebaAgua/beba-agua-back-end)
![GitHub language count](https://img.shields.io/github/languages/count/BebaAgua/beba-agua-back-end)
![GitHub last commit](https://img.shields.io/github/last-commit/BebaAgua/beba-agua-back-end)

<div align="center">

![logo](https://user-images.githubusercontent.com/128413495/231575770-83ec8a17-f6e0-40d7-b5b8-d0e1eb823dbc.jpg)

</div>

## Sobre

Back End do projeto de conclusão do curso de Análise e Desenvolvimento de Sistemas (Faculdade Impacta), com o intuito de criar o hábito saudável de beber a quantidade correta de água todos os dias.

## Índice

- <a href="#functionality">Funcionalidades do projeto</a>
- <a href="#run">Como rodar o projeto?</a>
- <a href="#technology">Tecnologias utilizadas</a>
- <a href="#persons">Pessoas envolvidas no projeto</a>

<a id="functionality"></a>

## Funcionalidades do projeto

- ✅ Cadastro de usuários;
- ✅ Login de usuários;
- Metas de consumo de água;
- Ingestão de água feita pelo usuário por dia.

<a id="run"></a>

## Como rodar o projeto?

```bash
# Clone o repositório
$ git clone https://github.com/BebaAgua/beba-agua-back-end.git

# Acesse a pasta do projeto no seu terminal
$ cd (seu diretório)/beba-agua-back-end

# Configure o ambiente de desenvolvimento
$ node --version (para saber se tem o node instalado, se não tiver instalado entre no site: https://nodejs.org/en)

$ Configure o postgresql e use as configuracões realizadas no arquivo .env(disponível no projeto)

# Instale as dependências
$ yarn install
$ yarn prisma migrate dev

# Execute a aplicação
$ yarn dev

# A aplicacão será iniciada na porta 3000.
```

<a id="technology"></a>

## Tecnologias utilizadas

1. [NodejS](https://nodejs.org/en)
2. [Express](https://expressjs.com/)
3. [Typescript](https://www.typescriptlang.org/)
4. [Prisma](https://www.prisma.io/)
5. [Jsonwebtoken](https://jwt.io/)
6. [Bcryptjs](https://github.com/dcodeIO/bcrypt.js)
7. [Cors](https://github.com/expressjs/cors#readme)

<a id="persons"></a>

## Pessoas envolvidas no projeto

|  R.A.   |                 Nome                 | Turma |                     Email                     |
| :-----: | :----------------------------------: | :---: | :-------------------------------------------: |
| 2101043 | Luiz Guilherme Santos Sanches Anduze | 5º B  |   luiz.anduze@aluno.faculdadeimpacta.com.br   |
| 2100940 |     Rodrigo Augusto de Oliveira      | 5º B  | rodrigo.augusto@aluno.faculdadeimpacta.com.br |

<div style="text-align:center; margin-top:60px;">Feito com ❤ pela equipe Beba Água | São Paulo/Mogi das Cruzes | 2023</div>
