let statusCode = 404;
let category = 
    statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirection" :
    statusCode < 500 ? "Client Error" :
    statusCode >= 500 ? "Server Error" : "Unknown Status Code";

console.log(`Status Code: ${statusCode}, Category: ${category}`);