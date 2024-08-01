//Task 5:

const str = "(123) 456-7890";
const regex = /\((\d{3})\) (\d{3})-(\d{4})/; 

const result = str.match(regex);
if (result) {
  const areaCode = result[1];
  const centralOfficeCode = result[2];
  const lineNumber = result[3];

  console.log(`Area Code: ${areaCode}`);
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
} else {
  console.log("No matches found");
}

//Task  6:
const email = "example.user@domain.com";
const regex1 = /^([^@]+)@([^@]+)$/; 

const matches1 = email.match(regex1);
if (matches1) {
  const username = matches1[1];
  const domain = matches1[2];

  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
} else {
  console.log("No matches found");
}
