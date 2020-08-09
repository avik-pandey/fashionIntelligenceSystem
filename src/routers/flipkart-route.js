const express = require('express');
var flipkart = require('../models/flipkart.js');
const router = new express.Router()

var allItems = [];
var majCat = [];
var allWomenItems = [];
var subCatWomen = [];
var allMenItems = [];
var subCatMen = [];


var majCatFin = [],subCatMenFin = [],subCatWomenFin = [],winterWomen=[], footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


router.get('/flipkart', (req, res) => {

    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });  
        }


    }

    f1();

})


router.get('/flipkartFootwear', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartSports%20Shoes', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Sports Shoes" }, function (err, collection) {
            if (err) console.log(err)
            sportShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sportShoesMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})


router.get('/flipkartCasual%20Shoes', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Casual Shoes" }, function (err, collection) {
            if (err) console.log(err)
            casualShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(casualShoesMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartFormal%20Shoes', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Formal Shoes" }, function (err, collection) {
            if (err) console.log(err)
            formalShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(formalShoesMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartSandals%20&%20FLoaters', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Sandals & Floaters" }, function (err, collection) {
            if (err) console.log(err)
            sandalsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sandalsMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartFlip-Flops', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Flip-Flops" }, function (err, collection) {
            if (err) console.log(err)
            flipflopsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(flipflopsMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartLoafers', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Loafers" }, function (err, collection) {
            if (err) console.log(err)
            loafersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(loafersMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartBoots', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Boots" }, function (err, collection) {
            if (err) console.log(err)
            bootsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(bootsMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartRunning%20Shoes', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Running Shoes" }, function (err, collection) {
            if (err) console.log(err)
            runningShoesMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(runningShoesMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartSneakers', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Sneakers" }, function (err, collection) {
            if (err) console.log(err)
            sneakersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sneakersMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartClothing', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Clothing" }, function (err, collection) {
            if (err) console.log(err)
            clothingMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(clothingMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartTop%20wear', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Topwear" }, function (err, collection) {
            if (err) console.log(err)
            topWearMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(topWearMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartT-Shirts', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartFormal%20Shirts', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Formal Shirts" }, function (err, collection) {
            if (err) console.log(err)
            formalShirtsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(formalShirtsMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartCasual%20Shirts', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Casual Shirts" }, function (err, collection) {
            if (err) console.log(err)
            casualShirtsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(casualShirtsMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartBottom%20wear', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Bottomwear" }, function (err, collection) {
            if (err) console.log(err)
            bottomWearMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(bottomWearMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartJeans', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Jeans" }, function (err, collection) {
            if (err) console.log(err)
            jeansMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(jeansMen);
            res.render("flipkart", {winterWomen,  majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartCasual%20Trousers', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Casual Trousers" }, function (err, collection) {
            if (err) console.log(err)
            casualTrousersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(casualTrousersMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartFormal%20Trousers', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Formal Trousers" }, function (err, collection) {
            if (err) console.log(err)
            formalTrousersMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(formalTrousersMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartTrack%20pants', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Track Pants" }, function (err, collection) {
            if (err) console.log(err)
            trackPantsMen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(trackPantsMen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartClothing', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Clothing" }, function (err, collection) {
            if (err) console.log(err)
            clothingWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(clothingWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartTopwear', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Topwear" }, function (err, collection) {
            if (err) console.log(err)
            topwearWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(topwearWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartDresses', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Dresses" }, function (err, collection) {
            if (err) console.log(err)
            dressesWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(dressesWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartJeans', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Jeans" }, function (err, collection) {
            if (err) console.log(err)
            jeansWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(jeansWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartSkirts', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Skirts" }, function (err, collection) {
            if (err) console.log(err)
            skirtsWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(skirtsWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartShorts', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Shorts" }, function (err, collection) {
            if (err) console.log(err)
            shortsWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(shortsWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartJeggings%20&%20Tights', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Jeggings & Tights" }, function (err, collection) {
            if (err) console.log(err)
            jeggingsWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(jeggingsWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartTrousers%20&%20Capris', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Trousers & Capris" }, function (err, collection) {
            if (err) console.log(err)
            trousersWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(trousersWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartLingerie%20&%20Sleepwear', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Lingerie and Sleepwear" }, function (err, collection) {
            if (err) console.log(err)
            lingerieWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(lingerieWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartBras', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Bras" }, function (err, collection) {
            if (err) console.log(err)
            brasWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(brasWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartPanties', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Panties" }, function (err, collection) {
            if (err) console.log(err)
            pantiesWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(pantiesWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})


router.get('/flipkartLingerie%20Sets', (req, res) => {

    
    winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Lingerie Sets" }, function (err, collection) {
            if (err) console.log(err)
            lingerieSetsWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(lingerieSetsWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartNight%20Dresses%20&%20Nighties', (req, res) => {

    
  winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Night Dresses & Nighties" }, function (err, collection) {
            if (err) console.log(err)
            nightDressesWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(nightDressesWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartShapewear', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Shapewear" }, function (err, collection) {
            if (err) console.log(err)
            shapewearWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(shapewearWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartCamisoles%20&%20Slips', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Camisoles & Slips" }, function (err, collection) {
            if (err) console.log(err)
            camisolesWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(camisolesWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartSwim%20&%20Beachwear', (req, res) => {

    
    winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],partyDressesWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Swim & Beachwear" }, function (err, collection) {
            if (err) console.log(err)
            swimWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(swimWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartParty%20Dresses', (req, res) => {

    
  winterWomen=[],  majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],sportswearWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Party Dresses" }, function (err, collection) {
            if (err) console.log(err)
            partyDressesWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(partyDressesWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartSports%20Wear', (req, res) => {

    
   winterWomen=[], majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sareesWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Sports Wear" }, function (err, collection) {
            if (err) console.log(err)
            sportswearWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sportswearWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartSarees', (req, res) => {

    
    winterWomen=[] ,majCatFin = [],subCatMenFin = [],subCatWomenFin = [],footwearMen = [],sportShoesMen = [],casualShoesMen = [],formalShoesMen = [],sandalsMen = [],flipflopsMen = [],loafersMen = [],bootsMen = [],runningShoesMen = [],sneakersMen = [],clothingMen = [],topWearMen = [],tShirtsMen = [],formalShirtsMen = [],casualShirtsMen = [],bottomWearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],trackPantsMen = [],clothingWomen = [],topwearWomen = [],dressesWomen = [],jeansWomen = [],shortsWomen = [],skirtsWomen = [],jeggingsWomen = [],trousersWomen = [],lingerieWomen = [],brasWomen = [],pantiesWomen = [],lingerieSetsWomen = [],nightDressesWomen = [],shapewearWomen = [],camisolesWomen = [],swimWomen = [],partyDressesWomen = [],sportswearWomen = [];


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

        let temp3 = await flipkart.find({ subCategory: "Sarees" }, function (err, collection) {
            if (err) console.log(err)
            sareesWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(sareesWomen);
            res.render("flipkart", { winterWomen, majCatFin ,subCatMenFin ,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

router.get('/flipkartWinter%20Wear', (req, res) => {

    
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

        let temp3 = await flipkart.find({ subCategory: "Winter Wear" }, function (err, collection) {
            if (err) console.log(err)
            winterWomen = collection;
            modelsFin = [];
        })
        if (temp3.err) {
            console.log(err)
        }
        else {
            console.log(winterWomen);
            res.render("flipkart", {  majCatFin ,subCatMenFin , winterWomen,subCatWomenFin ,footwearMen ,sportShoesMen ,casualShoesMen ,formalShoesMen ,sandalsMen ,flipflopsMen ,loafersMen,bootsMen ,runningShoesMen ,sneakersMen ,clothingMen ,topWearMen ,tShirtsMen ,formalShirtsMen ,casualShirtsMen ,bottomWearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,trackPantsMen ,clothingWomen ,topwearWomen ,dressesWomen ,jeansWomen ,shortsWomen ,skirtsWomen ,jeggingsWomen ,trousersWomen ,lingerieWomen ,brasWomen ,pantiesWomen ,lingerieSetsWomen ,nightDressesWomen ,shapewearWomen ,camisolesWomen ,swimWomen ,partyDressesWomen ,sportswearWomen ,sareesWomen 
            });
        }
    }
    f1();
})

module.exports = router;