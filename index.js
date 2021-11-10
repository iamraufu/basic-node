const express = require('express')
const app = express()
const port = 4000

app.get('/hello', (req, res) => {
  res.send('Hello Mom, I am learning Node JS')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})