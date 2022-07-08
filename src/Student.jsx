import { studentList } from "./data";
import { useState } from "react";


const Student = () => {
  const [index, setIndex] = useState(0)
  let student = studentList[index]
  return ( 
    <>
      <h1>{student.name}</h1>
      <p>{student.bio}</p>
    </>
  )
}

export default Student;