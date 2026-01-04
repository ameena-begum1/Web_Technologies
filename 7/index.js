var http = require('http'); 
var os = require('os'); 
var fs = require('fs'); 
// HTTP Server 
var server = http.createServer(function (req, res) { 
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
    res.write('Hello Web Technologies Lab <br>'); 
    res.write('Date: ' + Date() + '<br>'); 
    res.write('Platform: ' + os.platform() + '<br>'); 
    res.write('Architecture: ' + os.arch() + '<br>'); 
    res.write('Host Name: ' + os.hostname() + '<br>'); 
    res.write('OS Type: ' + os.type() + '<br>'); 
    var text = fs.readFileSync('content.txt', 'utf8'); 
    res.write('<br>File Content:<br>' + text); 
    res.end(); 
}); 
server.listen(8080); 
// File System Operations 
fs.open('myfile1.txt', 'w', function (err, file) { 
    if (err) throw err; 
    console.log('File opened'); 
}); 
fs.writeFile('myfile3.txt', 'hello lab', function (err) { 
    if (err) throw err; 
    console.log('File written'); 
}); 
fs.appendFile('myfile1.txt', ' hello web', function (err) { 
if (err) throw err; 
console.log('File appended'); 
}); 
fs.rename('myfile3.txt', 'myfile4.txt', function (err) { 
if (err) throw err; 
console.log('File renamed'); 
}); 