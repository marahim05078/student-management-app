import React from "react";
import AllStudents from "./AllStudents";
import AbsentStudent from "./AbsentStudent";
import PresentStudent from "./PresentStudent";

function StudentSection(props) {
  // Present handler
  const presentHandler = (id) => {
    const presentStudent = props.studentList.find(
      (student) => student.id === id
    );
    if (presentStudent.isPresent) {
      alert("The student is already in the present list");
    } else if (presentStudent.isPresent === undefined) {
      props.setStudentList(
        props.studentList.map((student) => {
          if (student.id === presentStudent.id) {
            student.isPresent = true;
          }
          return student;
        })
      );
    } else if (!presentStudent.isPresent) {
      alert("The student is already in the absent list");
    }
  };
  // Absent handler
  const absentHandler = (id) => {
    const presentStudent = props.studentList.find(
      (student) => student.id === id
    );
    if (presentStudent.isPresent) {
      alert("The student is already in the present list");
    } else if (presentStudent.isPresent === undefined) {
      props.setStudentList(
        props.studentList.map((student) => {
          if (student.id === presentStudent.id) {
            student.isPresent = false;
          }
          return student;
        })
      );
    } else if (!presentStudent.isPresent) {
      alert("The student is already in the absent list");
    }
  };
  //Toggle button
  const toggleHandler = (id) => {
    const student = props.studentList.find((student) => student.id === id);
    props.setStudentList(
      props.studentList.map((students) => {
        if (students.id === student.id) {
          students.isPresent = !students.isPresent;
        }
        return students;
      })
    );
  };
  // Reinitialization
  const reinitializeHandler = (id) => {
    const student = props.studentList.find((student) => student.id === id);
    props.setStudentList(
      props.studentList.map((students) => {
        if (students.id === student.id) {
          delete students.isPresent;
        }
        return students;
      })
    );
  };
  return (
    <div className="student-section">
      <AllStudents
        setStudentName={props.setStudentName}
        studentList={props.studentList}
        setStudentList={props.setStudentList}
        presentHandler={presentHandler}
        absentHandler={absentHandler}
        setEditMode={props.setEditMode}
        setEditableStudent={props.setEditableStudent}
      />
      <PresentStudent
        studentList={props.studentList}
        toggleHandler={toggleHandler}
        reinitializeHandler={reinitializeHandler}
      />
      <AbsentStudent
        studentList={props.studentList}
        toggleHandler={toggleHandler}
        reinitializeHandler={reinitializeHandler}
      />
    </div>
  );
}

export default StudentSection;
