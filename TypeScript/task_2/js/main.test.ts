import { createEmployee, executeWork, teachClass } from "./main";

describe("createEmployee test", () => {
  test("should return employee correctly", () => {
    console.log(createEmployee(200));
    // Should return Teacher
    console.log(createEmployee(1000));
    // Should return Director
    console.log(createEmployee("$500"));
    // Should return Director
  });
});

describe("executeWork test", () => {
  test("should return employee correctly", () => {
    console.log(executeWork(createEmployee(200)));
    // Should return Getting to work
    console.log(executeWork(createEmployee(1000)));
    // Should return Getting to director tasks
  });
});

describe("executeWork test", () => {
  test("should return employee correctly", () => {
    console.log(teachClass("Math"));
    //Should return Teaching Math
    console.log(teachClass("History"));
    //Should return Teaching History
  });
});
