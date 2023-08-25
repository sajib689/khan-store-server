const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
app.use(cors())
const categories = require('./data/categories.json')
const products = require('./data/products.json')
app.get('/', (req, res) =>{
    res.send('Welcome to khan store')
})
app.get('/categories', (req, res) =>{
    res.send(categories)
})
app.get('/products', (req, res) =>{
   res.send(products)
})
app.get('/products/:id', (req, res) =>{
    const id = req.params.id
   const selectedProduct = products.find(p => p._id === id)
   res.send(selectedProduct)
})
app.get('/categories/:id', (req, res) =>{
    const id = req.params.id
    if (id === 0 ){
        res.send(products)
    } else{
    const categoryProducts = products.filter(p => p.category_id === id)
    res.send(categoryProducts)
    }
})
app.listen(port, (req, res) =>{
    console.log('Khan store listening on port', port)
})