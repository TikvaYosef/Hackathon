import React from 'react';
import './processes.css';
import AddProcess from './Add-process.component';
import ProcessTable from './Process-table.component';


const Processes = () => {


    return (
        <div>
            {/* <div> */}
            {/* <AddProcess /> */}
            {/* </div> */}
            {/* <div style={{ height: 400, width: '65vw'}}> */}
      {/* <DataGrid
        rows={processes}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    {/* </div> */}
      <ProcessTable />
        </div>
    )
}

export default Processes;