const student = {
  name: "John",
  age: 23,
  isActive: true,
};

//Convert object to JSON String
const studentString = JSON.stringify(student);

//Convert JSON string to Object
const studentObj = JSON.parse(studentString);

//Topic: LocalStorage
//Store in local storage
localStorage.setItem("key_1", studentString);
