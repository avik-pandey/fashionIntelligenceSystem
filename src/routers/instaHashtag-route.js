const express = require('express');
const insta = require('../models/insta.js')
var flipkart = require('../models/flipkart.js');
const router = new express.Router()
var categories = ['upper body','lower body','full body'];



var allItems = [];
var majCat = [];
var allWomenItems = [];
var subCatWomen = [];
var allMenItems = [];
var subCatMen = [];
var majCatFin = [];
var subCatMenFin = [];
var subCatWomenFin = [];

var tShirtsMen = [];
router.get('/vogueupper%20body', (req, res) => {

    

    async function f1(req, rep) {

        let temp = await flipkart.find({}, function (err, collection) {
            if (err) console.log(err);

            allItems = collection;
            for (var i = 0; i < allItems.length; i++) {
                var fake = allItems[i].majorCategory;
                majCat.push(fake);
            }

            majCatFin = Array.from(new Set(majCat));

        });
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log("1");
        }

        let temp1 = await flipkart.find({ majorCategory: 'Men' }, function (err, collection) {
            if (err)
                console.log(err)
            allMenItems = collection;

            for (var i = 0; i < allMenItems.length; i++) {
                var fake = allMenItems[i].subCategory
                subCatMen.push(fake);
            }

            subCatMenFin = Array.from(new Set(subCatMen));

        });
        if (temp1.err) {
            console.log(err)
        }
        else {

        }

        let temp2 = await flipkart.find({ majorCategory: 'Women' }, function (err, collection) {
            if (err)
                console.log(err)
            allWomenItems = collection;

            for (var i = 0; i < allWomenItems.length; i++) {
                var fake = allWomenItems[i].subCategory
                subCatWomen.push(fake);
            }

            subCatWomenFin = Array.from(new Set(subCatWomen));
            footwearMen = []; modelsFin = [];
        });
        if (temp2.err) {
            console.log(err)
        }
        else {

        }

        let temp3 = await flipkart.find({ subCategory: "T-Shirts" }, function (err, collection) {
            if (err) console.log(err)
            tShirtsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(tShirtsMen);
            res.render("vogueIndia", { categories,tShirtsMen, majCatFin ,subCatMenFin ,subCatWomenFin  
            });
        }
    }
    f1();
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