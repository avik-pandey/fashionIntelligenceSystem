const Instagram = require('instagram-web-api')
const { username, password } = process.env
var mongoose = require('mongoose');
var promise = require('promise');
const { connected } = require('process');
var pass = "Avik@838";
var passENC = encodeURIComponent('Avik@838');
console.log(passENC);
const url = "mongodb://user:flipkart@cluster0-shard-00-00.pe7lw.mongodb.net:27017,cluster0-shard-00-01.pe7lw.mongodb.net:27017,cluster0-shard-00-02.pe7lw.mongodb.net:27017/intelFashion?ssl=true&replicaSet=atlas-r398qc-shard-0&authSource=admin&retryWrites=true&w=majority";
// var db = 'intelFashion'; 
console.log(url)
mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,

})
  .then(() => {
    console.log('Connection to the Atlas Cluster is successfuul!');
  })
  .catch((err) => console.error(err));

// const insta = mongoose.model('insta', { 
//   hashtag: { type: String }, 
//   imgUrl: { type: Number } 
// },'insta');

var instaSchema = new mongoose.Schema({
  hashtag: String,
  imgUrl: String

});



var insta = mongoose.model("insta", instaSchema);
var hashtags = ['vogue2020', 'fashion', 'elle2020',]
const client = new Instagram({ username: 'theod.ds', password: 'AvikShradhaRachit' })
var ok = {};
var allImgLinks = [];
client
  .login()

  .then(() => {
    insta.deleteMany({}).then(function () {
      console.log("Data deleted"); // Success 
    }).catch(function (error) {
      console.log(error); // Failure 
    });
    for (let i = 0; i < hashtags.length; i++) {
      async function f1(req,req){
      var hash = hashtags[i];
      console.log(hash);
      
      await client.getMediaFeedByHashtag({ hashtag: hash })
        .then((fin) => {
          ok = fin['edge_hashtag_to_media'];
          instaArr = [];
          instaArr = ok.edges;
          // console.log(instaArr);
          console.log(hash, "p");
          async function f2(req,rep){
          for (var j = 0; j < instaArr.length; j++) {
            // console.log(instaArr[i].node)
            fin = {
              hashtag: hash,
              imgUrl: instaArr[j].node.display_url
            }
            allImgLinks.push(fin);
          }
        }
        f2();


          async function f3(req,rep){

          await insta.insertMany(allImgLinks).then(function () {
            console.log("Data inserted")
            console.log(allImgLinks.length) // Success 
          }).catch(function (error) {
            console.log(error)      // Failure 
          });
        }
        f3();

        })
      }

      f1();
    }





  })



