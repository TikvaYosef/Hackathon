const mongoose = require("mongoose");
const schama = mongoose.Schema;

const ProcessWorkflow = new schama(
  {
    companyName: { type: String, required: true },
    role: { type: String, required: true },
    currentStatus: { type: String, required: true },
    processStatus: { type: String, required: true },
    isStarred: { type: Boolean, required: true }
  },
  { timestamps: true }
);
module.exports = mongoose.model("ProcessWorkflow", ProcessWorkflow);