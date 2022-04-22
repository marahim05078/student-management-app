import React from "react";

function PresentStudent(props) {
  return (
    <div className="present-students">
      <h4>Present student list</h4>
      <ol>
        {props.studentList
          .filter((student) => student.isPresent === true)
          .map((student) => (
            <li key={student.id}>
              <span>{student.name}</span>
              <span>
                <button onClick={() => props.toggleHandler(student.id)}>
                  Absent
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

export default PresentStudent;
