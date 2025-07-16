import React, { useState } from 'react';

export default function GradeCalculator() {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState('');
  const [result, setResult] = useState('');

  const calculateGrade = () => {
    const numMarks = parseFloat(marks);
    let grade = '';

    if (numMarks >= 90 && numMarks <= 100) {
      grade = 'A+';
    } else if (numMarks >= 80) {
      grade = 'A';
    } else if (numMarks >= 70) {
      grade = 'B+';
    } else if (numMarks >= 60) {
      grade = 'B';
    } else if (numMarks >= 50) {
      grade = 'C';
    } else if (numMarks >= 40) {
      grade = 'D';
    } else if (numMarks >= 0) {
      grade = 'F';
    } else {
      grade = 'Invalid Marks';
    }

    setResult(`${name}, your grade is ${grade}`);
  };

  return (
    <div>
      <h2>Grade Calculator</h2>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
      <br/>
      <input type="number" placeholder="Enter your marks" value={marks}onChange={(e) => setMarks(e.target.value)}/>
      <br/>
      <button onClick={calculateGrade}>
        Get Grade
      </button>
      <h3>{result}</h3>
    </div>
  );
}
