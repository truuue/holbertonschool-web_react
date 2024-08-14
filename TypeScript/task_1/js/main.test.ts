import Teacher from "./main";

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
