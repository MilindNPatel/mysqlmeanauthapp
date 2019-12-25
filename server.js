var express = require('express')
var path = require('path')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(express.static(path.join(__dirname, 'public')))

var Users = require('./routes/Users')

app.use('/users', Users)

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})