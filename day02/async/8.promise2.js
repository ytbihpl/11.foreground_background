const fs = require('fs');

// fs.readFile('./1.txt','utf8',(err,result1)=>{
//     console.log(result1);
//     fs.readFile('./2.txt','utf8',(err,result2)=>{
//         console.log(result2);
//         fs.readFile('./3.txt','utf8',(err,result3)=>{
//             console.log(result3);
//         })
//     })
// });

function p1(){
    let p1 = new Promise((resole,reject)=>{
        // fs.readFile('./1.txt','utf8',(err,result)=>{
        //     resole(result);
        // })
        resole('p1');
    });
    return p1;
}

function p2(){
    let p2 = new Promise((resole,reject)=>{
        fs.readFile('./2.txt','utf8',(err,result)=>{
            resole(result);
        })
    });
    return p2;
}

function p3(){
    let p3 = new Promise((resole,reject)=>{
        fs.readFile('./3.txt','utf8',(err,result)=>{
            resole(result);
        })
    });
    return p3;
}


p1().then((result)=>{
    console.log(result);
    return p2();
})
.then((result)=>{
    console.log(result);
    return p3();
})
.then((result)=>{
    console.log(result);
})


