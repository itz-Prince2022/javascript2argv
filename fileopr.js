const fs = require('fs');

let ch = process.argv[2];
let fn = process.argv[3];

switch (ch) {
    case 'create':
        let fc = process.argv[4];
        fs.writeFileSync(fn, fc);
        console.log("File Created");
        break;
    case 'read':
        let fc1 = fs.readFileSync(fn);
        console.log(fc1.toLocaleString());
        break;
    case 'delete':
        fs.unlinkSync(fn);
        console.log("File Deleted");
        break;
    default:
        console.log("Invalid Choice");
}
