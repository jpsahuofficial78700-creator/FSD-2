const fs=require('fs');

fs.appendFile('example.txt','\nThis line was added.',(err)=>{
    if(err) throw err;
    console.log('File updated (append)!');
});