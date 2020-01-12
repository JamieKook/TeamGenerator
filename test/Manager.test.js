const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

describe("Office Number validation", () => {
  it("Should return true for isValid if OfficeNumber is a number", () => {
    const OfficeNumber=13; 
    const e = new Manager("Foo", 1, "test@test.com", OfficeNumber);
  expect(e.isValid).toBe(true); 
  });

  it("Should return false for isValid if OfficeNumber is a not a number", () => {
    const OfficeNumber="ten"; 
    const e = new Manager("Foo", 1, "test@test.com", OfficeNumber);
  expect(e.isValid).toBe(false); 
  });

  it("Should return false for isValid if OfficeNumber is a not an empty string", () => {
    const OfficeNumber=""; 
    const e = new Manager("Foo", 1, "test@test.com", OfficeNumber);
  expect(e.isValid).toBe(false); 
  });
}); 