import React, { useState, useEffect} from "react";
import {
  GetAllProcesses,
  UpdateProcess,
} from "../../../services/workflow-process-service";
import MaterialTable from "material-table";

const ProcessTable = () => {
  const [tableData, setTableData] = useState([
  ]);

  useEffect(() => {
    let isMounted = true;
    if(isMounted === true){
        GetAllProcesses().then((result) => {
            setTableData(result);
            
        });
    }
    return () => {
        isMounted = false;
    }
  }, []);

  const columns = [
    { title: "Company Name", field: "companyName", filtering: false },
    { title: "Role", field: "role", filtering: false },
    {
      title: "Current Status",
      field: "currentStatus",
      lookup: {
        cv: "CV Sent",
        hr: "HR Interview",
        tech: "Technical Interview",
      },
    },
    {
      title: "Process Status",
      field: "processStatus",
      filtering: false,
      lookup: { progress: "In progress", hired: "Hired", denied: "Denied" },
    },
    {
      title: "Job Link",
      field: "jobLink",
      emptyValue: () => <em>null</em>,
      filtering: false,
    },
  ];
  return (
    <MaterialTable
      columns={columns}
      data={tableData}
      title="My Flow"
      options={{ filtering: true, exportButton: true, actionsColumnIndex: -1 }}
      editable={{
        onRowUpdate: (newRow, oldRow) =>
          new Promise((resolve, reject) => {
            UpdateProcess(oldRow._id, newRow).then(() => {
              GetAllProcesses().then((result) => {
                setTableData(result);
                resolve();
              });
            });
          }),
      }}
    />
  );
};

export default ProcessTable;
