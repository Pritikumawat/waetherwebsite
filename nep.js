const fs = require('fs');
const homeFile = fs.readFileSync("home.html", "utf-8");
console.log(homeFile);