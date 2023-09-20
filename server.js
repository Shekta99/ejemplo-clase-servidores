const http = require("http");

const host = "localhost";
const PORT = 8080;

const requestListener = function (req, res) {
  // url https://docs.google.com/presentation/d/19yh2H8ik0GBL9GNr7A2sqiEidO8OcrAQ0P6dKm0JpAs/edit#slide=id.g196cbed37f9_0_0
  const url = new URL(req.url, `http://${host}:${PORT}`);
  if (url.pathname === "/user") {
    res.writeHead(200);
    res.write(JSON.stringify({ message: "hola mundo desde la ruta user" }));
    res.end();
  } else {
    res.writeHead(200);
    res.write(JSON.stringify({ message: "hola mundo" }));
    res.end();
  }
};

const server = http.createServer(requestListener);

server.listen(PORT, host, () => {
  console.log(`servidor corriendo en http://${host}:${PORT}`);
});
