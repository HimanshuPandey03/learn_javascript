// singleton Object.create (constructor)

// object literals
//creation of object
//******************** Object Part 1 ********************

const mySymbol = Symbol("key1")

const JsUser = {
  name: "Himanshu",
  "full name": "Himanshu Pandey",
  [mySymbol]: "mykey1",
  age: 21,
  location: "Mumbai",
  email: "himanshu01@gamil.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}
//access of object
// console.log(JsUser.name)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySymbol])

JsUser.email = "himanshuchat01@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "himanshup01@gmail.com"
//console.log(JsUser);

// JsUser.greeting = function(){
//   console.log("Hello JS user");
// }
// JsUser.greetingOne = function(){
//   console.log(`Hello JS user, ${this.name}`);
// }
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser.greetingOne());

//******************** Object Part 2 ******************** 

// singleton Object.create (constructor)
// const newUser = new Object() singleton object
const newUser = {} //non-singleton object

newUser.id = "123ab"
newUser.name = "Sam"
newUser.isLoggedIn = false

//console.log(newUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Himanshu",
      lastname: "Pandey"
    }
  }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2} //spread operator

// console.log(obj3);

const users = [
  {
    id: 101,
    email: "test01@gmail.com"
  },
  {
    id: 102,
    email: "test02@gmail.com"
  },
]

users[1].email
// console.log(JsUser);

// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));
// console.log(Object.entries(JsUser));

// console.log(JsUser.hasOwnProperty('isLoggedIn'));

//******************** Object Part 3 ********************

// De-structure

const course = {
  courseName: "Javascript in Hindi",
  price: "999",
  courseInstructor: "bill clinton kumar"
}
//course.courseInstructor;

// const {courseInstructor} = course

// console.log(courseInstructor);

const {courseInstructor: Instructor} = course //object de-structure
//console.log(Instructor);

// {  JSON
//   "name": "abc",
//   "course": "javascript",
//   "price": "free"
// }

