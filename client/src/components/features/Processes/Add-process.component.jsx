import React, {useState} from 'react';
import './processes.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';

import {AddNewProcess} from '../../../services/workflow-process-service';


const AddProcess = () => {
    const [status, setStatus] = useState('');
    const [newTask, setNewTask] = useState({username : userName,processStatus : "progress"});
    
    const userName = localStorage.getItem('userName');

      const createTask = (e) => {
          newTask[e.target.name] = e.target.value;
          if(e.target.name === "currentStatus") setStatus(e.target.value);
      }

      const addTask = () => {
          setNewTask({...newTask});
          AddNewProcess(newTask)
      }

      return(
        <div className="addProcessContainer">
        <Box
  component="form"
  sx={{
    '& .MuiTextField-root': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <div>
    <TextField
      id="standard-helperText"
      label="Company Name"
      variant="standard"
      name = "companyName"
      onChange={createTask}
    />
    <TextField
      id="standard-helperText"
      label="Role"
      helperText="What role are you applying for?"
      variant="standard"
      name= "role"
      onChange={createTask}
    />
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={status}
      onChange={createTask}
      label="Status"
      name = "currentStatus"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={'cv'}>CV sent</MenuItem>
      <MenuItem value={'hr'}>HR Interview</MenuItem>
      <MenuItem value={'tech'}>Technical Interview</MenuItem>
    </Select>
  </FormControl>
  <TextField
      id="standard-helperText"
      label="Job Link (optional)"
      helperText="So you can always go back :)"
      variant="standard"
      name = "jobLink"
      onChange={createTask}
    />
  <Button onClick={() => {addTask()}}>Add</Button>
  </div>
</Box>
    </div>
      )
}

export default AddProcess;