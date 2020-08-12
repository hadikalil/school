const handlers = require("./handlers");
const publicHandler = require("./publicHandler");
const autoStudentsNames = require("./autoStudentsNames");

function router(request, response) {
  const { url } = request;
  if (url === "/") {
    handlers.home(request, response);
  } else if (url.includes("public")) {
    publicHandler.publicHandler(request, response);
  } else if (url === "/fill") {
    handlers.fill(request, response);
  }else if (url === "/studentPost") {
    handlers.studentPost(request, response);
  }else if (url === "/wall") {
    handlers.wall(request, response);
  } else if (url === "/autoStudentsNames") {
    autoStudentsNames.studentsNames(request, response);
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end(`<h1>Not found</h1>`);
  }
}

module.exports = router;
