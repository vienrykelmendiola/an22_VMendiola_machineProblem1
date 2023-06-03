//ITCS227 Source Code Template for 2t AY 2022-2023
/*
	Program:    Computation of Grades using Fucntion
	Programmer: Vien Rykel Mendiola
	Section: AN22
	Start Date: June 3, 2023
	End Date: June 3, 2023

*/

// Function to calculate the letter grade based on the score
function calculateLetterGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Function to calculate the average grade
function calculateAverageGrade(grades) {
  return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}

// Main program
const numStudents = 5;
const students = [];

for (let i = 0; i < numStudents; i++) {
  const student = {};

  console.log(`\nStudent ${i + 1}`);
  student.name = prompt('Enter student name: ');

  // Accepting enabling assessment grades
  student.enablingAssessments = [];
  for (let j = 0; j < 5; j++) {
    const grade = parseFloat(prompt(`Enter Enabling Assessment ${j + 1} grade: `));
    student.enablingAssessments.push(grade);
  }

  // Calculating class participation grade
  student.classParticipation = calculateAverageGrade(student.enablingAssessments);

  // Accepting summative assessment grades
  student.summativeAssessments = [];
  for (let j = 0; j < 3; j++) {
    const grade = parseFloat(prompt(`Enter Summative Assessment ${j + 1} grade: `));
    student.summativeAssessments.push(grade);
  }

  // Calculating summative grade
  student.summativeGrade = calculateAverageGrade(student.summativeAssessments);

  // Accepting final examination grade
  student.finalExamGrade = parseFloat(prompt('Enter Final Examination grade: '));

  // Calculating overall grade
  student.grade = (student.classParticipation + student.summativeGrade + student.finalExamGrade) / 3;

  // Calculating letter grade
  student.letterGrade = calculateLetterGrade(student.grade);

  // Pushing student to the array
  students.push(student);
}

// Displaying the results
for (const student of students) {
  console.log(`\nStudent Name: ${student.name}`);
  console.log(`Class Participation: ${student.classParticipation.toFixed(2)}`);
  console.log(`Summative Grade: ${student.summativeGrade.toFixed(2)}`);
  console.log(`Final Examination Grade: ${student.finalExamGrade.toFixed(2)}`);
  console.log(`Grade: ${student.grade.toFixed(2)}`);
  console.log(`Letter Grade: ${student.letterGrade}`);
}
