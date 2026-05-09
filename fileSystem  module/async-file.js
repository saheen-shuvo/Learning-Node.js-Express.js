const fs = require('fs');

//reading a file text.txt asynchronously
//readFile
fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

//writing a file text.txt asynchronously
//writeFile
fs.writeFile('./texts/write.txt', 'This is a new file created by writeFile method.', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File written successfully');
    }
});

//appending data to a file text.txt asynchronously
//appendFile
fs.appendFile('./texts/write.txt', '\nThis is an appended line.', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Data appended successfully');
    }
});

//deleting a file text.txt asynchronously
//unlink
fs.unlink('./texts/write.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File deleted successfully');
    }
});


//readFileSync is a synchronous method which means it will block the execution of the code until it finishes reading the file. It takes two arguments, the first one is the path of the file and the second one is the encoding of the file. If we don't provide the encoding, it will return a buffer. 