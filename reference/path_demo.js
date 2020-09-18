const path = require('path');

// Base file name
console.log(path.basename(__filename)); // path_demo.js

// Directory name
console.log(path.dirname(__filename)); // /Users/alex/Desktop/testing_apps/node_crash_course/reference

// File extension
console.log(path.extname(__filename)); // .js

// Create path object
console.log(path.parse(__filename).base); // path_demo.js

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); // /Users/alex/Desktop/testing_apps/node_crash_course/reference/test/hello.html



// More examples


// get the path delimiter base on the current OS Environment
const platSpec = path.delimiter;

console.log(platSpec); // :


// ge the path format on POSIX : / and Windows : \
// more info : https://nodejs.org/dist/latest-v11.x/docs/api/path.html#path_path_format_pathobject

// const pathformat = path.format({
//   dir: pathjoin,
//   root: pathjoin,
//   base: pathjoin,
//   name: pathjoin,
//   ext: pathjoin,
// });

// console.log(pathformat);


// get the parent folder director
const parentDir = path.dirname(__dirname);

console.log(parentDir); // /Users/alex/Desktop/testing_apps/node_crash_course
