const express = require('express')
const massive = require('massive')
const session = require('express-session')
require('dotenv').config()
const app = express()

// Controllers
const auth = require('./controllers/auth_controller')

// Middleware

app.use(express.json());
app.use(session({
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: false,
   cookie: {
     maxAge: 1000 * 60 * 60 * 24 * 14
   }
 }))

 // Database Initialization
 massive({
   connectionString: process.env.CONNECTION_STRING,
   ssl: {rejectUnauthorized: false}
 }).then(db => {
   app.set('db', db)
   console.log('Database is kickin')
 })

 // Authentication
app.post('/api/register', auth.userRegister)
app.post('/api/login', auth.userLogin)
app.get('/api/user', auth.getUser)
app.get('/api/logout', auth.userLogout)

PORT = 6700;

app.listen(PORT, ()=> {
  console.log(`Catching rays on Port ${PORT} 🏖️ `)
})