

import {useState } from "react"

import Student from "./students"




function FormHandling() {
   

    
    
    const [Name, setName] = useState("");
    const [Roll, setRoll] = useState("");
    const [stuClass, setClass] = useState("");
    const [Batch, setBatch] = useState("");
    const [Id, setId] = useState("");

    // const submitHandler=(e)=>{
        


    //     let students = {
    //         Name,
    //         Roll,
    //         Class:stuClass,
    //         Batch,
    //         Id
    //     }
        
    // }

    

    


 
    
    
   
   



    
  return(
    <div className="App" >
     <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name" name="name" />
     <br />
     <input type="Text" onChange={(e)=>setRoll(e.target.value)} placeholder = "Enter Your RollNO" name="RollNo" />
     <br/>
     <input type="text" onChange={(e)=>setClass(e.target.value)} placeholder = "Enter Your Class" name="Class" />
     <br />
     <input type="text" onChange={(e)=>setBatch(e.target.value)} placeholder = "Enter Your Batch" name="Batch" />
     <br/>
     <input type="text" onChange={(e)=>setId(e.target.value)} placeholder = "Enter Your Id" name="Id" />

    <br />

    {/* <button onClick={submitHandler}>Submit</button> */}

    


     <p>Name is : {Name}</p>
     <p>RollNO is : {Roll}</p>

     <p>Class is : {stuClass}</p>

     <p>Batch is : {Batch}</p>

     <p>Id is : {Id}</p>


     

     <Student />

    
    <h3>New Users</h3>

             <tr>
                
                <th>Student Name</th>
                <th>Student Roll</th>
                 <th>Student Class</th>
                <th>Student Batch</th>
                <th>Student Id</th>
            </tr>

            <tr>
                
                <td>{Name}</td>
                <td>{Roll}</td>
                <td>{stuClass}</td>
                <td>{Batch}</td>
                <td>{Id}</td>
            </tr>
    

    </div>
  );
}

export default FormHandling;
