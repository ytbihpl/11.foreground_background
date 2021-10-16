const fs = require('fs');
const path = require('path');

// fs.readFile('./01-helloworld.js','utf8',(err,doc)=>{
//          console.log(err);
//          console.log(doc);});
// console.log(__dirname);

// console.log(path.join(__dirname,'01-helloworld.js'));

fs.readFile(path.join(__dirname,'01-helloworld.js'),'utf8',(err,doc)=>{
    console.log(err);
    console.log(doc);
})