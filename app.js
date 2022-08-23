const express = require("express");
const contactsRouter = require("./app/routes/contact.route");
const cors = require("cors");
const app= express();
app.use("/api/contacts",contactsRouter);
app.use(cors());
app.use(express.json());
app.get("/",(req,res) =>{
    res.json({
        message: "xin chao "
    });
} )
module.exports = app;