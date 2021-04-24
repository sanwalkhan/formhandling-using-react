

import React, {useState } from "react"


import FormHandling from "./formhandling"


function Student(props) {

  const [students , setstudents] = useState([
    {
      name:"Sanwal",
      Roll:"2342",
      Class:"Web",
      Batch:"3",
      Id:"1"
    },

    {
      name:"Ali",
    Roll:"2343",
    Class:"Web",
    Batch:"3",
    Id:"2"
    },

    {
      name:"Ahmed",
      Roll:"2344",
      Class:"Web",
      Batch:"3",
      Id:"3"
    },

    {
      name:"hamid",
      Roll:"2345",
      Class:"Web",
      Batch:"3",
      Id:"4"
    },

    {
      name:"hamza",
      Roll:"2346",
      Class:"Web",
      Batch:"3",
      Id:"5"
    }, 
    
  ])

 



  return (
    <div className="App">
      <h2>List Of Students</h2>
      <tr>
        <th>No.</th>
        <th>Student Name</th>
        <th>Student Roll</th>
        <th>Student Class</th>
        <th>Student Batch</th>
        <th>Student Id</th>
      </tr>

      {
        students.map((student, index)=>{
          return(
            <tr>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.Roll}</td>
                <td>{student.Class}</td>
                <td>{student.Batch}</td>
                <td>{student.Id}</td>
            </tr>
          )
        })
      }

        

      </div>
  )
}

export default Student;