// panggil plugin
const http = require('http')
const express = require('express')
const mongoose = require('mongoose')

//insialisasi router
const users = require('./routes/users')


//inisialisasi
const app = express()
const server = http.createServer(app)


//Panggil Database
mongoose.connect('mongodb://localhost:27017/belajar', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).connection


//middleware, berfungsi untuk mengaktifkan file json
app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))


//panggil router  
app
  .use('/user', users)


  //inisialisasi server
function start() {
  const port = 8000
  server.listen(port)
  console.info(`Server on localhost:${port}`)
}


//jalanin server
start()