const express = require('express');
var pinterest = require('../models/pintrest.js');
const router = new express.Router()

var allItems1 = [];
var models = [];
var modelsFin = [];
var kendallJenner = [],kylieJenner = [];


router.get('/pinterest', (req, res) => {

    kylieJenner = [];
    kendallJenner = [];

    async function f1(req, rep) {
        let temp = await pinterest.find({}, function (err, collection) {
            if (err)
                console.log(err)
            allItems1 = collection;
            //  console.log(allItems1);
            for (var i = 0; i < allItems1.length; i++) {
                var fake = allItems1[i].model
                models.push(fake);
            }

            modelsFin = Array.from(new Set(models));
            // subCatWomenFin = [];majCatFin = [];subCatMenFin = [];footwearMen = []
        })
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log(modelsFin);
            res.render('pinterest', { kendallJenner, modelsFin,kylieJenner });
        }
    }
    f1();
})

router.get('/pinterestkendall%20jenner%20outfits', (req, res) => {
    
    kylieJenner = [];
    modelsFin = [];
    async function f1(req, rep) {
        let temp = await pinterest.find({}, function (err, collection) {
            if (err)
                console.log(err)
            allItems1 = collection;
            //  console.log(allItems1);
            for (var i = 0; i < allItems1.length; i++) {
                var fake = allItems1[i].model
                models.push(fake);
            }

            modelsFin = Array.from(new Set(models));
            // subCatWomenFin = [];majCatFin = [];subCatMenFin = [];footwearMen = []
        })
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log(modelsFin);
        }

        let temp1 = await pinterest.find({model:'kendall jenner outfits' },function(err,collection){
            if(err)console.log(err)
            else{
                kendallJenner = collection;
            }
        })
        if(temp1.err)console.log(err)
        else{
            console.log(kendallJenner);
            res.render('pinterest', {   kendallJenner, modelsFin, kylieJenner } );
        }
    }
    f1();
})

router.get('/pinterestkylie%20jenner%20outfits', (req, res) => {

    modelsFin = [];
    kendallJenner = [];

    async function f1(req, rep) {
        let temp = await pinterest.find({}, function (err, collection) {
            if (err)
                console.log(err)
            allItems1 = collection;
            //  console.log(allItems1);
            for (var i = 0; i < allItems1.length; i++) {
                var fake = allItems1[i].model
                models.push(fake);
            }

            modelsFin = Array.from(new Set(models));
            // subCatWomenFin = [];majCatFin = [];subCatMenFin = [];footwearMen = []
        })
        if (temp.err) {
            console.log(err)
        }
        else {
            console.log(modelsFin);
        }

        let temp1 = await pinterest.find({model:'kylie jenner outfits' },function(err,collection){
            if(err)console.log(err)
            else{
                kendallJenner = collection;
            }
        })
        if(temp1.err)console.log(err)
        else{
            console.log(kendallJenner);
            res.render('pinterest', {   kendallJenner, modelsFin, kylieJenner } );
        }
    }
    f1();
})

module.exports = router;