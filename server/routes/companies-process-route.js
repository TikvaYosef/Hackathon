const companiesRouter = require('express').Router();
const companiesCtrl =  require('../controllers/companies-process-ctrl');

companiesRouter.get('/',companiesCtrl.getAllCompanies)
companiesRouter.get('/:id',companiesCtrl.getCompanyById)
companiesRouter.post('/',companiesCtrl.addCompany)
companiesRouter.get('/:name',companiesCtrl.getCompanyByName)

module.exports = companiesRouter;