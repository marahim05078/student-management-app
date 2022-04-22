import "./App.css";
import { useState } from "react";
import StudentSection from "./components/StudentSection";
import Form from "./components/Form";

function App() {
  // States
  const [studentName, setStudentName] = useState("");
  const [studentList, setStudentList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <div className="App">
      <h2>Student Management</h2>
      <Form
        studentName={studentName}
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
      <StudentSection
        setStudentName={setStudentName}
        studentList={studentList}
        setStudentList={setStudentList}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
    </div>
  );
}

export default App;
