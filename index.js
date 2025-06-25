
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

// arquivo estático
app.use(express.static('public')) 

// setup do handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

const products = [
  {
    id: "1",
    title: "Uma Vida Pequena",
    category: "Romance, Drama",
    price: "R$70.00",
  },

  {
    id: "2",
    title: "Os Sete Maridos de Evelyn Hugo",
    category: "Romance, LGBT",
    price: "R$45.50",
  },

  {
    id: "3",
    title: "Rádio Silêncio",
    category: "Romance, Ficção",
    price: "R$30.00",
  },

  {
    id: "4",
    title: "As Vantagens de Ser Invisível",
    category: "Romance, Ficção Juvenil",
    price: "R$56.60",
  },
];

app.get('/', (req,res) => {
    res.render('home', {products})
})

app.get('/product/:id', (req,res) => {
    const product = products[parseInt(req.params.id) -1]
    
    res.render('product', {product})
})

app.listen(3000, () => {
    console.log(`O servidor está rodando na porta 3000`)
})