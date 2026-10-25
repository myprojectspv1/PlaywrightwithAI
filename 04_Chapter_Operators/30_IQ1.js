let enviroment = "QA";
let url = enviroment === "PROD" ? "https://qa.example.com" : "https://prod.example.com";
console.log(url);