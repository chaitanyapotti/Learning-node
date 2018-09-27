import { createServer } from "http";

const server = createServer((re, res) => {
  res.end("Hello World\n");
});

server.listen(4242, () => {
  console.log("Listening at " + 4242);
});
