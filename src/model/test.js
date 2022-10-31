const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    age:{type:Number}
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("sample", sampleSchema);