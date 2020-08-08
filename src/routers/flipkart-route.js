const express = require('express');
var flipkart = require('../models/flipkart.js');
const router = new express.Router()

var allItems = [];
var majCat = [];
var allWomenItems = [];
var subCatWomen = [];
var allMenItems = [];
var subCatMen = [];


var majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


router.get('/flipkart', (req, res) => {

    majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

            res.render("flipkart", {  majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });  
        }


    }

    f1();

})


router.get('/flipkartFootwear', (req, res) => {

    
    majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Footwear" }, function (err, collection) {
            if (err) console.log(err)
            footwearMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(footwearMen);
            res.render("flipkart", {  majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

















module.exports = router;