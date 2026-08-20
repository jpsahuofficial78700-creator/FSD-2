const fs=require('fs');

fs.writeFile('example.txt', 'Hello World!', (err)=>{
    if(err) throw err;
    console.log('File Created!');

    fs.readFile('example.txt','utf8',(err,data)=>{
        console.log('File content:',data);
    });
});