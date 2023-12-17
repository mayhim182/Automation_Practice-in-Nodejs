var fs = require('fs');

calculate = () =>{
    fs.readFile('data.txt','utf-8',(err,data)=>{
        if(err){
            throw new Error(err);
        }

        const arr = data.split('\r\n');
        const result = arr 
        .filter(item => item)
        .map(parseFloat)
        .reduce((curr,next)=>curr+next);
        console.log('RESULT', result);
    });
}

calculate();