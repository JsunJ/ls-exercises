interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "John Doe",
  age: 28,
  employeeId: 12345,
};

// No direct output; employee is used here as a type-safe structure