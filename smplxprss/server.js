const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  num=parseInt(req.params.n, 10)
  res.send('Hello World! '+num)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
