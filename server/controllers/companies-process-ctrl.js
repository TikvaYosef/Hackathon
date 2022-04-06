const companies = require("../models/companies-process-model");

const getAllCompanies = async (req, res) => {
  await companies
    .find()
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(404).json({ message: error }));
};

const getCompanyById = async (req, res) => {
  await companies
    .findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(404).json({ message: error }));
};
const addCompany = async (req, res) => {
  await companies
    .create(req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(404).json({ message: error }));
};
const getCompanyByName = async (req, res) => {
  try {
    await companies.findOne({ companyName: req.params.name }).then((data) => {
      if (data) return res.status(200).json({ success: data });
      res.status(404).json({ success: false, message: "no data" });
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
module.exports = {
  getAllCompanies,
  getCompanyById,
  addCompany,
  getCompanyByName,
};
