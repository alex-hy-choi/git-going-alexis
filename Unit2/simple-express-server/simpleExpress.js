const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/thisIsAPost', (req, res) => {
    console.log('POST received')
    console.log(req);
    console.log(req.body);
  })
  

app.get('/', (req, res) => res.sendFile(__dirname + '/simpleExpress.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
