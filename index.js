const express = require('express')
const app = express()
const port = 3000
const ejs = require('ejs')


app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/one', (req, res) => {
  res.render('one')
})

app.get('/inquiry', (req, res) => {
  res.render('inquiry')
})


app.get('/company', (req, res) => {
  res.render('company')
})

app.get('/pay', (req, res) => {
  res.render('pay')
})

app.get('/notice', (req, res) => {
  res.render('notice')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
