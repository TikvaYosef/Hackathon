const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProcessWorkflow = new Schema(
  {
    username : { type: String, required: true},
    companyName: { type: String, required: true },
    role: { type: String, required: true },
    currentStatus: { type: String, required: true },
    processStatus: { type: String, required: true },
    isStarred: { type: Boolean},
    jobLink : { type: String}
  },
  { timestamps: true }
);
module.exports = mongoose.model("ProcessWorkflow", ProcessWorkflow);