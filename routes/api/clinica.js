const express = require("express");
const router = express.Router();
const Clinicas = require("../../models/Clinica");


//@route GET api
//@desc Obtener todas las clinicas
//@access Public
router.get("/", async (req, res) =>{
    try{
        const clinicas = await Clinicas.find();
        res.json(clinicas);
        console.log(clinicas);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Error de servidor");
    }
});

module.exports = router;