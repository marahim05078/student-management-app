import React from "react";

function Form(props) {
  // Create
  const createHandler = () => {
    if (props.studentName) {
      if (
        props.studentList.find((student) => student.name === props.studentName)
      ) {
        alert(
          "The name you have entered already added in the list. Please try by different name."
        );
      } else {
        const newStudent = {
          id: Date.now(),
          name: props.studentName,
        };
        props.setStudentList([...props.studentList, newStudent]);
        props.setStudentName("");
      }
    } else {
      alert("Please enter a name.");
    }
  };
  // Update
  const updateHandler = () => {
    props.setStudentList(
      props.studentList.map((student) => {
        if (props.editableStudent.id === student.id) {
          student.name = props.studentName;
        }
        return student;
      })
    );
    props.setEditMode(false);
    props.setStudentName("");
    props.setEditableStudent(null);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.editMode ? updateHandler() : createHandler();
      }}
    >
      <input
        type="text"
        value={props.studentName}
        placeholder="Enter valid student's name"
        onChange={(e) => props.setStudentName(e.target.value)}
      />
      <button>{props.editMode ? "Update" : "Add"}</button>
    </form>
  );
}

export default Form;
