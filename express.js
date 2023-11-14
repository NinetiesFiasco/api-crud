const express = require('express')
//require('./mongo/connection')
//const addUser = require('./mongo/addUser')

const app = express()
const PORT = process.env.PORT || 3505
//const GATEWAY_URL = `http://gateway:${process.env.GATEWAY_PORT}`

app.get('/', (req, res) => {
  console.log(req.headers)
  res.send(`Hello World! API CRUD ${process.env.NODE_ENV}`)
})

app.get('/mongo', async (req, res) => {
  const responsik = await addUser()
  res.send(responsik) 
})

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT} environment: ${process.env.NODE_ENV}`)
})