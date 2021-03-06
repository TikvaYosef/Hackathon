const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Company = new Schema ({
    companyName:{type: String, required: true},
    location:{type:String, required:true},
    field:{type:String, required:true},
    roles:{type:String, required:true}
},
{timestamps:true}
)

module.exports = mongoose.model("Company",Company);