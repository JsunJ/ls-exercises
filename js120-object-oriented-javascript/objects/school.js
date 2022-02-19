function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    addCourse: function(course) {
      this.courses.push(course);
    },
    listCourses: function() {
      return this.courses;
    },
    addNote: function(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          if (!course.notes) course.notes = [];
          course.notes.push(note);
        }
      });
    },
    updateNote: function(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.notes = [];
          course.notes.push(note);
        }
      });
    },
    viewNotes: function() {
      this.courses.forEach(course => {
        if (!course.notes || course.notes.length === 0) return;
        if (course.notes.length > 1) {
          console.log(`${course.name}: ${course.notes.join('; ')}`);
        } else {
          console.log(`${course.name}: ${course.notes.join('')}`);
        }
      })
    }
  }
}

class School {
  constructor() {
    this.studentList = [];
  }

  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let newStudent = createStudent(name, year);
      this.studentList.push(newStudent);
      return newStudent;
    } else console.log('Invalid Year');
  }

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  }

  addGrade(student, courseName, courseGrade) {
    let studentCourse = student.listCourses().find(course => {
      return course.name === courseName;
    });
    if (studentCourse) studentCourse.grade = courseGrade;
  }

  getReportCard(student) {
    student.listCourses().forEach(course => {
      if (!course.grade) {
        console.log(`${course.name}: In progress`);
      } else {
        console.log(`${course.name}: ${course.grade}`);
      }
    })
  }

  courseReport(courseName) {
    let courseGrades = [];
    console.log(`=${courseName} Grades=`);

    this.studentList.forEach(student => {
      let course = student.courses.find(course => {
        return course.name === courseName;
      })

      if (!course) return;
      if (!course.grade) return;

      console.log(`${student.name}: ${course.grade}`);
      courseGrades.push(course.grade);
    })

    if (courseGrades.length < 1) return;
    let courseAverage = courseGrades.reduce((a, b) => {
      return a + b;
    }) / courseGrades.length;
    console.log('---');
    console.log(`Course Average: ${courseAverage}`);
  }
}

let school = new School;
let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.enrollStudent(bar, 'Math', 101);
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);
school.addGrade(bar, 'Math', 91);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);
school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');