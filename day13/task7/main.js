const axios = require('axios');

axios
.get("https://fakeapi.com/products").then((response) =>{
    console.log(response.data);
})
.catch((error) =>{
    console.error(error);
});