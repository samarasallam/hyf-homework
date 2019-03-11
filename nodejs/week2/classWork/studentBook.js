class StudentBook {

getList() {
    return [{
        'name': 'Natalia',
        'email': 'natalia@mail.com'
      },
      {
        'name': 'Omit',
        'email': 'omit@mail.com'
      },
      {
        'name': 'Yana',
        'email': 'yana@mail.com'
      },
      {
        'name': 'Hema Gunti',
        'email': 'hema@mail.com'
      }
    ];
}

getListByClass(clasId=''){

return [{
    'name': 'Natalia',
    'classId': '08'
  },
  {
    'name': 'Keerthika devi',
    'classId': '08'
  },
  {
    'name': 'Kseniia',
    'classId': '08'
  }
];
}

getStudentDetailByName(name='sheila'){
return [{
    'name':'sheila',
    'classId':'08'
}]
}

addNewStudent(studentInfo={}){

}
editStudentInfo(){

}
}
module.exports= StudentBook;