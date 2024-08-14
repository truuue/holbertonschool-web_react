import Student from "./main";

describe("Student interface", () => {
  test("should create student objects correctly", () => {
    const student1: Student = {
      firstName: "John",
      lastName: "Doe",
      age: 20,
      location: "New York",
    };

    const student2: Student = {
      firstName: "Jane",
      lastName: "Smith",
      age: 22,
      location: "Los Angeles",
    };

    expect(student1.firstName).toBe("John");
    expect(student1.location).toBe("New York");

    expect(student2.firstName).toBe("Jane");
    expect(student2.location).toBe("Los Angeles");
  });
});
