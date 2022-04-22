import React from "react";

function AbsentStudent(props) {
  return (
    <div className="absent-students">
      <h4>Absent student list</h4>
      <ol>
        {props.studentList
          .filter((student) => student.isPresent === false)
          .map((student) => (
            <li key={student.id}>
              <span>{student.name}</span>
              <span>
                <button onClick={() => props.toggleHandler(student.id)}>
                  Present
                </button>
                <button onClick={() => props.reinitializeHandler(student.id)}>
                  Re-initialize
                </button>
              </span>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default AbsentStudent;
