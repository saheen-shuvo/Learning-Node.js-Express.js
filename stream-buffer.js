const http = require("http");
const fs = require("fs");

//creating a server using raw node.js
const server = http.createServer();

//listener
server.on("request", (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/read-file" && req.method === "GET") {
    const readStream = fs.createReadStream(process.cwd() + "/read.txt");

    readStream.on("data", (chunk) => {
      res.statusCode = 200;
      res.write(chunk);
    });

    readStream.on("end", () => {
      res.statusCode = 200;
      res.end("File read successfully");
    });

    readStream.on("error", (err) => {
      console.log(err);
      res.statusCode = 500;
      res.end("Error reading file");
    });
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
