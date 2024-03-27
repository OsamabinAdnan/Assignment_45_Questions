/*we will make interface of our object first
for example we are making object for car, so it has many properties that name, model, price etc
we use interface to make object, keep in mind we used curly brackets in making of object
*/
interface itCourse {
  courseName: string;
  location: string;
  onSiteStudents: number;
}
//now we will create object
let itCourse = {
  courseName: "TS and JS",
  location: "Governor House Karachi",
  onSiteStudents: 50000,
};
console.log(itCourse);
