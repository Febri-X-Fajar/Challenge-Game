const express = require("express")
const app = express()
const session = require("express-session")
const flash = require("express-flash")
const port = 3000
const routes = require("./routes")
require('dotenv').config()


app.use(express.urlencoded({ extended:false }))
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

// const passport = require('./lib/passport')
// app.use(passport.initialize())
// app.use(passport.session())

app.use(flash())

app.set('view engine', 'ejs')

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


app.use(routes)

app.listen(port, () => {
  console.log("Runing on port " + port);
})





// app.use('/assets', express.static('assets'))



// app.get('/', (req, res) => {
//   res.render('homepage')
// })

// app.get('/register', (req, res) =>{
//   res.render('register')
// })

// app.get('/tgames', (req, res) =>{
//   res.render('thegames')
// })

// app.get('/s', (req, res) =>{
//   res.render('systemr')
// })

// app.get('/f', (req, res) =>{
//   res.render('features')
// })

// app.get('/ts', (req, res) =>{
//   res.render('topscore')
// })

// app.listen(port, () => {
//   console.log(` nyala dong ${port}`)
// })