const workflowProcess = require('../models/workflow-process-model');

const getAllProcesses = async (req, res) => {
    await workflowProcess.find()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).json({ massage: err }));
  };
  
  const getProcessById = async (req, res) => {
    await workflowProcess.findById(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).json({ massage: err }));
  };
  
  const postProcesses = async (req, res) => {
    await workflowProcess.create(req.body)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).json({ massage: err }));
  };
  
  const updateProcesses = async (req, res) => {
    workflowProcess.findByIdAndUpdate(req.params.id, req.body,{new:true}) 
  .then(result=>{
  res.status(200).json(result)
  })
  .catch(err=>{
    res.status(500).json({massage:"update is failed"})
  })
  };
  
  const deleteProcesses = async (req, res) => {
    workflowProcess.findByIdAndDelete(req.params.id, (err, result) => {
          if (err) {
              return res.status(400).json({ success: false, error: err })
          };
          res.status(201).json({ success: true, data: result, message: "the News delete" })
      })
  };
  
  module.exports = {
    getAllProcesses,
    getProcessById,
    postProcesses,
    updateProcesses,
    deleteProcesses,
  };