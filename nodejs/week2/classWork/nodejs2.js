var http = require('http');
var StudentBook = require('./studentBook');
var server = http.createServer(function (req, res) {


  var url = req.url;

  const hyf_students= new StudentBook();

  var result;
  if (url == '/getList') {
    res.end(JSON.stringify(hyf_students.getList()));
  } 
  
  else if (url === '/getListByClass') { 
    res.end(JSON.stringify(result));
  } {

    res.end('done');
  }

  console.log('we need to send res to client')
  res.end('done');
});


// 4. A method that can add a new student to HYF which receive the below person object as an input and store to existing list. Check for duplication. 
addStudent(newStudent) {
  let newFoundStudent = this.studentsList.filter(student => {
      return student.name.includes(newStudent.name) == true || student.email.includes(newStudent.email) == true
  });
  if (newFoundStudent.length > 0) {
      console.log(`Student already added`);
  } else {
      this.studentsList.push(newStudent);
  }
}

// 5. A method that can edit existing student information
editStudentInfo(editInfo) {
  this.studentsList.filter(student => {
      if (editInfo.name == student.name) {
          student.classId = editInfo.classId;
          student.email = editInfo.email;
          student.phone = editInfo.phone;
          return student;
      }
  })
}

//6. A method to delete a student
deleteStudent(name) {
  let studentToDelete = this.studentsList.filter(student => student.name.toLowerCase() == name.toLowerCase());
  console.log(studentToDelete);
  this.studentsList.splice(this.studentsList.indexOf(studentToDelete), 1);
  return this.studentsList;
}


let Rieko = new Student(`Rieko`, 9, `bdk@jk`, `111-11-11`);
let Sheila = new Student(`Sheila Qasemi`, 8, `dsf@sd`, `999-99-99`);
let studentWithDuplicatedEmail = new Student(`Sheila not Sheila`, 8, `dsf@sd`, `555-99-99`);
let Virgeen = new Student(`Virgeen`, 7, `virginrashed4@gmail.com`, `(259) 245-5777`);

;
hyfStudents.addStudent(Rieko);
hyfStudents.addStudent(Sheila);
hyfStudents.addStudent(studentWithDuplicatedEmail); //student with the same email
hyfStudents.addStudent(Virgeen);


hyfStudents.getListByClass(8);
hyfStudents.getListByClass(7);

hyfStudents.getStudentDetailByName(`Hakk`);
hyfStudents.getStudentDetailByName('Virgeen');

hyfStudents.editStudentInfo({
"name": "Virgeen",
"classId": 09,
"email": "virginrashed4@gmail.com",
"phone": "(259) 245-5777"
});

hyfStudents.editStudentInfo({
"name": "Hakki",
"classId": 07,
"email": "adahbour54@gmail.com",
"phone": "(263) 972-6043"
})


server.listen(8080, function () {
  console.log('your server is running at port:8080')
});

