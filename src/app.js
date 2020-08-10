const path = require('path')
const express = require('express')
const ejs = require('ejs')
require('./db/mongoose.js')
const request = require('request');
const automl = require('@tensorflow/tfjs-automl');
const tf = require("@tensorflow/tfjs-node");
var flipkart = require('./models/flipkart.js')
var myntra = require('./models/myntra.js')
var pinterest = require('./models/pintrest.js')
var insta = require('./models/insta.js')
const myntraRoute = require('./routers/myntra-route.js')
const flipkartRoute = require('./routers/flipkart-route.js');
const instaHashtagRoute = require('./routers/instaHashtag-route.js');
const pinterestRoute = require('./routers/pinterest-route.js')
const spawn = require('child_process').spawn;
const fs = require('fs')
const mongoose = require('mongoose');



const app = express()
const port = process.env.PORT || 3000; 

filepath = path.join(__dirname, '../public')
///yyyayaya
app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'ejs')
app.use(express.static(filepath))
app.use(myntraRoute);
app.use(flipkartRoute);
app.use(instaHashtagRoute);
app.use(pinterestRoute);

const loadDictionary = modelUrl => {
    const lastIndexOfSlash = modelUrl.lastIndexOf("/");
    const prefixUrl =
      lastIndexOfSlash >= 0 ? modelUrl.slice(0, lastIndexOfSlash + 1) : "";
    const dictUrl = path.join(__dirname, 'dict.txt');
    const text = fs.readFileSync(dictUrl, { encoding: "utf-8" });
    return text.trim().split("\n");
  };
  
  const loadImageClassification = async modelUrl => {
    const [model, dict] = await Promise.all([
      tf.loadGraphModel(`file://${modelUrl}`),
      loadDictionary(modelUrl)
    ]);
    return new automl.ImageClassificationModel(model, dict);
  };



async function categorize(url) {
   request({ url, encoding: null }, async (err, resp, buffer) => {
      if(err) throw err;
      const decodedImage = tf.node.decodeImage(buffer);
      const model = await loadImageClassification('./src/model.json');
      var prediction = await model.classify(decodedImage);
      var maxProb = prediction[0].prob;
      var maxLabel = prediction[0].label;
      for(var i = 1; i < prediction.length; i++){
        if(prediction[i].prob > maxProb){
          maxProb = prediction[i].prob;
          maxLabel = prediction[i].label;
        }
        console.log(maxLabel);
      }
      magazine.updateOne({img_link : url},{$set:{category : maxLabel}},function(req,rep){
               console.log(rep);
           })
  });
}



    // var maxProb = prediction[0].prob;
    // var maxLabel = prediction[0].label;
    // for(var i = 1; i < prediction.length; i++){
    //   if(prediction[i].prob > maxProb){
    //     maxProb = prediction[i].prob;
    //     maxLabel = prediction[i].label;
    //   }
    // }
    // console.log(prediction);


//https://images-na.ssl-images-amazon.com/images/I/81jadDIXfYL._UL1500_.jpg


var magazine = mongoose.Schema({
  img_link: String,
  category: String,

}, { collection: 'magazine' });

var magazine = mongoose.model("magazine", magazine);

var vogueData = [],categorizeData = [],categorizeFinData = [],categories = [],categoriesFin = [];
app.get('/vogueIndia', (req, res) => {
  // res.render('vogueIndia',{ categories,tShirtsMen, majCatFin ,subCatMenFin ,subCatWomenFin});

  async function f1(req,rep){
      let temp = await magazine.find({}, function (err, collection) {
           if(err)console.log(err)
           vogueData = collection;
           
           for(var i = 0;i<vogueData.length;i++){
            var img = vogueData[i].img_link;
            categorize(img);
           }
    
    
      })
      if(temp.err)
      console.log(err)
      else{
        console.log(vogueData)
      }
    
      let temp2 = await magazine.find({}, function(err,collection){
          if(err)console.log(err)
          categorizeFinData = collection;
          for (var i = 0; i < categorizeFinData.length; i++) {
            var fake = categorizeFinData[i].category
            categories.push(fake);
        }
    
        categoriesFin = Array.from(new Set(categories));
    
      })
      if (temp2.err) {
        console.log(err)
    }
    else {
        console.log(categoriesFin);
        res.render('vogueIndia',{categoriesFin})
    }
      
    }
  
    f1();
})


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


