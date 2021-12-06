
const express = require('express')
const app = express()
const port = 3000

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/list', (req,res) => {
  var id = req.body.id;
  console.log(id);
  res.send({"id":id});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
