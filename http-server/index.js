const http = require('http');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

const port = argv.port || 3000;

let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err, home) => {
    if (err) {
        throw err;
    }
    homeContent = home;
});

fs.readFile("project.html", (err, project) => {
    if (err) {
        throw err;
    }
    projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
    if (err) {
        throw err;
    }
    registrationContent = registration;
});

http.createServer((req, res) => {
    let url = req.url;
    res.writeHeader(200, { "Content-Type": "text/html" });
    switch(url) {
        case "/project":
            res.write(projectContent);
            res.end();
            break;
        case "/registration":
            res.write(registrationContent);
            res.end();
            break;
        default:
            res.write(homeContent);
            res.end();
            break;
    }
})
.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// console.log('Hello 1');

// setTimeout(function() {
//     console.log('Hello 2');
// }, 100);
// console.log('hello3');
