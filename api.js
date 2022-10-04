var express = require('express')
var app = express()
const api = express.Router()
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

api.get('/rick', (req, res) => {
  res.writeHead(302, {
    Location: 'https://rickroll.now.sh'
  })
  res.end()
})

api.get('/:param', (req, res) => {
  //fancy way of reversing a string
  res.send(
    [...req.params.param].reverse().join('') //doesn't spit an emoji
  )
})
api.get('/', (req, res) => {
  res.send(
    `
Put something after the / to reverse it \n
🔃
github.com/joshkmartinez/reverse
    `
  )
})
app.use('/', api)
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
