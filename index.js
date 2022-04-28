// Code your solution here
const findMatching = (array, str) => array.filter(drivers => drivers.startsWith(str) || drivers.toLowerCase() === str.toLowerCase());

const fuzzyMatch = (names, str) => names.filter(name => name.startsWith(str));

const matchName = (driver, str) => driver.filter(name => name.name === str);

