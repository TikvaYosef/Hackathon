const companies = require("../models/companies-process-model");

const getAllCompanies  = async (req,res)=>{
    await companies.find()
    .then((result)=>res.status(200).json(result))
    .catch((error)=> res.status(404).json({message:error}))
};

const getCompanyById =async (req,res)=>{
    await companies.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((error)=> res.status(404).json({message:error}))
};
const addCompany = async (req,res)=>{
    await companies.create(req.body)
    .then((result)=>res.status(200).json(result))
    .catch((error)=>res.status(404).json({message:error}))
};
const getCompanyByName = async (req,res) =>{
    await companies.find(req.body.companyName)
    .then((result)=>res.status(200).json(result))
    .catch((error) => res.status(404).json({message:error}))
}
module.exports ={
    getAllCompanies,
    getCompanyById,
    addCompany,
    getCompanyByName
};