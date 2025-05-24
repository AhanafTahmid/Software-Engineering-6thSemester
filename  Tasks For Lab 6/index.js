const express = require('express');
const fs = require('fs');
const app = express();
const mongoose = require('mongoose');

//connect mongoDB
const str = 'mongodb+srv://ahanaf627:uU8tjDeyvY80Jlmo@cluster0.jjc6mcn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(str)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Mongo Error",err);
})

//mongodb pass: uU8tjDeyvY80Jlmo

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
const Company = mongoose.model('Company', companySchema);

app.use(express.urlencoded());

app.get('/items', async (req, res) => {
    const allcompanies = await Company.find({});
    //console.log(allcompanies);
    return res.json(allcompanies);
});

app.post('/items', async (req, res) => {
    const body = req.body;
    //console.log(body);
    if( !body || !body.company_name || !body.email || !body.location ) return res.status(400).json({status: "fail"});
    
    const newentry = await Company.create({
        company_name: body.company_name,
        email: body.email,
        location: body.location
    });
    console.log("New Entry Added: ", newentry);
    return res.status(201).json({status: "success"});
});

app.put('/items/:id', async (req, res) => {
    await Company.findByIdAndUpdate(req.params.id , {company_name: "changed_company"});
    return res.status(201).json({status: "success"});
});

app.delete('/items/:id', async (req, res) => {
    await Company.findByIdAndDelete(req.params.id);
    return res.status(201).json({status: "success"});
});

app.listen(3000, console.log("Running on port 3000"));