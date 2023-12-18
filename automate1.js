var fs = require('fs');
var gtts = require('gtts');
var player = require('play-sound')();

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

readAloudText = () =>{
    fs.readFile('data1.txt','utf-8',(err,data)=>{
        if(err){
            throw new Error(err);
        }
        const gtt = new gtts(data,'en');
        gtt.save('voice1.mp3',function (err,result){
            if(err){
                throw new Error(err);
            }
            console.log("Converted");
            playTheConverted();
        })
    });
}

playTheConverted = async ()=>{
    player.play('./voice1.mp3',(err)=>{
        if(err){
            throw new Error(err);
        }
    })
}

readAloudText();

async function handleFileUpload(event){
    const file = event.target.files.item(0);
    const text = await file.text();

    console.log(text);

    if(text){
        const fs1 = await require('fs');
        await fs1.writeFile('./data1.txt',text,(err)=>{
            if(err){
                throw new Error(err);
            }
        })
    }
}