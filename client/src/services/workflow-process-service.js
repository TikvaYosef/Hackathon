const BASIC_API="http://localhost:8800";

export const GetAllProcesses=async () => {
    try {
      return await fetch(`${BASIC_API}/workflow`).then((res) => res.json());
    } catch (er) {
      console.error(er);
    }
  };
  
 
export const AddProcess =async(process)=>{
    const options = {
        method: "POST",
        body: JSON.stringify({ ...process }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      return await fetch(`${BASIC_API}/workflow`, options)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    };


    export const UpdateProcess=async(process)=>{
            const options = {
                method: "PUT",
                body: JSON.stringify({ ...process }),
                headers: {
                  "Content-Type": "application/json",
                },
              };
              return await fetch(`${BASIC_API}/workflow`, options)
                .then((res) => res.json())
                .catch((err) => console.log(err));
            };
        
        
    