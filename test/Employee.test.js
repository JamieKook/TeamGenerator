const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});

//My tests I added 
//Name validation 
test ("Should return true for isValid if name is string of all letters or spaces", () =>{
  const name= "Jamie Kook"; 
  const e = new Employee(name, 1, "test@test.com"); 
  expect(e.isValid).toBe(true); 
}); 

test ("Should return false for isValid if name is undefined", () =>{
    const name= undefined; 
    const e = new Employee(name, 1, "test@test.com"); 
    expect(e.isValid).toBe(false); 
}); 

test ("Should return false for isValid if name is empty string", () =>{
  const name= ""; 
  const e = new Employee(name, 1, "test@test.com"); 
  expect(e.isValid).toBe(false); 
}); 

test ("Should return false for isValid if name contains numbers", () =>{
  const name= "Jamie1"; 
  const e = new Employee(name, 1, "test@test.com"); 
  expect(e.isValid).toBe(false); 
}); 


test ("Should return false for isValid if name contains special characters", () =>{
  const name= "Jamie!"; 
  const e = new Employee(name, 1, "test@test.com"); 
  expect(e.isValid).toBe(false); 
}); 

describe("Id validation", () => {
  it("Should return true for isValid if id is a number", () => {
    const id=13; 
    const e = new Employee("Foo", id, "test@test.com"); 
  expect(e.isValid).toBe(true); 
  });

  it("Should return false for isValid if id is a not a number", () => {
    const id="ten"; 
    const e = new Employee("Foo", id, "test@test.com"); 
  expect(e.isValid).toBe(false); 
  });

  it("Should return false for isValid if id is a not an empty string", () => {
    const id=""; 
    const e = new Employee("Foo", id, "test@test.com"); 
  expect(e.isValid).toBe(false); 
  });
}); 

describe("Email validation", () => {
  it("Should return true for isValid if email has a @ and . in it", () => {
    const email="jamie@work.com"; 
    const e = new Employee("Foo", 1, email); 
  expect(e.isValid).toBe(true); 
  });

  it("Should return false for isValid if email is empty", () => {
    const email=""; 
    const e = new Employee("Foo", 1, email); 
  expect(e.isValid).toBe(false); 
  });

  it("Should return false for isValid if email does not have an @ in it", () => {
    const email="Jamie.com"; 
    const e = new Employee("Foo", 1, email); 
  expect(e.isValid).toBe(false); 
  });

  it("Should return false for isValid if email does not have an . in it", () => {
    const email="Jamie@work"; 
    const e = new Employee("Foo", 1, email); 
  expect(e.isValid).toBe(false); 
  });
}); 
