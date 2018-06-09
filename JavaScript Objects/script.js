// var course = new Object();
//
// // course.title = "Javascript Essential Training";
// // course.instructor = "Morten Rand-Hendriksen";
// // course.level = 1;
// // course.published = true;
// // course.views = 0;
//
// var course = {
//   title : "Javascript Essential Training",
//   instructor: "Morten d",
//   level: 1,
//   published: true,
//   views:0,
//   updateViews: function(){
//     return ++course.views;
//   }
// }
// console.log(course.title);
// course.updateViews();
// console.log(course.views);
//
// var currentDate = new Date();
// var course02 = new Course();

function Course(title,instructor,level,published,views) {
  this.title = title;
  this.instructor = instructor;
  this.level= level;
  this.published = published;
  this.views = views;
  this.updateViews = function(){
    return ++this.views;
  };
}

var courses = [
  new Course("JavaScript Essential Training","Morten Rand",1,true,0),
  new Course("Java Essential Training","Mortenaa",2,true,1230)
]


console.log(courses[1].instructor);
console.log(courses[1].updateViews());
console.log(courses[1].views);
