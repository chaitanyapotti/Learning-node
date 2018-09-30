const path = require("path");
const os = require("os");
const fs = require("fs");
// const { log } = require("./logger");
const { Logger } = require("./logger");
const logger = new Logger();

const http = require("http");
//for a class, use caps, for methods, use camelCase
//const logger = require("./logger");

//Register a listener
logger.on("messageLogged", args => {
  console.log(`Listener called with ${args.message}`);
});

logger.log("Hello World");
//logger.log("Hello World");

const pathObj = path.parse(__filename);
logger.log(pathObj);

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

logger.log(`Total Memory: ${totalMemory}`);
logger.log(`Free Memory: ${freeMemory}`);

const files = fs.readdirSync("./");
logger.log(files);

fs.readdir("./", (err, resp) => {
  if (!err) logger.log(resp);
  else logger.log(err);
});

//for main apps, use express
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
// server.on("connection", socket => {
//   console.log("New Connection ...");
// });
// server.on("close", socket => {
//   console.log("Connection closed");
// });
server.listen(3000);

console.log("Listening on port 3000...");
