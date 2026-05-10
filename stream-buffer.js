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
      res.write(chunk);
    });

    readStream.on("end", () => {
      res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
