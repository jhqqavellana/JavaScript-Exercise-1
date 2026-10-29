const mockStudentDB = [{
  id: 102303,
  firstName : "Jhqq Phyrr",
  lastName : "Avellana",
  email: "jpavellana@example.com"
},

{
  id: 122203,
  firstName: "Bianca Natalie",
  lastName: "Labarador",
  email: "bnlabrador@example.com"
}
];

export function getStudentAPI(){
  return mockStudentDB;
};

export function addStudentsAPI(newStudentData){
  const savedStudent = {
    id: Date.now(),
    ...newStudentData
  };

  mockStudentDB.push(savedStudent);
  return savedStudent;
}
