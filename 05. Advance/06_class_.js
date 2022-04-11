//Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//Defining Class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  //Private field(#)
  #courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }

  //Setter method
  enrollCourse(name) {
    this.#courseList.push(name);
  }

  //Getter method
  getCourseList() {
    return this.#courseList;
  }

  login() {
    return "You are logged in";
  }

  //static method cannot be inherited by sub-class
  static logout() {
    return "You are logged out";
  }
}

//Inheritance
class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am subadmin";
  }
  login() {
    return "login for admin only";
  }
}

//This will export class for using in other files
module.exports = User;
//export default User;  //ES6 syntax

//Class Object declaration
const rock = new User("rock", "rock@rock.com");
//console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList);

//Class Object declaration by Inheritance
const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());
