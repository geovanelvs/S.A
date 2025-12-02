# Testes E2E com Cypress — Poke+

Este repositório contém os testes automatizados da aplicação Poke+, feitos como parte da UC de Teste de Front-end do SENAI.
A ideia foi validar duas telas importantes da aplicação — Cadastro e Pokédex — garantindo que tudo funcione direitinho quando o usuário interagir.

# Como rodar os testes
1. Instale o Cypress

No terminal do projeto:

npm install cypress --save-dev

2. Rode a aplicação localmente

Pode ser com o Live Server do VS Code mesmo.
"http://127.0.0.1:5500/"
Se o seu estiver em outra porta, é só ajustar isso no arquivo de configuração.

3. Abra o Cypress

Use o comando:

npx cypress open


Depois é só:

escolher E2E Testing

selecionar o navegador

clicar no teste que quer rodar.

# Estrutura do projeto
cypress/
  e2e/
    cadastro.cy.js
    index.cy.js
cypress.config.js
README.md

# O que foi testado
1. Página de Cadastro — cadastro.cy.js

Aqui eu testei:

se os campos aparecem certinho;

se o usuário consegue clicar para enviar;

se o formulário impede envio vazio;

se ele detecta quando as senhas não combinam;

e se tudo funciona quando os dados estão corretos;

Basicamente: garantir que ninguém se cadastre errado e a página saiba avisar isso.

2. Página da Pokédex — pokedex.cy.js

Os testes verificam:

os elementos principais da página;

se dá pra digitar na barra de busca;

se o botão de buscar funciona;

se a lista de Pokémons aparece;

Aqui a ideia é checar se a Pokédex responde às ações do usuário sem quebrar.

# Configuração do Cypress

Arquivo cypress.config.js:

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:5500",
  },
});


Caso você use outra porta, é só mudar ali no baseUrl.

# Objetivo geral

Esses testes garantem que:

as telas principais funcionam do jeito esperado

os inputs respondem corretamente

erros são mostrados pro usuário

e a navegação fica estável mesmo com mudanças no código

Automatizar isso facilita encontrar problemas rápido e deixa o projeto mais confiável.

# Autor

Projeto desenvolvido por Geovane, aluno do curso Técnico em Informática para Internet — SENAI CTTI.
