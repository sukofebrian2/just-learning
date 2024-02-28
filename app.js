// Core Module
// File System
const fs = require('fs');

console.log(fs);

// Menuliskan string ke file (synchronos)
// fs.writeFileSync('test.txt', 'Hello World secara synchronos');

// Menuliskan string ke file (ansychronos)
// fs.writeFile('test.txt', 'Hello World Secara Ansynchronos', (e) => {
    //console.log(e);
// });

// Membaca isi file (synchronos)
// const test = fs.readFileSync('test.txt');
// console.log(test.toString());

// Read Line
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Masukan Nama Anda : ', (nama) => {
    rl.question('Masukan Nomor Hp Anda : ',(noHp)=>{
    console.log('Terimakasih Sudah Mengisi Semuanya' );
    rl.close();
});  
});

