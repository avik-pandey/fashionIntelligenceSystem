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
const vogueRoute = require('./routers/vogue-route.js');
const pinterestRoute = require('./routers/pinterest-route.js')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000;

filepath = path.join(__dirname, '../public')

app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'ejs')
app.use(express.static(filepath))
app.use(myntraRoute);
app.use(flipkartRoute);
app.use(vogueRoute);
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


app.get('', async (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


