const express = require('express');
const insta = require('../models/insta.js')
const router = new express.Router()

router.get('/vogueIndia', (req, res) => {
    res.render('vogueIndia');
})
var vogue2020 = [],elle2020 = [],fashion = [];
router.get('/instaHashtags', (req, res) => {
    res.render('instaHashtags',{vogue2020,elle2020,fashion});
})

router.get('/instaHashtagsVogue2020', (req, res) => {
    elle2020 = [],fashion = []
    async function f1(req,rep){
        let temp = insta.find({hashtag : 'vogue2020'},function(err,collection){
            if(err)console.log(err)
            else{
                vogue2020 = collection;
            }

        });
        if(temp.err)console.log(err);
        else{
            console.log(vogue2020)
            res.render('instaHashtags',{vogue2020,elle2020,fashion});
        }
    }

    f1();
})

router.get('/instaHashtagsElle2020', (req, res) => {
    vogue2020 = [],fashion = []
    async function f1(req,rep){
        let temp = insta.find({hashtag : 'elle2020'},function(err,collection){
            if(err)console.log(err)
            else{
                elle2020 = collection;
            }

        });
        if(temp.err)console.log(err);
        else{
            console.log(elle2020)
            res.render('instaHashtags',{vogue2020,elle2020,fashion});
        }
    }

    f1();
})

router.get('/instaHashtagsFashion', (req, res) => {
    elle2020 = [],vogue2020 = []
    async function f1(req,rep){
        let temp = insta.find({hashtag : 'fashion'},function(err,collection){
            if(err)console.log(err)
            else{
                fashion = collection;
            }

        });
        if(temp.err)console.log(err);
        else{
            console.log(fashion)
            res.render('instaHashtags',{vogue2020,elle2020,fashion});
        }
    }

    f1();
})

module.exports = router;