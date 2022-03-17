const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var num = parseInt(req.query.n, 10)
  loops = isNaN(num) ? 1 : num;
  var result = 0;

  for (let i = 0; i < loops; i++) { result += Math.random() * Math.random(); }
  text="The result of xrss run is :  " + result;
  res.send(text.substring(44,0))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
