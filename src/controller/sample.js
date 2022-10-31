const express = require("express");
const router = express.Router();
const Sample = require("../model/sample")

router.post("/sample", async(req, res)=>{
    try{
        const sample = await Sample.create(req.body);
        return res.send(sample)
    }catch(err){
        return res.send(err)
    }
})
router.get("/sample", async(req, res)=>{
    try{
        const sample = await Sample.find().lean().exec();
        return res.send(sample)
    }catch(err){
        return res.send(err)
    }
})

module.exports = router;