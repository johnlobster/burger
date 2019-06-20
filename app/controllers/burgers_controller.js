// controller for http routes 

const express = require("express");
// set up express
var router = express.Router();

const burger = require("../models/burger");


// set up routes






// get all
router.get("/", function (req, res) {
    burger.getAllBurgers()
    .then( (data) =>  {
        return res.render("index",{burger: data});
    })
    .catch( (err) => {
        console.log("Error in burgers_controller get");
        console.log(err);
    });
});

// burger gets devoured
router.put("/api/devour", (req,res) => { 
    
    burger.devour(req.body.name)
    .then( (data) => {
        // return data to web page so knows whether successful update or not
        return res.send(data);
        // indexjs will request a reload which will hit the get("/") route
    })
    .catch((err) => {
        console.log("Error in burgers_controller update (put)");
        console.log(err);
    });
});

router.post("/api/newBurger", (req, res) => {
    // console.log(" Burger ");
    // console.log(req.body);
    burger.insertBurger(req.body.name)
    .then( (data) => {
        // return data to web page so knows whether successful update or not
        return res.send(data);
        // indexjs will request a reload which will hit the get("/") route
    })
    .catch((err) => {
        console.log("Error in burgers_controller create (post)");
        console.log(err);
    });
});

// any other route 404
router.get( "/*", (req,res) => {
    res.render("burger404", {badUrl: req.url});
});

// Export routes for server.js to use.
module.exports = router;