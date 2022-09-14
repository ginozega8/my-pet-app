const express = require("express");
const router = express.Router();
const Pet = require("../models/pet")
const multer = require("multer");
const { application } = require("express");

router.get('/', async (req, res) => {
    try {
        const petArray = await Pet.find();
        console.log(petArray)
        res.render("index", {
            petList: petArray,
            petArray
        })
    } catch (error) {
        console.log(error)
    }
  })

const fileStorageEngine = multer.diskStorage({
destination: (req, file, cb) => { //Handling destination
    cb(null, "public/img")
},

filename: (req, file, cb) =>{
    cb(null, Date.now() + "--" + file.originalname) //Creating unique image name
}
    
})

const upload = multer({storage: fileStorageEngine})

router.post("/", upload.single("image"), (req, res) => {

    let newPet = new Pet({
        name:  req.body.name,
        age: req.body.age,
        color: req.body.color,
        description: req.body.description,
        animal: req.body.animal,
        path: req.file.filename
    })
    newPet.save();
    setTimeout(function() {
        res.redirect(req.originalUrl)
    }, 3000);
})
  
module.exports = router;