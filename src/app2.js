const path = require('path')
const express = require('express')
const ejs = require('ejs')
require('./db/mongoose.js')
const request = require('request');
const automl = require('@tensorflow/tfjs-automl');
const tf = require("@tensorflow/tfjs-node");
const isAbsoluteUrl = require('is-absolute-url');
var flipkart = require('./models/flipkart.js')
var myntra = require('./models/myntra.js')
var pinterest = require('./models/pintrest.js')
var insta = require('./models/insta.js')
const myntraRoute = require('./routers/myntra-route.js')
const flipkartRoute = require('./routers/flipkart-route.js');
const instaHashtagRoute = require('./routers/instaHashtag-route.js');
const pinterestRoute = require('./routers/pinterest-route.js')
const fs = require('fs')

const mongoose = require('mongoose');

var vogue = mongoose.Schema({
    img_link: String,
    category: String,

}, { collection: 'magazine' });

var vogue = mongoose.model("magazine", magazine);


const app = express()
const port = process.env.PORT || 3000;

filepath = path.join(__dirname, '../public')

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



const categorize = async function(url) {
    request({ url, encoding: null }, async (err, resp, buffer) => {
      img = buffer;
      const decodedImage = tf.node.decodeImage(buffer);
      const model = await loadImageClassification('./src/model.json');
      var prediction = await model.classify(decodedImage);
      console.log(prediction);
      return prediction;
  });

    
}

var vogueData = [],categorizeData = [],categorizeFinData = [],categories = [],categoriesFin = [];
// async function f1(res,rep){
//   let temp = await vogue.find({}, function (err, collection) {
//        if(err)console.log(err)
//        vogueData = collection;
       
//        for(var i = 0;i<vogueData.length;i++){
//          var img = vogueData[i].img_link;
//          var ans = categorize(img);
//          vogue.updateOne({img_link : img},{$set:{category : ans}},function(req,rep){
//              console.log(rep);
//          })
//        }


//   })
//   if(temp.err)
//   console.log(err)
//   else{
//     console.log(vogueData)
//   }

//   let temp2 = await vogue.find({}, function(err,collection){
//       if(err)console.log(err)
//       categorizeFinData = collection;
//       for (var i = 0; i < categorizeFinData.length; i++) {
//         var fake = categorizeFinData[i].category
//         categories.push(fake);
//     }

//     categoriesFin = Array.from(new Set(categories));

//   })
//   if (temp.err) {
//     console.log(err)
// }
// else {
//     console.log(categoriesFin);
//     res.render('vogueIndia',{categoriesFin})
// }
  
// }



app.get('/vogueIndia',(req,res) =>{

  async function f1(req,rep){
    let temp = await vogue.find({}, function (err, collection) {
         if(err)console.log(err)
         vogueData = collection;
         
         for(var i = 0;i<vogueData.length;i++){
           var img = vogueData[i].img_link;
           var ans = categorize(img);
           vogue.updateOne({img_link : img},{$set:{category : ans}},function(req,rep){
               console.log(rep);
           })
         }
  
  
    })
    if(temp.err)
    console.log(err)
    else{
      console.log(vogueData)
    }
  
    let temp2 = await vogue.find({}, function(err,collection){
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

app.get('', async (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


