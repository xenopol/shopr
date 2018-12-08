const express = require('express')

const app = express()

const port = 4000

app.get('/test', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
