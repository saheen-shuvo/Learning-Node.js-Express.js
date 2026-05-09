const fs = require('fs');

//reading a file text.txt synchronously
//readFIleSync
const readText = fs.readFileSync('./texts/read.txt', 'utf-8'); //utf-8 is the encoding format of the file. It is used to read the file as a string. If we don't specify the encoding format, it will return a buffer object which is not human readable.
// console.log(readText);

//writing a file text.txt synchronously
//writeFileSync
const writeText = fs.writeFileSync('./texts/write.txt', 'This is a new file created by writeFileSync method.'); //if the file already exists, it will overwrite the existing file. If the file does not exist, it will create a new file and write the data in it.
console.log(writeText);

//appending data to a file text.txt synchronously
//appendFileSync
// fs.appendFileSync('./texts/write.txt', '\nThis is an appended line.'); //if the file already exists, it will append the data to the existing file. If the file does not exist, it will create a new file and write the data in it.

//deleting a file text.txt synchronously
//unlinkSync
// fs.unlinkSync('./texts/write.txt'); //it will delete the file. If the file does not exist, it will throw an error.
