var express = require('express')
var app = express()
const api = express.Router()
function reverse(str) {
  var splitString = str.split('')
  var reverseArray = splitString.reverse()
  return reverseArray.join('')
}
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
api.get('/:param', (req, res) => {
  //r=reverse(req.params.param)
  res.send(reverse(req.params.param))
})
api.get('/', (req, res) => {
  res.send(
    `
    Put something after the / to get reverse it
    
    `
  )
})
app.use('/', api)
app.listen(3000, () => {
  //console.log('Server running on port 3000')
})
