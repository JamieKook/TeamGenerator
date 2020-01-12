const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

test ("Should return true for isValid if github is string", () =>{
  const github= "JamieKook12"; 
  const e = new Engineer("Foo", 1, "test@test.com", github);
  expect(e.isValid).toBe(true); 
}); 

test ("Should return false for isValid if github is undefined", () =>{
    const github= undefined; 
    const e = new Engineer("Foo", 1, "test@test.com", github);
    expect(e.isValid).toBe(false); 
}); 

test ("Should return false for isValid if github is empty string", () =>{
  const github= ""; 
  const e = new Engineer("Foo", 1, "test@test.com", github);
  expect(e.isValid).toBe(false); 
}); 