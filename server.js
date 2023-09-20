const http = require("http");

const host = "localhost";
const PORT = 8080;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.write(JSON.stringify({ message: "hola mundo" }));
  res.end();
};

const server = http.createServer(requestListener);

server.listen(PORT, host, () => {
  console.log(`servidor corriendo en http://${host}:${PORT}`);
});
