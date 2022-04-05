const ProcessRouter = require('express').Router();
const processActions = require('../controllers/workflow-process-ctrl');

ProcessRouter.get('/',processActions.getAllProcesses)
ProcessRouter.get('/:id',processActions.getProcessById)
ProcessRouter.post('/',processActions.postProcesses );
ProcessRouter.put('/:id',processActions.updateProcesses );
ProcessRouter.delete('/:id',processActions.deleteProcesses );

module.exports = ProcessRouter;