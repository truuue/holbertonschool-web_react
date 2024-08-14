import {
  Teacher,
  Directors,
  printTeacher,
  printTeacherFunction,
  StudentClass,
  Student,
} from "./main";

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

describe("Teacher interface", () => {
  test("should create teacher objects correctly", () => {
    const teacher3: Teacher = {
      firstName: "John",
      fullTimeEmployee: false,
      lastName: "Doe",
      location: "London",
      contract: false,
    };

    console.log(teacher3);
  });
});

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

describe("Teacher interface", () => {
  test("should create teacher objects correctly", () => {
    const director1: Directors = {
      firstName: "John",
      lastName: "Doe",
      location: "London",
      fullTimeEmployee: true,
      numberOfReports: 17,
    };
    console.log(director1);
  });
});

// should print "John Doe"
describe("printTeacher function", () => {
  test("should print the full name of a teacher", () => {
    const expectedOutput = "J. Doe";
    const result = printTeacher("John", "Doe");

    expect(result).toBe(expectedOutput);
  });
});

// should print "John Doe"
describe("printTeacherFunction type", () => {
  test("should print the full name of a teacher using the printTeacherFunction type", () => {
    const printTeacherFunc: printTeacherFunction = printTeacher;
    const expectedOutput = "J. Doe";
    const result = printTeacherFunc("John", "Doe");

    expect(result).toBe(expectedOutput);
  });
});

// should print
// Object
// firstName: "John"
// lastName: "Doe"

describe("StudentClass class", () => {
  test("should create student objects correctly", () => {
    const student1: StudentClass = new StudentClass("John", "Doe");

    console.log(student1);
  });
});

// should print "Currently working"
describe("Student interface", () => {
  test("should print the result of working on homework", () => {
    const student: Student = {
      firstName: "John",
      lastName: "Doe",
      workOnHomework() {
        return "Currently working";
      },
      displayName() {
        return this.firstName;
      },
    };

    const result = student.workOnHomework();

    expect(result).toBe("Currently working");
  });
});

// should print "John"
describe("Student interface", () => {
  test("should print the first name of a student", () => {
    const student: Student = {
      firstName: "John",
      lastName: "Doe",
      workOnHomework() {
        return "Currently working";
      },
      displayName() {
        return this.firstName;
      },
    };

    const expectedOutput = "John";
    const result = student.displayName();

    expect(result).toBe(expectedOutput);
  });
});
