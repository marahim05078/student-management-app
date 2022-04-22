import React from "react";

function AllStudents(props) {
  // Edit
  const editHandler = (id) => {
    const tobeEdited = props.studentList.find((student) => student.id === id);
    props.setEditMode(true);
    props.setEditableStudent(tobeEdited);
    props.setStudentName(tobeEdited.name);
  };
  // Delete
  const deleteHandler = (id) => {
    props.setStudentList(
      props.studentList.filter((student) => student.id !== id)
    );
  };
  return (
    <div className="all-students">
      <h4>All Student list</h4>
      <ol>
        {props.studentList.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <span>
              <button onClick={() => editHandler(student.id)}>Edit</button>
              <button onClick={() => deleteHandler(student.id)}>Delete</button>
              <button onClick={() => props.presentHandler(student.id)}>
                Present
              </button>
              <button onClick={() => props.absentHandler(student.id)}>
                Absent
              </button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AllStudents;
