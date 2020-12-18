module.exports = app => {
    const cat = require("../controllers/category.controller.js");
    
    var router = require("express").Router();
    router.post("/", cat.insert);
    router.get("/",cat.getCategoryName);
    app.use('/api/cat', router);
  };