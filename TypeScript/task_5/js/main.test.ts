import {
  MajorCredits,
  MinorCredits,
  sumMajorCredits,
  sumMinorCredits,
} from "./main";

describe("Test sumMajorCredits function", () => {
  test('Output: { credits: 7, brand: "MajorCredits" }', () => {
    const majorSubject1: MajorCredits = { credits: 3, brand: "MajorCredits" };
    const majorSubject2: MajorCredits = { credits: 4, brand: "MajorCredits" };
    const majorResult: MajorCredits = sumMajorCredits(
      majorSubject1,
      majorSubject2
    );
    console.log(majorResult);
  });
});

describe("Test sumMinorCredits function", () => {
  test('Output: { credits: 5, brand: "MinorCredits" }', () => {
    const minorSubject1: MinorCredits = { credits: 2, brand: "MinorCredits" };
    const minorSubject2: MinorCredits = { credits: 3, brand: "MinorCredits" };
    const minorResult: MinorCredits = sumMinorCredits(
      minorSubject1,
      minorSubject2
    );
    console.log(minorResult);
  });
});
