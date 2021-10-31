import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import { students } from "../data/data";

function ParentComponent() {

const [studentsList, setStudentsList] = useState(students);
const [other, setOther] = useState(2);

  return (
    <div>
      {studentsList.map((studentName) => (
        <ChildComponent name={studentName} age={other} />
      ))}
    </div>
  );
}

export default ParentComponent;
