import { getStudentAPI, addStudentsAPI } from "./api.js";

console.log('Initial DB State:');
console.log(getStudentAPI());

const newStudent = {
  firstName: "Nemo",
  lastName: "Gajes",
  email: "nemogajes@example.com"
};

console.log("")
console.log("++++++++++++++++++++++")
console.log("")

const savedStudent = addStudentsAPI(newStudent);
console.log("Newly Added Student:", savedStudent);

console.log("")
console.log("++++++++++++++++++++++")
console.log("")

console.log('Updated DB State:');
console.log(getStudentAPI());