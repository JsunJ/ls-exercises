type Device = {
  manufacturer: string;
  model: string;
  year: number;
};

let computer: Device = {
  manufacturer: "Dell",
  model: "XPS",
  year: 2021,
};

let smartphone = {
  manufacturer: "Apple",
  model: "iPhone X",
  year: 2017,
  hasHeadphoneJack: false,
};

let anotherSmartphone: Device = smartphone;
// Allowed due to structural compatibility

// Best practice
let smartphone: Device = {
  manufacturer: "Apple",
  model: "iPhone X",
  year: 2017,
};

// If we wanted to include additional properties, we should extend our `Device` type.