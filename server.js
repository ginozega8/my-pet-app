const express = require("express");
const path = require('path');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.grmhuue.mongodb.net/?retryWrites=true`;
const port = process.env.PORT || 3000;
app.use('/', require('./router/routes'));



//DB Conect
main().catch(err => console.log(err));
main().then(() => console.log("DB conected"))
async function main() {
    await mongoose.connect(uri); //Conexión
  }

//View Engine config
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Static folder
app.use(express.static(path.join(__dirname, 'public')));


//404 page
app.use((req, res, next) => {
    res.status(404).render("404", { siteTitle: "Página 404" });
  });

//Port Listening
app.listen(port, () => {
console.log(`Pet App listening at http://localhost:${port}`);
 });
    
