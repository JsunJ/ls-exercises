interface Account {
  username: string;
  email: string;
  readonly accountCreationDate: string;
}

const userAccount: Account = {
  username: "johndoe123",
  email: "john@example.com",
  accountCreationDate: "2023-01-01",
};

// Attempt to modify the readonly property should result in an error
// userAccount.accountCreationDate = '2023-02-01';
// Error: Cannot assign to 'accountCreationDate' because it is a read-only property.