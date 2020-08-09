const request = require('request');
const automl = require('@tensorflow/tfjs-automl');
const tf = require("@tensorflow/tfjs-node");
const isAbsoluteUrl = require('is-absolute-url');
const fs = require('fs')


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
      const model = await loadImageClassification('../src/model.json');
      var prediction = await model.classify(decodedImage);
      console.log(prediction);
      return prediction;
  });

    
}

