const express = require('express')
const router = require('./router')
require('./dbConnection')

const app = express()
const PORT = process.env.PORT || 3505

app.use(express.json())
app.use('/', router)

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT} environment: ${process.env.NODE_ENV}`)
})