// importing http module
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<h1>Welcome to our home page</h1>");
  } else if (url === "/contact") {
    res.write("<h1>Welcome to our contact page</h1>");
  }
  res.end();
});

server.listen(5050, "127.0.0.1");
