const path = require("path");
const fs = require("fs");

function publicHandler(request, response) {
    const requestURL = request.url;
    const ext = requestURL.split('.')[1];
    const extType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
    };
    const filepath = path.join(__dirname, '..', requestURL);
    fs.readFile(filepath, (error, file) => {
        if (error) {
            badRequest(request, response)
        } else {
            response.writeHead(200, { 'content-type': extType[ext] });
            response.end(file);
        }
    })
  }
  

  
module.exports = {
    publicHandler
  };
  