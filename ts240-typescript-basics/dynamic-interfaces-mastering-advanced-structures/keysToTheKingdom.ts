interface UserData {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof UserData;

function printUserDataField(userData: UserData, key: UserKeys): void {
  console.log(userData[key]);
}

const userData: UserData = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

printUserDataField(userData, "name");
// Output should be "Alice"
printUserDataField(userData, "age");
// Output should be 25