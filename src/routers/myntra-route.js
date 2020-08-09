const express = require('express');
var myntra = require('../models/myntra.js');
const router = new express.Router()



var majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [];
var subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = [];

router.get('/myntra', (req, res) => {

    topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });
        }


    }

    f1();
})

router.get('/myntraTopwear', (req, res) => {

    tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Topwear'},function(err,collection){
           if(err)console.log(err)
           else topwearMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(topwearMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraT-Shirts', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'T-Shirts'},function(err,collection){
           if(err)console.log(err)
           else tShirtsMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(tShirtsMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraCasual%20Shirts', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Casual Shirts'},function(err,collection){
           if(err)console.log(err)
           else casualShirtsMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(casualShirtsMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraFormal%20Shirts', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Formal Shirts'},function(err,collection){
           if(err)console.log(err)
           else formalShirtsMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(formalShirtsMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraSweatshirts', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Sweatshirts'},function(err,collection){
           if(err)console.log(err)
           else sweatShirtsMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(sweatShirtsMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraSweaters', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Sweaters'},function(err,collection){
           if(err)console.log(err)
           else sweatersMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(sweatersMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraJackets', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Jackets'},function(err,collection){
           if(err)console.log(err)
           else jacketsMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(jacketsMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraBlazers%20&%20Coats', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Blazers & Coats'},function(err,collection){
           if(err)console.log(err)
           else blazersMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(blazersMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraSuits', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Suits'},function(err,collection){
           if(err)console.log(err)
           else suitsMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(suitsMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraRain%20Jackets', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Rain Jackets'},function(err,collection){
           if(err)console.log(err)
           else rainJacketsMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(rainJacketsMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraIndian%20&%20Festive%20Wear', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Indian & Festive Wear'},function(err,collection){
           if(err)console.log(err)
           else indianWearMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(indianWearMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraKurtas%20&%20Kurta%20Sets', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Kurtas & Kurta Sets'},function(err,collection){
           if(err)console.log(err)
           else kurtasMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(kurtasMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraSherwanis', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Sherwanis'},function(err,collection){
           if(err)console.log(err)
           else sherwanisMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(sherwanisMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraNehru%20Jackets', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Nehru Jackets'},function(err,collection){
           if(err)console.log(err)
           else nehruJacketsMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(nehruJacketsMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraDhotis', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Dhotis'},function(err,collection){
           if(err)console.log(err)
           else dhotisMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(dhotisMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraBottomwear', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Bottomwear'},function(err,collection){
           if(err)console.log(err)
           else BottomwearMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(BottomwearMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraJeans', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Jeans'},function(err,collection){
           if(err)console.log(err)
           else jeansMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(jeansMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraCasual%20Trousers', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Casual Trousers'},function(err,collection){
           if(err)console.log(err)
           else casualTrousersMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(casualTrousersMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraFormal%20Trousers', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Formal Trousers'},function(err,collection){
           if(err)console.log(err)
           else formalTrousersMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(formalTrousersMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraShorts', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Shorts'},function(err,collection){
           if(err)console.log(err)
           else shortsMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(shortsMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraIndian%20&%20Fusion%20Wear', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Indian & Fusion Wear'},function(err,collection){
           if(err)console.log(err)
           else indianWearWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(indianWearWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraKurtas%20&%20Suits', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Kurta & Suits'},function(err,collection){
           if(err)console.log(err)
           else kurtasWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(kurtasWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraKurtis,%20Tunics%20&%20Tops', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Kurtas, Tunics & Tops'},function(err,collection){
           if(err)console.log(err)
           else kurtisWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(kurtisWomen);
            res.render("myntra", {majCatFin, subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraEthnic%20Dresses', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Ethnic Dresses'},function(err,collection){
           if(err)console.log(err)
           else ethnicWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(ethnicWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraLeggings,%20Salwars%20&%20Churidars', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Leggings, Salwars & Churidars'},function(err,collection){
           if(err)console.log(err)
           else leggingsWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(leggingsWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraSkirts%20&%20Palazzos', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Skirts & Palazzos'},function(err,collection){
           if(err)console.log(err)
           else skirtsWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(skirtsWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraSarees%20&%20Blouses', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Sarees & Blouses'},function(err,collection){
           if(err)console.log(err)
           else sareesWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(sareesWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraDress%20Materials', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Dress Materials'},function(err,collection){
           if(err)console.log(err)
           else dressWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(dressWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraLehenga%20Cholis', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Lehenga Cholis'},function(err,collection){
           if(err)console.log(err)
           else lehengaWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(lehengaWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraDupattas%20&%20Shawls', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Dupattas & Shawls'},function(err,collection){
           if(err)console.log(err)
           else topwearMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(topwearMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraJackets%20&%20Waistcoats', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Jackets & Waistcoats'},function(err,collection){
           if(err)console.log(err)
           else jacketsWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(jacketsWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraBelts,%20Scarves%20&%20More', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Belts, Scarves & More'},function(err,collection){
           if(err)console.log(err)
           else beltsWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(beltsWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraWatches%20&%20Wearables', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Watches & Wearables'},function(err,collection){
           if(err)console.log(err)
           else watchesWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(watchesWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraWestern%20Wear', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Western Wear'},function(err,collection){
           if(err)console.log(err)
           else westernWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(westernWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraDresses%20&%20Jumpsuits', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Dresses & Jumpsuits'},function(err,collection){
           if(err)console.log(err)
           else topwearMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(topwearMen);
            res.render("myntra", {majCatFin, subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraTops,%20T-Shirts%20&%20Shirts', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Tops, T-Shirts & Shirts'},function(err,collection){
           if(err)console.log(err)
           else topwearMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(topwearMen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraJeans%20&%20Jeggings', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],trousersWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Jeans & Jeggings'},function(err,collection){
           if(err)console.log(err)
           else jeansWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(jeansWomen);
            res.render("myntra", {majCatFin, subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraTrousers%20&%20Capris', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],shirtsWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Trousers & Capris'},function(err,collection){
           if(err)console.log(err)
           else topwearMen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(topwearMen);
            res.render("myntra", {majCatFin, subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraShorts%20&%20Skirts', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shrugsWomen = []

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Shorts & Skirts'},function(err,collection){
           if(err)console.log(err)
           else shirtsWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(shirtsWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})

router.get('/myntraShrugs', (req, res) => {

    majCat = [],majCatFin = [],subCatMen = [],subCatWomen = [],subCatMenFin = [],subCatWomenFin=[], topwearMen = [],tShirtsMen = [],casualShirtsMen = [],formalShirtsMen = [],sweatShirtsMen = [],sweatersMen = [],jacketsMen = [],blazersMen = [],suitsMen = [],rainJacketsMen = [],indianWearMen = [],kurtasMen = [],sherwanisMen = [],nehruJacketsMen = [],dhotisMen = [],bottomwearMen = [],jeansMen = [],casualTrousersMen = [],formalTrousersMen = [],shortsMen = [],indianWearWomen = [],kurtasWomen = [],kurtisWomen = [],ethnicWomen = [],leggingsWomen = [],skirtsWomen = [],sareesWomen = [],dressWomen = [],lehengaWomen = [],dupattasWomen = [],jacketsWomen = [],beltsWomen = [],watchesWomen = [],westernWomen = [],jumpsuitsWomen = [],topsWomen = [],jeansWomen = [],trousersWomen = [],shirtsWomen = [];

    async function f1(req, rep) {


        let temp = await myntra.find({}, function (err, collection) {
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
            console.log(majCatFin);
            // res.render("myntra",{subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen })
        }

        let temp1 = await myntra.find({ majorCategory: 'MEN' }, function (err, collection) {
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
          console.log(subCatMenFin);
        }

        let temp2 = await myntra.find({ majorCategory: 'WOMEN' }, function (err, collection) {
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
            console.log(subCatWomenFin);
            // res.render("myntra", { subCatWomenFin, majCatFin, subCatMenFin, footwearMen, modelsFin, sportShoesMen, casualShoesMen, runningShoesMen, formalShoesMen, sandalsMen, bootsMen, flipflopsMen, loafersMen, sneakersMen });
        }

        let temp3 = await myntra.find({subCategory:'Shrugs'},function(err,collection){
           if(err)console.log(err)
           else shrugsWomen = collection;
        })
        if(temp3.err)console.log(err)
        else {
            console.log(shrugsWomen);
            res.render("myntra", { majCatFin,subCatMenFin ,subCatWomenFin, topwearMen ,tShirtsMen ,casualShirtsMen ,formalShirtsMen ,sweatShirtsMen ,sweatersMen ,jacketsMen ,blazersMen,suitsMen ,rainJacketsMen ,indianWearMen ,kurtasMen ,sherwanisMen ,nehruJacketsMen ,dhotisMen ,bottomwearMen ,jeansMen ,casualTrousersMen ,formalTrousersMen ,shortsMen ,indianWearWomen ,kurtasWomen ,kurtisWomen ,ethnicWomen ,leggingsWomen ,skirtsWomen ,sareesWomen ,dressWomen ,lehengaWomen ,dupattasWomen ,jacketsWomen ,beltsWomen ,watchesWomen ,westernWomen ,jumpsuitsWomen ,topsWomen ,jeansWomen ,trousersWomen ,shirtsWomen ,shrugsWomen  });

        }


    }

    f1();
})



module.exports = router;