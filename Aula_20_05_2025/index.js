//https://dontpad.com/web-2025
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  //res.send('Hello World! - Teste')
  //res.sendFile(__dirname + '/public/index.html')
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/blog', (req, res) => {
   //res.send('Blog') 
   //res.sendFile(__dirname + '/public/blog.html')
   res.sendFile(path.join(__dirname, 'public', 'blog.html'))
})
app.use(express.urlencoded({extended:true}))
app.post('/contato', (req, res) => {
    const {nome, email} = req.body
    res.send(`Dados recebidos: Nome: ${nome}, Email:${email}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
