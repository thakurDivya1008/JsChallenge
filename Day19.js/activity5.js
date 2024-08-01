//Task 9:
function validPassword(password){
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isValid = regex.test(password);
return isValid;

}

const password1 = "Password123!";
const password2 = "pass123";
console.log(`Password '${password1}' is valid :`, validPassword(password1));
console.log(`Password '${password2}'  is valid:`,validPassword(password2));

//Task  10:
function validateURL(url) {
    const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?[a-zA-Z0-9=&]*)?(#[\w-]*)?$/;
    const isValid = regex.test(url);
    console.log(`URL is valid: ${isValid}`);
}


const url1 = "https://www.example.com";
const url2 = "ftp://example.com";
const url3 = "http://www.example.com/path?name=value#anchor";

validateURL(url1); 
validateURL(url2); 
validateURL(url3); 