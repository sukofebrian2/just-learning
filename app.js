const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Input Your Name : ', (nama) => {
    rl.question('Input Your Phone Number : ',(noHp)=>{
    console.log('Thank You For Filling In Everything' );
    rl.close();
});  
});

