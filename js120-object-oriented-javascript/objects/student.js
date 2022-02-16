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
      console.log(this.courses);
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

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"