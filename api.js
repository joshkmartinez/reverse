var express = require('express')
var app = express()
const { parse } = require('url')
const api = express.Router()
function reverse(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split('') // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse() // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join('') // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray // "olleh"
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
