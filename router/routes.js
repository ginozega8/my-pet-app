const express = require("express");
const router = express.Router();
const Pet = require("../models/pet")
const multer = require("multer");
const { application } = require("express");
const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary");
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_USER_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
  });


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

const fileStorageEngine = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "DEV",
    },
  });

const upload = multer({storage: fileStorageEngine})

router.post("/", upload.single("image"), (req, res) => {
    let newPet = new Pet({
        name:  req.body.name,
        age: req.body.age,
        color: req.body.color,
        description: req.body.description,
        animal: req.body.animal,
        path: req.file.path
    })
    newPet.save();
    setTimeout(function() {
        res.redirect(req.originalUrl)
    }, 1500);
})
  
module.exports = router;