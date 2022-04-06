import React from 'react';
import Processes from '../../features/Processes/Processes.component';
import './workspace.css';

const Workspace = () => {
    return (
        <div className="workspace">
            <h1>My Workflow</h1>
            <div className="processesContainer">
                <Processes />
            </div>
        </div>
    )
}

export default Workspace;