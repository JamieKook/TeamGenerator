const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

test ("Should return true for isValid if school is string of all letters or spaces", () =>{
  const school= "Vanderbilt University"; 
  const e = new Intern("Foo", 1, "test@test.com", school);
  expect(e.isValid).toBe(true); 
}); 

test ("Should return false for isValid if school is undefined", () =>{
    const school= undefined; 
    const e = new Intern("Foo", 1, "test@test.com", school); 
    expect(e.isValid).toBe(false); 
}); 

test ("Should return false for isValid if school is empty string", () =>{
  const school= ""; 
  const e = new Intern("Foo", 1, "test@test.com", school); 
  expect(e.isValid).toBe(false); 
}); 

test ("Should return false for isValid if school contains numbers", () =>{
  const school= "Vandy1"; 
  const e = new Intern("Foo", 1, "test@test.com", school); 
  expect(e.isValid).toBe(false); 
}); 


test ("Should return false for isValid if school contains special characters", () =>{
  const school= "Vandy!"; 
  const e = new Intern("Foo", 1, "test@test.com", school); 
  expect(e.isValid).toBe(false); 
}); 