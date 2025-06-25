# Projeto Express com Handlebars

[![Node.js](https://img.shields.io/badge/Node.js-18.x+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue)](https://expressjs.com/)
[![Handlebars](https://img.shields.io/badge/Handlebars-7.x-orange)](https://handlebarsjs.com/)

Este projeto implementa uma aplicação web utilizando Express.js como framework backend e Handlebars como template engine.

## 🚀 Começando

### 📋 Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Git (opcional)

### 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Astaphaanos/projeto_express_handlebars.git
```
2. Instale as dependências
```bash
cd projeto_express_handlebars
npm install
```
3. Configura as variáveis de ambiente
```bash
cp .env.example .env
```

### 🏃 Executando o projeto
Para produção:
```bash
npm start
````

## 📂 Estrutura do Projeto

```text
pprojeto_express_handlebars/
├── src/
│   ├── controllers/    # Lógica dos controllers
│   ├── models/         # Modelos de dados
│   ├── public/         # Arquivos estáticos (CSS, JS, imagens)
│   ├── views/          # Templates Handlebars
│   │   ├── layouts/    # Layouts principais
│   │   ├── partials/   # Componentes reutilizáveis
│   │   └── pages/      # Páginas específicas
│   ├── routes/         # Definição de rotas
│   └── app.js          # Configuração do Express
├── .env.example        # Exemplo de variáveis de ambiente
├── package.json        # Dependências e scripts
└── README.md           # Este arquivo
```

### 📦 Dependências Principais
```text
Pacote	Versão	Descrição
express	^4.18.2	Framework web para Node.js
express-handlebars	^7.1.2	Integração Handlebars/Express
nodemon (dev)	^3.0.2	Reinício automático do server
```
