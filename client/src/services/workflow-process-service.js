const BASIC_API="http://localhost:8800/workflow";

export const GetAllProcesses= async () => {
    
      return await fetch(`${BASIC_API}`)
      .then((res) => res.json(res))
      .catch(error => console.log(error))    
  };
  
 
export const AddNewProcess =async(process)=>{
    const options = {
        method: "POST",
        body: JSON.stringify({ ...process }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      return await fetch(`${BASIC_API}`, options)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    };


export const GetProcessById = async (id, process) => {
  return await fetch(`${BASIC_API}/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};


export const UpdateProcess = async (id, process) => {
  const options = {
    method: "PUT",
    body: JSON.stringify({ ...process }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${BASIC_API}/${id}`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const DeleteProcess = async (id, process) => {
  const options = {
    method: "Delete",
    body: JSON.stringify({ ...process }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await fetch(`${BASIC_API}/${id}`, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
