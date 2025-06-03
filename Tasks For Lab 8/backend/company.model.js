import mongoose from "mongoose";

//Schema
const companySchema = new mongoose.Schema({
    company_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    location:{
        type: String,
        required: true
    }
},{
    timestamps: true
})


//Model
export const Company = mongoose.model('Company', companySchema);