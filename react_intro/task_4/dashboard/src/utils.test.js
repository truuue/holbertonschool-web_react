import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("getFullYear", () => {
  it("should return the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe("getFooterCopy", () => {
  it("should return the correct string when the argument is true", () => {
    const isIndex = true;
    const expectedString = "© Holberton School";
    expect(getFooterCopy(isIndex)).toBe(expectedString);
  });

  it("should return the correct string when the argument is false", () => {
    const isIndex = false;
    const expectedString = "Holberton School main dashboard";
    expect(getFooterCopy(isIndex)).toBe(expectedString);
  });
});

describe("getLatestNotification", () => {
  it("should return a non-empty string", () => {
    const latestNotification = getLatestNotification();
    expect(latestNotification).toBeTruthy();
    expect(typeof latestNotification).toBe("string");
    expect(latestNotification.length).toBeGreaterThan(0);
  });
});
