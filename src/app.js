const path = require('path')
const express = require('express')
const ejs = require('ejs')
require('./db/mongoose.js')
var flipkart = require('./models/flipkart.js')
var myntra = require('./models/myntra.js')
var pinterest = require('./models/pintrest.js')
var insta = require('./models/insta.js')
const myntraRoute = require('./routers/myntra-route.js')
const flipkartRoute = require('./routers/flipkart-route.js');
const vogueRoute = require('./routers/vogue-route.js');
const pinterestRoute = require('./routers/pinterest-route.js')
const spawn = require('child_process').spawn;

const app = express()
const port = process.env.PORT || 3000; 

filepath = path.join(__dirname, '../public')
///yyyayaya
app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'ejs')
app.use(express.static(filepath))
app.use(myntraRoute);
app.use(flipkartRoute);
app.use(vogueRoute);
app.use(pinterestRoute);

app.get('', (req, res) => {
    res.render('index');
})


function runPython(filename ) {
    
    proc = spawn('python', [filename]);
    proc.stdout.on('data', function(data) { console.log("stdout: " + data); });
    proc.stderr.on('data', function(data) { console.log("stderr: " + data); });
    proc.on('exit', function(code) { console.log("exit: " + code); });
}

// var filenames = ['../pyScripts/flipkart.py', '../pyScripts/myntra.py', '../pyScripts/vogue_crawler.py'];
//   filenames.forEach(function(filename) {  runPython(filename) });

var n = 70000;

setInterval(function(){

  var filenames = ['../pyScripts/flipkart.py', '../pyScripts/myntra.py', '../pyScripts/vogue_crawler.py','../pyScripts/pinterest.py'];
  filenames.forEach(function(filename) {  runPython(filename) });
    
}, n * 1000);
 
console.log('jdnakj')
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


