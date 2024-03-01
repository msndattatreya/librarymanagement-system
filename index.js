const express = require('express')
var cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())
const port = 5000
app.use('/api/books',require('./app'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})