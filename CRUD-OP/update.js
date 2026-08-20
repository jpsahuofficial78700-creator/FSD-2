const fs=require('fs');

fs.writeFile('example.txt','This is the updated content.',(err)=>{
    if(err) throw err;
    console.log('File overwritten(updated!');
});