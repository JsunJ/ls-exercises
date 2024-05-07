type Contact = {
  firstName: string;
  lastName: string;
  age?: number;
  isOnline?: boolean;
};

// Example usage with optional properties:
const contactWithoutAge: Contact = {
  firstName: "John",
  lastName: "Doe",
  // 'age' and 'isOnline' not provided, and that's okay now!
};