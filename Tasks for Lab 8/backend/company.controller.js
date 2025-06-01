import {Company} from './company.model.js';

export const getAllCompanies = async (req, res) => {
    const allcompanies = await Company.find({});
    //console.log(allcompanies);
    return res.json(allcompanies);
}

export const createCompany = async (req, res) => {
    const body = req.body;
    //console.log(body);
    //console.log("New Entry: ", body);
    if( !body || !body.company_name || !body.email || !body.location ) return res.status(400).json({status: "fail"});
    
    const newentry = await Company.create({
        company_name: body.company_name,
        email: body.email,
        location: body.location
    });
    //console.log("New Entry Added: ", newentry);
    return res.status(201).json({status: "success"});
}

export const updateCompany = async (req, res) => {
    await Company.findByIdAndUpdate(req.params.id , {company_name:  req.body.company_name});
    return res.status(201).json({status: "success"});
}

export const deleteCompany =  async (req, res) => {
    await Company.findByIdAndDelete(req.params.id);
    return res.status(201).json({status: "success"});
}
